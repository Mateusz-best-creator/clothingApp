import React, { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

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
    itemsCounter: 0,
    setItemsCounter: () => null,
    totalPrice: 0,
    setTotalPrice: () => null,
})

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
    isDropped : false,
    cartItems: [],
    itemsCounter: 0,
    totalPrice: 0,
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isDropped: payload,
            }
        default:
            throw new Error(`unhanlded type ${type} in cart reducer`)
        
    }
}

export const DropdownProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(cartReducer, INITIAL_STATE);
    const { cartItems, isDropped, itemsCounter, totalPrice } = state;

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCounter = newCartItems.reduce(
            (accumulator, item) => accumulator + item.quantity, 0);

        const newCartTotal = newCartItems.reduce(
            (accumulator, item) => accumulator + item.quantity * item.price, 0);

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: newCartItems, 
                totalPrice: newCartTotal,
                itemsCounter: newCartCounter,
            })
        )
    }

    const addItemToCart = (productToAdd) => {
        // setItemsCounter(itemsCounter + 1);
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemToCart = (productToRemove) => {
        // setItemsCounter(itemsCounter + 1);
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromList = (productToClear) => {
        const newCartItems = clearItem(cartItems, productToClear);
        updateCartItemsReducer(newCartItems);
    }

    const setIsDropped = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
    }

    const value = {
        isDropped, 
        setIsDropped,
        addItemToCart,
        removeItemToCart,
        clearItemFromList,
        cartItems, 
        itemsCounter, 
        totalPrice,
    };

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}