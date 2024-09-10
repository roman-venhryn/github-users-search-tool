import SearchForm from "@/components/SearchForm/SearchForm";
import UsersList from "@/components/UsersList/UsersList";
import UsersListItem from "@/components/UsersListItem/UsersListItem";
import { useInfiniteUsers } from "@/hooks/useInfiniteUsers";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  //check if there was a search query before and update state
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const queryFromUrl = searchParams.get('q');
    if (queryFromUrl) setQuery(queryFromUrl);
  }, []);


  //retrieving data from custom hook
  const { isLoading, isError, users, hasMorePages } = useInfiniteUsers(query, page);

  //setting up intersection observer
  const observer = useRef<IntersectionObserver | null>(null)
  const lastUserElementRef = useCallback((node: HTMLLIElement) => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMorePages) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [isLoading, hasMorePages]);


  let usersContent: ReactNode;

  if (isLoading) {
    usersContent = <p className="text-center">Loading...</p>;
  } else if (!users.length && !isError) {
    usersContent = <p className="text-center">Type username and press "Search" to fetch users...</p>
  }


  return (
    <div className="container mx-auto border rounded-lg shadow-sm max-w-[520px] bg-card text-card-foreground flex flex-col gap-6 p-6">

      <h1 className="text-2xl font-semibold leading-none tracking-tight text-center">Github users search tool</h1>

      <SearchForm onChangePage={setPage} onChangeQuery={setQuery} />

      <UsersList>
        {users.length ? (
          <ul className="flex flex-col gap-2">
            {users.map((user, index) => {
              if (users.length === index + 1) return <li key={user.id} ref={lastUserElementRef}><UsersListItem user={user} /></li>
              else return <li key={user.id}><UsersListItem user={user} /></li>
            })}
          </ul>
        ) : null}

        {usersContent}
        {isError ? <p className="text-center">Something went wrong</p> : null}
      </UsersList>
    </div>
  )
}

export default SearchPage