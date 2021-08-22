import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <nav className='menu'>
            <Link to='/' className='menu-link'>главная</Link>
            <Link to='/posts/new' className='menu-link'>сделать пост</Link>
        </nav>
    );
}