import { getUser } from "@/api/axios";
import { defer, Params } from "react-router-dom";

const fetchUser = async (username: string) => {
  try {
    const data = getUser(username)
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function loader({ params }: { params: Params<'user'> }) {
  const username = params.user;
  if (username) return defer({
    user: fetchUser(username)
  })
}