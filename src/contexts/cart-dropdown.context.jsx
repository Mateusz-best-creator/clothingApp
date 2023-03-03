import React, { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((item) => {
        return item.id === productToAdd.id;
    })
  
    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            return cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        })
    }
    
    // Otherwise return new array with modified cartItems
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const DropdownContext = createContext({
    isDropped : false,
    setIsDropped: () => null,
    cartItems: [],
    addItemToCart: () => null,
    itemsCounter: null,
    setItemsCounter: () => null,
})

export const DropdownProvider = ({children}) => {
    const [isDropped, setIsDropped] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCounter, setItemsCounter] = useState(0);

    useEffect(() => {
        const newCartCounter = cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);
        setItemsCounter(newCartCounter);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        // setItemsCounter(itemsCounter + 1);
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const value = {isDropped, setIsDropped, addItemToCart, cartItems, itemsCounter};

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}