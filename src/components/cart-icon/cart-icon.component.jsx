import React, { useContext } from 'react';
import { DropdownContext } from '../../contexts/cart-dropdown.context';

import { 
    ShoppingIconContainer,  
    ShoppingIcon,
    Counter,
} from './cart-icon.styles.jsx';

const CartIcon = () => {

    const { itemsCounter } = useContext(DropdownContext);

    return (
        <ShoppingIconContainer>
            <ShoppingIcon/>
            <Counter>{itemsCounter}</Counter>
        </ShoppingIconContainer>
    )
}

export default CartIcon;