import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterInputing = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <FilterLabel htmlFor="filterInput">Find Contact</FilterLabel>
      <FilterInput
        id="filterInput"
        type="text"
        name={filter}
        onChange={filterInputing}
        placeholder="Find contact by name"
      />
    </>
  );
};

export default Filter;
