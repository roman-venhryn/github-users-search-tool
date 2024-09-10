import { type UsersSearchItem } from '@/types/types'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

type UsersListItemProps = {
  user: UsersSearchItem;
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