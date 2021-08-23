import DataContext from '../../Context/DataContex';
import moment from 'moment';
import { useContext } from 'react';

moment.locale('ru');

export default function Card({ card }) {
  const { deleteTicket, pickCard } = useContext(DataContext);

  const { id, content, created } = card;
  const date = moment(created).format('LL')

  const handleDelete = () => {
    deleteTicket(id);
  }

  const handlePick = () => {
    pickCard(id);
  }

  return(
    <div className='card' style={{width: '18rem'}}>
      <div className='card-body' onClick={handlePick}>
        <h6 className='card-subtitle mb-2 text-muted'>{date}</h6>
        <p className='card-text'>{content}</p>
      </div>
      <div className='card-body'>
        <button type='button' className='btn btn-danger' onClick={handleDelete}>Удалить</button>
        <button type='button' className='btn btn-primary'>Редактировать</button>
      </div>
    </div>
  );
}