import { type UsersSearchResult } from '@/types/types'
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

type UsersListItemProps = {
  user: UsersSearchResult;
}

const UsersListItem = ({ user }: UsersListItemProps) => {
  return (
    <Button asChild variant={"outline"} className="w-full">
      <Link to={`/${user.login}`}>
        {user.login}
      </Link>
    </Button>
  )
}

export default UsersListItem