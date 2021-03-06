import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './../../assets/crown.svg';
import {auth} from './../firebase/firebase.utils';
const Header=({currentUser})=>(
    <div className='header'>
        <Link to='/'>
        <Logo className='logo'/>
        </Link>
     <div className='options'>
        <Link className='option' to='/shop'>
            Shop
        </Link>
        <Link className='option' to='/shop'>
            Contact
        </Link>
        {currentUser?
        <div onClick={()=>auth.signOut()}>SignOut</div>:
        <Link className='option' to='/signin'>
            SignIn
        </Link>}
        
     </div>

    </div>
);
export default Header;

