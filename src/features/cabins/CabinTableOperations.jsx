import Filter from '../../ui/Filter';
import Sort from '../../ui/Sort';
import TableOperations from '../../ui/TableOperations';

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='discount'
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With Discount' },
        ]}
      />
      <Sort
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by by lowest price' },
          { value: 'regularPrice-desc', label: 'Sort by by highest price' },
          { value: 'maxCapacity-asc', label: 'Sort by by lowest capacity' },
          { value: 'maxCapacity-desc', label: 'Sort by by highest capacity' },
        ]}
      />
    </TableOperations>
  );
}
