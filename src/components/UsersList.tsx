import { Dispatch, SetStateAction, useRef } from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/ScrollArea'
import { UsersSearchResult } from '@/types/types';
import UsersListItem from '@/components/UsersListItem';
import Loading from '@/components/ui/Loading';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

type UsersListProps = {
  users: UsersSearchResult[];
  hasMorePages: boolean;
  isLoading: boolean;
  setPage: Dispatch<SetStateAction<number>>;
}

const UsersList = ({ users, isLoading, hasMorePages, setPage }: UsersListProps) => {

  const lastElementRef = useRef<HTMLLIElement>(null);

  useInfiniteScroll(lastElementRef, hasMorePages, isLoading, setPage);

  return (
    <ScrollArea className='h-full'>
      <ul className="flex flex-col gap-2">
        {users.map((user, index) => {
          if (users.length === index + 1) return <li key={user.id} ref={lastElementRef} ><UsersListItem user={user} /></li>
          else return <li key={user.id}><UsersListItem user={user} /></li>
        })}
        {isLoading && <Loading />}
      </ul>
      <ScrollBar />
    </ScrollArea>
  )
}

export default UsersList