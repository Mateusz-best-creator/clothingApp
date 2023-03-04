import React, {useContext} from "react";
import './checkout-item.styles.scss';

import { DropdownContext } from "../../contexts/cart-dropdown.context";

const CheckoutItem = ({ cartItem }) => {

    const { imageUrl, name, price, quantity } = cartItem;
    const { addItemToCart, removeItemToCart, clearItemFromList } = useContext(DropdownContext);

    const clearItemFromListHandler = () => clearItemFromList(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <div className='checkout-item-container'>
           <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
           </div>
           <span className='name'> {name} </span>
           <span className='quantity'>
                <div onClick={() => removeItemHandler()} className='arrow'>
                    &#10094;
                </div> 
                <span className='value'>{quantity}</span>
                <div onClick={() => addItemHandler()} className='arrow'>
                    &#10095;
                </div> 
           </span>
           <span className='price'> {price} </span>
           <div onClick={() => clearItemFromListHandler()} className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;