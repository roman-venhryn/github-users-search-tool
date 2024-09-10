import React, { Dispatch, SetStateAction, useRef } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useSearchParams } from 'react-router-dom';

type SearchFormProps = {
  onChangeQuery: Dispatch<SetStateAction<string>>;
  onChangePage: Dispatch<SetStateAction<number>>;
}

const SearchForm = ({ onChangeQuery, onChangePage }: SearchFormProps) => {

  const [, setSearchParams] = useSearchParams();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current?.value) {
      onChangePage(1);
      onChangeQuery(inputRef.current.value);

      //update the search param on form submit
      setSearchParams({
        q: inputRef.current?.value
      });
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex gap-4 place-items-center'>
        <label className='sr-only' htmlFor='search'>Search input</label>
        <Input type="text" id="search" name="search" placeholder="Search by username" ref={inputRef} />
        <Button type={'submit'}>Search</Button>
      </div>
    </form>
  )
}

export default SearchForm