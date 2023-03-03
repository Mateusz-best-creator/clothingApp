import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';

import CartItem from '../cart-item/cart-item.component';
import { DropdownContext } from '../../contexts/cart-dropdown.context';

const CartDropdown = () => {

    const { cartItems } = useContext(DropdownContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map((item) => {
                        return (
                            <CartItem key={item.id} cartItem={item} />
                        )
                    })
                }
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown