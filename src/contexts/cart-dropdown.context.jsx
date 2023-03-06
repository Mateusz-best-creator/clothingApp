import React, { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((item) => {
        return item.id === productToAdd.id;
    })
  
    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            return (
                cartItem.id === productToAdd.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
        })
    }
    
    // Otherwise return new array with modified cartItems
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((item) => {
        return item.id === cartItemToRemove.id;
    })

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id);
    }

    return cartItems.map((item) => {
        return (
            item.id === cartItemToRemove.id 
            ? {...item, quantity: item.quantity - 1}
            : item
        )
    })
}

const clearItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((item) => item.id !== cartItemToClear.id);
}

export const DropdownContext = createContext({
    isDropped : false,
    setIsDropped: () => null,
    cartItems: [],
    addItemToCart: () => null,
    removeItemToCart: () => null,
    clearItemFromList: () => null,
    itemsCounter: null,
    setItemsCounter: () => null,
    totalPrice: null,
    setTotalPrice: () => null,
})

export const DropdownProvider = ({children}) => {
    const [isDropped, setIsDropped] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCounter, setItemsCounter] = useState(0);

    // Price of all clothes
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newCartCounter = cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0);
        setItemsCounter(newCartCounter);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (accumulator, item) => accumulator + item.quantity * item.price, 0);

        setTotalPrice(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        // setItemsCounter(itemsCounter + 1);
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (productToRemove) => {
        // setItemsCounter(itemsCounter + 1);
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromList = (productToClear) => setCartItems(clearItem(cartItems, productToClear));

    const value = {
        isDropped, 
        setIsDropped, 
        addItemToCart,
        removeItemToCart,
        clearItemFromList,
        cartItems, 
        setCartItems, 
        itemsCounter, 
        totalPrice,
    };

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}