import { type UsersSearchItem } from '@/types/types'
import { Link } from 'react-router-dom';

type UsersListItemProps = {
  user: UsersSearchItem;
}

const UsersListItem = ({ user }: UsersListItemProps) => {
  return (
    <Link to={`/${user.login}`} className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground h-9">
      {user.login}
    </Link>
  )
}

export default UsersListItem