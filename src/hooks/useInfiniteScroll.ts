import { Dispatch, RefObject, SetStateAction, useCallback, useEffect, useRef } from "react";

export const useInfiniteScroll = <T extends HTMLElement>(
  targetRef: RefObject<T>,
  canExecute: boolean,
  isLoading: boolean,
  changePage: Dispatch<SetStateAction<number>>,
  options?: IntersectionObserverInit) => {

  const observer = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (isLoading) return;
      if (entries[0].isIntersecting && canExecute) {
        changePage(prevPage => prevPage + 1);
      }
    },
    [changePage, isLoading, canExecute]
  );


  useEffect(() => {
    if (targetRef.current) {
      observer.current = new IntersectionObserver(handleIntersection, options);
      observer.current.observe(targetRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [targetRef, handleIntersection, options]);

  return observer;
}