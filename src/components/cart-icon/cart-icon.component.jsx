import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import React, { useContext } from 'react';
import { DropdownContext } from '../../contexts/cart-dropdown.context';

import './cart-icon.styles.scss';

const CartIcon = () => {

    const { itemsCounter } = useContext(DropdownContext);

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemsCounter}</span>
        </div>
    )
}

export default CartIcon;