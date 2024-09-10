//import { fetchUser } from "@/api/user";
import { Button } from "@/components/ui/button";
import { UserSearchItem } from "@/types/types";
import { Suspense } from "react";
import { Await, useNavigate, useRouteLoaderData } from "react-router-dom"

const UserInfoPage = () => {
  const { user } = useRouteLoaderData('user-details') as UserSearchItem;
  const navigate = useNavigate();

  return (
    <div className='container mx-auto border rounded-lg shadow-sm max-w-[520px] bg-card text-card-foreground p-6'>
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <Await resolve={user}>
          {(loadedUser) => (
            <div className="space-y-2">
              <Button variant={'link'} onClick={() => navigate(-1)} className="absolute top-0 left-0">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                </svg>
                Go back
              </Button>
              <img className="w-32 h-32 mx-auto rounded-full" src={loadedUser.avatar_url} alt="Bordered avatar"></img>
              <p className="p-2 text-2xl font-semibold leading-none tracking-tight text-center">{loadedUser.name}</p>
              <p className="w-full text-center"><a href={`https://github.com/${loadedUser.login}`} target="_blank">@{loadedUser.login}</a></p>
              <p className="flex justify-center gap-4">
                <a href={`https://github.com/${loadedUser.login}?tab=followers`} target="_blank">{loadedUser.followers} Followers</a>
                <a href={`https://github.com/${loadedUser.login}?tab=following`} target="_blank">{loadedUser.following} Following</a>
              </p>
              <p>Company: {loadedUser.company ? loadedUser.company : 'none'}</p>
              <p>Email: {loadedUser.email}</p>
              <p>Blog: {loadedUser.blog}</p>
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  )
}

export default UserInfoPage