import React from 'react'
import { Product } from '../../components'
import { urlFor, client } from 'lib/client'

const products = ({ products }) => {
    return (
        <div className='products-container'>
            {products?.map(
                (product) => <Product key={product._id} product={product} />)}
        </div>
    )
}

export const getServerSideProps = async () => {

    const query = '*[_type == "product"]'
    const products = await client.fetch(query);

    return {
        props: { products }
    }
}

export default products

