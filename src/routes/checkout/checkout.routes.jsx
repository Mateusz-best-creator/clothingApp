import React, {useContext} from "react";
import './checkout.styles.scss';
import { DropdownContext } from "../../contexts/cart-dropdown.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {

    const { cartItems, totalPrice } = useContext(DropdownContext);

    return (
        <div className='checkout-container'>

            <div className="checkout-header">
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) => {
                const { id } = cartItem;
                return <CheckoutItem key={id} cartItem={cartItem} />
            })}
            <span className='total'>Total: ${totalPrice}</span>
        </div>
    )
}

export default Checkout;