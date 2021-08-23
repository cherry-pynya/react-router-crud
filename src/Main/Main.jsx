import { useContext } from 'react';
import DataContext from '../Context/DataContex';
import Card from './Card/Card';
import { v4 as uuidv4 } from 'uuid';

export default function Main(props) {
    const { data } = useContext(DataContext);
    console.log('main', data)
    return(
        <div>
            {data.map((el) => <Card card={el} key={uuidv4()} />)}
        </div>
    );
}