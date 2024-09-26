import { getUsers } from "@/api/axios";
import { type UsersSearchResult } from "@/types/types";
import { useEffect, useState } from "react";

const RESULTS_PER_PAGE = 10;

export const useInfiniteUsers = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const [users, setUsers] = useState<UsersSearchResult[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [hasMorePages, setHasMorePages] = useState<boolean>(true);

  useEffect(() => {
    setUsers([]);
  }, [query]);

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);
    setIsError(false);

    const controller = new AbortController();
    const { signal } = controller;

    getUsers({
      params: {
        q: query,
        page,
        per_page: RESULTS_PER_PAGE
      },
      signal
    }).then(data => {
      setUsers(prevUsers => [...prevUsers, ...data.items]);
      setHasMorePages(data.items.length > 0);
      setIsLoading(false);
    }).catch(error => {
      setIsLoading(false);
      if (signal.aborted) return;
      setIsError(true);
      console.error(error);
    })

    return () => controller.abort();

  }, [page, query]);


  return { setQuery, setPage, users, isLoading, isError, hasMorePages }
}