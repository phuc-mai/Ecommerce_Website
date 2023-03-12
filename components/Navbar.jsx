import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from "react-icons/ai"
import { Cart } from './'
import { useStateContext } from 'context/StateContext'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext()
    return (
        <div className='navbar-container'>
            <div className='navbar1'>
                <p>FREE SHIPPING WORLDWIDE</p>
            </div>
            <div className='navbar2'>
                <center><img width='120px' src='/assets_2/Logo_Transparent.png' /></center>
            </div>
            <div className='navbar3'>
                <Link href="/" className='navLink'>
                    Home
                </Link>
                <Link href="/products" className='navLink'>
                    Products
                </Link>
            </div>

            <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
        </div>
    )
}

export default Navbar
