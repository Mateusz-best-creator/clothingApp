import React, {useContext} from "react";
import { DropdownContext } from "../../contexts/cart-dropdown.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

// styled components
import {
    CheckoutContainer,
    Header,
    HeaderBlock,
    LastHeader,
    TotalSum,
} from './checkout.styles';

const Checkout = () => {

    const { cartItems, totalPrice } = useContext(DropdownContext);

    return (
        <CheckoutContainer>

            <Header>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <LastHeader>
                    <span>Remove</span>
                </LastHeader>
            </Header>

            {cartItems.map((cartItem) => {
                const { id } = cartItem;
                return <CheckoutItem key={id} cartItem={cartItem} />
            })}
            <TotalSum>Total: ${totalPrice}</TotalSum>
        </CheckoutContainer>
    )
}

export default Checkout;