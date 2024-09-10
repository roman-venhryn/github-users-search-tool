import { getUser } from "@/api/axios";
import { UserInfoLoaderParams } from "@/types/types";
import { defer, LoaderFunction } from "react-router-dom";

const fetchUser = async (username: string) => {
  try {
    const data = getUser(username)
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  const typedParams = params as unknown as UserInfoLoaderParams;
  return defer({
    user: fetchUser(typedParams.username)
  })
}