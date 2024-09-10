import { ReactNode } from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'

type UsersListProps = {
  children: ReactNode;
}

const UsersList = ({ children }: UsersListProps) => {
  return (
    <ScrollArea className="w-full p-4 border rounded-md h-72">
      {children}
      <ScrollBar />
    </ScrollArea>
  )
}

export default UsersList