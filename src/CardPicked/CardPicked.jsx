import Card from '../Main/Card/Card';
import DataContext from '../Context/DataContex';
import { useContext } from 'react';

export default function CardPicked(props) {
  const { data } = useContext(DataContext);
  const url = props.location.pathname
  const id = url.slice(url.length - 2, url.length)
  const card = data.find(el => el.id === Number(id));
  return(
    <Card card={card} props={props} />
  );
}