import { useContext } from 'react';
import DataContext from '../Context/DataContex';

export default function Main(props) {
    const data = useContext(DataContext);
    console.log(data)
    return(
        <div></div>
    );
}