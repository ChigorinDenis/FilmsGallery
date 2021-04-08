import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { togglePage } from '../reducers/uiReducer';
import { range } from 'lodash';

const calcPages = (count:number) => {
  const pageSize = 50;
  const pagesNumber = Math.ceil(count / pageSize);
  return range(1, pagesNumber + 1);
}

const Pagination: React.FC = () => {
  const { currentPage } = useAppSelector((state) => state.ui);
  const { count } = useAppSelector((state) => state.films);
  const pages = calcPages(count);
  const dispatch = useAppDispatch();
  return (
    <ul className='pagination'>
      {pages.map((item) => {
        const pageClass = item === currentPage ? 
          'page page-active' :
          'page';
        return (
        <li
          className={pageClass}
          onClick={() => dispatch(togglePage(item))}
        >
          {item}
        </li>
        )
      })}
    </ul>
  );
};

export default Pagination;