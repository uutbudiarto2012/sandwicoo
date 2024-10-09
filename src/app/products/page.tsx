"use client"
import ProductItem from '@/components/products/ProductItem';
import { useProductStore } from '@/stores/product';
import { useEffect } from 'react';

const ProductPage = () => {
  const { data, getProduct } = useProductStore()
  useEffect(() => getProduct(), [])
  return (
    <div>
      <section className='py-6 md:py-12'>
        <div className="mx-container">
          <div className='max-w-xl'>
            <h2 className='text-xl md:text-2xl'>Produk Kami</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nihil.  </p>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 mt-6'>
            {
              data.map((item) => (
                <ProductItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                  id={item.id}
                  status={item.status} />
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage