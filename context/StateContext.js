import React, { createContext, useContext, useState, useEffect } from 'react'

import { toast } from 'react-hot-toast';
import product from 'sanity_ecommerce/schemas/product';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    let foundProduct
    let index

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id)
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((item) => {
                if (item._id === product._id) return {
                    ...item,
                    quantity: item.quantity + quantity
                }
            })

            setCartItems(updatedCartItems)

        } else {
            product.quantity = quantity
            setCartItems([...cartItems, { ...product }])
        }

        toast.success(`${quantity} ${product.name} added to the cart.`)
    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id)

        if (value === 'inc') {
            cartItems[index].quantity += 1;
            setCartItems([...cartItems]);
            // setCartItems([...cartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }])
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                // setCartItems([...cartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])
                cartItems[index].quantity -= 1;
                setCartItems([...cartItems]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
            }

        }
    }

    const onRemove = (id) => {
        foundProduct = cartItems.find((item) => item._id === id)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setCartItems(cartItems.filter((item) => item._id != id));
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1
            return prevQty - 1
        })
    }

    return (
        <Context.Provider value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            // toggleCartItemQuanitity,
            onRemove,
            setCartItems,
            setTotalPrice,
            setTotalQuantities,
            toggleCartItemQuantity,
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)
