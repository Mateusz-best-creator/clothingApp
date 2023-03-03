import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { DropdownContext } from '../../contexts/cart-dropdown.context';

import { signOutUser } from '../../utils/firebase/firebase.utils'; 

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isDropped, setIsDropped } = useContext(DropdownContext);

  const handleDropdown = () => {  
    const currentValue = isDropped;
    setIsDropped(!currentValue);
  }

  return (
    <Fragment>
      <div className='navigation'>
          <Link to='/' className='logo-container'>
            <div><CrownLogo className='logo' /></div>
          </Link>
          <div className='nav-links-container'>
            <Link to='/shop' className='nav-link'>SHOP</Link>
            { currentUser ? 
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> 
              :
              <Link to='/auth' className='nav-link'>SIGN IN</Link>
            }
            <div onClick={handleDropdown}>
              <CartIcon onClick={handleDropdown} />
            </div>
          </div>
          {
            isDropped ? <CartDropdown /> : ''
          }
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;