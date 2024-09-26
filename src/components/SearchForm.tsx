import { Dispatch, SetStateAction } from 'react'
import { useSearchParams } from 'react-router-dom';

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

type SearchFormProps = {
  onChangeQuery: Dispatch<SetStateAction<string>>;
  onChangePage: Dispatch<SetStateAction<number>>;
}

const SearchForm = ({ onChangeQuery, onChangePage }: SearchFormProps) => {

  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const search = new FormData(e.currentTarget).get('search') as string;

    if (search) {
      onChangePage(1);
      onChangeQuery(search);
      //update the search param on form submit
      setSearchParams({
        q: search
      });
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex gap-4 place-items-center'>
        <label className='sr-only' htmlFor='search'>Search input</label>
        <Input type="text" id="search" name="search" placeholder="Search by username" required />
        <Button type={'submit'}>Search</Button>
      </div>
    </form>
  )
}

export default SearchForm