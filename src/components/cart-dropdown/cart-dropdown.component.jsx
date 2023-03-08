import Button from '../button/button.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { DropdownContext } from '../../contexts/cart-dropdown.context';

import { 
    DropdownContainer,
    CartItemsContainer,
    EmptyMessage,
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {

    const { cartItems } = useContext(DropdownContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <DropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length 
                    ? cartItems.map((item) => {
                            return (
                                <CartItem key={item.id} cartItem={item} />
                            )
                        })
                    :  <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItemsContainer>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </DropdownContainer>
    )
}

export default CartDropdown