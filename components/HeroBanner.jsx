import React from 'react'
import Link from 'next/link'
import { urlFor } from 'lib/client'

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <h3>{heroBanner.midText}</h3>
                <p className='hero-small-text'>{heroBanner.smallText}</p>
                <p className='hero-desc'>{heroBanner.desc}</p>
                <img src={urlFor(heroBanner.image)} alt='smartphone' className='hero-banner-image' />
                <div>
                    <Link href={`/product/${heroBanner.product}`}>
                        <button type='button'
                        // onClick={() => window.location = `/product/${heroBanner.product}`}
                        >{heroBanner.buttonText}</button>
                    </Link>
                    <div className='desc'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
