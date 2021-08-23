import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <nav className='btn-group'>
            <Link to='/' className='btn btn-primary'>главная</Link>
            <Link to='/posts/new' className='btn btn-primary'>сделать пост</Link>
        </nav>
    );
}