import { getUsers } from "@/api/axios";
import { type UsersSearchItem } from "@/types/types";
import { useEffect, useState } from "react";

const RESULTS_PER_PAGE = 10;

export const useInfiniteUsers = (query: string, pageNumber: number = 1) => {
  const [users, setUsers] = useState<UsersSearchItem[] | []>([]);
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
        page: pageNumber,
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
      console.log(error);
    })

    return () => controller.abort();

  }, [pageNumber, query]);


  return { users, isLoading, isError, hasMorePages }
}