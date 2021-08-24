import DataContext from '../Context/DataContex';
import { useContext } from 'react';
import Form from '../Form/Form';

export default function EditCard(props) {
  const { data, editCard } = useContext(DataContext);
  const url = props.location.pathname
  const id = url.slice(url.length - 2, url.length)
  const card = data.find(el => el.id === Number(id));

  return (
    <Form card={card} func={editCard} edit={true} {...props} />
  );
}