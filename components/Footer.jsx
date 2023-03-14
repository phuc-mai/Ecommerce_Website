import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='footer-container'>
            <p>© 2023 Phuc Mai Electronics</p>
            <p className='icons'>
                <Link href="https://www.instagram.com/">
                    <AiFillInstagram />
                </Link>
                <Link href='https://twitter.com/?lang=en'>
                    <AiOutlineTwitter />
                </Link>
            </p>
        </div>
    )
}

export default Footer
