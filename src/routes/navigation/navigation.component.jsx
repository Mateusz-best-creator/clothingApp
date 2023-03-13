import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import { Outlet } from 'react-router-dom';
import React, { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { DropdownContext } from '../../contexts/cart-dropdown.context';

import { signOutUser } from '../../utils/firebase/firebase.utils'; 

// import './navigation.styles.scss';
import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)

  const { isDropped, setIsDropped } = useContext(DropdownContext);

  const handleDropdown = () => {  
    const currentValue = isDropped;
    setIsDropped(!currentValue);
  }

  return (
    <Fragment>
      <NavigationContainer>
          <LogoContainer to='/'>
            <CrownLogo className='logo' />
          </LogoContainer>
          <NavLinksContainer>
            <NavLink to='/shop'>SHOP</NavLink>
            { currentUser  
              ? <NavLink as='span' onClick={signOutUser}>
                  SIGN OUT
                </NavLink> 
              : <NavLink to='/auth'>SIGN IN</NavLink>
            }
            <div onClick={handleDropdown}>
              <CartIcon onClick={handleDropdown} />
            </div>
          </NavLinksContainer>
          {
            isDropped ? <CartDropdown /> : ''
          }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;