import { type ReactNode, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SearchForm from "@/components/SearchForm";
import UsersList from "@/components/UsersList";
import { useInfiniteUsers } from "@/hooks/useInfiniteUsers";

const SearchPage = () => {

  //retrieving data from custom hook
  const { users, setQuery, setPage, isLoading, isError, hasMorePages } = useInfiniteUsers();

  //check if there was a search query before and update state
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const queryFromUrl = searchParams.get('q');
    if (queryFromUrl) setQuery(queryFromUrl);
  }, [searchParams, setQuery]);


  let usersContent: ReactNode;

  if (isError) {
    usersContent = <p className="text-center">Something went wrong</p>;
  } else if (!users.length && !isLoading) {
    usersContent = <p className="text-center">Type username and press "Search" to fetch users...</p>
  } else {
    usersContent = <UsersList {...{ users, setPage, isLoading, hasMorePages }} />
  }


  return (
    <>
      <header className="grid gap-4">
        <h1 className="text-2xl font-semibold tracking-tight text-center">Github users search tool</h1>
        <SearchForm onChangePage={setPage} onChangeQuery={setQuery} />
      </header>

      <main className="w-full p-4 border rounded-md shadow-sm h-72">
        {usersContent}
      </main>
    </>
  )
}

export default SearchPage