import React, {useContext} from "react";
import { DropdownContext } from "../../contexts/cart-dropdown.context";

import { 
    CheckoutContainer,
    ImageContainer,
    RemoveButton,
    NamePrice,
    Quantity,
    Arrow,
    Value,
} from  './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {

    const { imageUrl, name, price, quantity } = cartItem;
    const { addItemToCart, removeItemToCart, clearItemFromList } = useContext(DropdownContext);

    const clearItemFromListHandler = () => clearItemFromList(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <CheckoutContainer>
           <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
           </ImageContainer>
           <NamePrice> {name} </NamePrice>
           <Quantity>
                <Arrow onClick={() => removeItemHandler()}>
                    &#10094;
                </Arrow> 
                <Value>{quantity}</Value>
                <Arrow onClick={() => addItemHandler()}>
                    &#10095;
                </Arrow> 
           </Quantity>
           <NamePrice> {price} </NamePrice>
           <RemoveButton onClick={() => clearItemFromListHandler()}>
                &#10005;
           </RemoveButton>
        </CheckoutContainer>
    )
}

export default CheckoutItem;