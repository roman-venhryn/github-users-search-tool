import { UserInfo } from "@/types/types";
import { Button } from "./ui/Button";
import BuildingIcon from "@/assets/icons/BuildingIcon";
import EnvelopeIcon from "@/assets/icons/EnvelopeIcon";
import LinkIcon from "@/assets/icons/LinkIcon";

type UserProfileProps = {
  user: UserInfo;
}

function UserProfile({ user }: UserProfileProps) {

  return (
    <>
      <img className="w-32 h-32 mx-auto rounded-full" src={user.avatar_url} alt="Bordered avatar"></img>
      <p className="p-2 text-2xl font-semibold leading-none tracking-tight text-center">{user.name}</p>
      <p className="w-full text-center">
        <Button asChild variant={"link"} className="p-0 text-lg font-normal">
          <a href={`https://github.com/${user.login}`} target="_blank">@{user.login}</a>
        </Button>
      </p>
      <p className="flex justify-center gap-2">
        <Button asChild variant={"link"} className="px-2">
          <a href={`https://github.com/${user.login}?tab=followers`} target="_blank">{user.followers} Followers</a>
        </Button>
        <Button asChild variant={"link"} className="px-2">
          <a href={`https://github.com/${user.login}?tab=following`} target="_blank">{user.following} Following</a>
        </Button>
      </p>

      {
        user.company && user.email && user.blog &&
        <ul className="flex flex-col gap-2 p-4 bg-card text-card-foreground">
          {user.company && <li className="flex justify-center gap-2">
            <BuildingIcon /><p className="text-sm font-medium">{user.company}</p>
          </li>}
          {user.email && <li className="flex justify-center gap-2">
            <EnvelopeIcon /><a className="text-sm font-medium hover:underline underline-offset-4" href={`mailto:${user.email}`}>{user.email}</a>
          </li>}
          {user.blog && <li className="flex justify-center gap-2">
            <LinkIcon /><a href={user.blog} target={"_blank"} className="text-sm font-medium hover:underline underline-offset-4">{user.blog}</a>
          </li>}
        </ul>
      }
    </>
  );
}

export default UserProfile;

