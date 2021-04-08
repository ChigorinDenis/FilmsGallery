import * as React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import axios from 'axios';
import { addFilms } from '../reducers/filmsReducer';
import { chunk } from 'lodash';

type Film = {
  id?: any;
  name?: string;
  genres?: Array<any>;
  runtime?: number;
  image?: {
    medium:string
  };
  network?: any;
  rating?: any;
};

const ListFilms: React.FC = () => {
  const dispach = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await axios.get('http://api.tvmaze.com/shows?page=1');
        dispach(addFilms(response.data));
      } catch(err) {
        return err.message;
      }
    }
    fetchData();
  }, []);
  const { items } = useAppSelector((state) => state.films);
  const { currentPage } = useAppSelector((state) => state.ui);
  const pageSize = 50;
  const chunkedFilms = chunk(items, pageSize);
  const currentSliceFilms = chunkedFilms[currentPage - 1];
  return (
    <table className='table'> 
      <thead>
        <tr>
          <td>Обложка</td>
          <td>Название</td>
          <td>Жанр</td>
          <td>Страна</td>
          <td>Длительность</td>
          <td>Рейтинг</td>
        </tr>
        </thead>
        <tbody>
          {currentSliceFilms && currentSliceFilms.map((film: Film) => {
            const {
              id,
              name,
              genres,
              runtime,
              image,
              network,
              rating,
            } = film;
            return (
              <tr key={id}>
                <td>
                  <img src={image?.medium} alt={name} />
                </td>
                <td data-label='Название'>{name}</td>
                <td data-label='Жанр'>{genres?.join(' ,') || '-'}</td>
                <td data-label='Страна'>{network?.country?.name}</td>
                <td data-label='Длительность'>{runtime || '-'}</td>
                <td data-label='Рейтинг'>{rating.average || '-'}</td>
              </tr>
            )
          })}
        </tbody>
    </table>
  );
}

export default ListFilms;