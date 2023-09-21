import { useSearchParams } from 'react-router-dom';
import Select from './Select';

export default function Sort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') || '';

  function handleChange(e) {
    searchParams.set('sort', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type='white'
      onChange={handleChange}
      value={sortBy}
    />
  );
}
