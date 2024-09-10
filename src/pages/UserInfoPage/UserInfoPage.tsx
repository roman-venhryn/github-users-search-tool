import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { Await, useNavigate, useRouteLoaderData } from "react-router-dom"
import { type UserSearchItem } from "@/types/types";
import Error from "../../components/Error/Error";

const UserInfoPage = () => {
  const { user } = useRouteLoaderData('user-details') as UserSearchItem;
  const navigate = useNavigate();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={user} errorElement={<Error />}>
        {(loadedUser) => {
          const { avatar_url, name, login, followers, following, company, email, blog } = loadedUser;

          const noDetails = !company && !email && !blog;

          return <div>
            <Button variant={'link'} onClick={() => navigate(-1)} className="absolute left-2 top-2">
              <ArrowLeftIcon />Go back
            </Button>
            <img className="w-32 h-32 mx-auto rounded-full" src={avatar_url} alt="Bordered avatar"></img>
            <p className="p-2 text-2xl font-semibold leading-none tracking-tight text-center">{name}</p>
            <p className="w-full text-center">
              <Button asChild variant={"link"} className="p-0 text-lg font-normal">
                <a href={`https://github.com/${loadedUser.login}`} target="_blank">@{login}</a>
              </Button>
            </p>
            <p className="flex justify-center gap-2">
              <Button asChild variant={"link"}>
                <a href={`https://github.com/${login}?tab=followers`} target="_blank">{followers} Followers</a>
              </Button>
              <Button asChild variant={"link"}>
                <a href={`https://github.com/${login}?tab=following`} target="_blank">{following} Following</a>
              </Button>
            </p>
            {noDetails ? null : (
              <ul className="flex flex-col gap-2 p-6 bg-card text-card-foreground">
                {company ? (
                  <li className="flex justify-center gap-2">
                    <BuildingIcon /><a href={`https://github.com/${company.slice(1)}`} target={"_blank"} className="text-sm font-medium hover:underline underline-offset-4">{company}</a>
                  </li>
                ) : null}
                {email ? (
                  <li className="flex justify-center gap-2">
                    <EnvelopeIcon /><a className="text-sm font-medium hover:underline underline-offset-4" href={`mailto:${email}`}>{email}</a>
                  </li>
                ) : null}
                {blog ? (
                  <li className="flex justify-center gap-2">
                    <LinkIcon /><a href={blog} target={"_blank"} className="text-sm font-medium hover:underline underline-offset-4">{blog}</a>
                  </li>
                ) : null}
              </ul>
            )}
          </div>
        }}
      </Await>
    </Suspense>
  )
}

export default UserInfoPage