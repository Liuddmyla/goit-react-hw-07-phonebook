import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slice';
import css from './Filter.module.css';


const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <>
      <p className={css['text-filter']}>Find contacts by name</p>
      <input      
      type="text"
      name="filter"
      onChange={changeFilter}
      className={css['input-filter']}
      />
    </>    
  );
};

export default Filter;