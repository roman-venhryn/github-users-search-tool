import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import { type UserInfo } from "@/types/types";

import { getUser } from "@/api/axios";
import Loading from "@/components/ui/Loading";
import UserProfile from "@/components/UserProfile";
import { Button } from "@/components/ui/Button";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";

const ProfilePage = () => {
  const [user, setUser] = useState<UserInfo>();

  //retrieve user login from url to fetch user data
  const { username } = useParams<{ username: string; }>();

  //fetch user data
  useEffect(() => {
    getUser(username!).then(user => setUser(user));
  }, [username]);

  const navigate = useNavigate();

  if (user === undefined) return <Loading />;

  return (
    <>
      <Button variant={'link'} onClick={() => navigate(-1)} className="absolute left-2 top-2">
        <ArrowLeftIcon />Go back
      </Button>
      <UserProfile user={user} />
    </>
  )
}
export default ProfilePage