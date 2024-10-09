import { Rupiah } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export type TProduct = {
  id: number,
  name: string
  description: string
  image: string
  price: number
  status: "Available"| "Out of stock"
}
const ProductItem = ( item: TProduct) => {
  return (
    <Link href={`/products/${item.id}`} className='rounded-lg block group'>
      <div>
        <div className='aspect-square relative rounded-lg overflow-hidden'>
          <Image src={item.image} alt='product-1' fill className='h-full w-full object-cover group-hover:scale-110 transition duration-300' />
        </div>
        <div className='mt-2'>
          <h2 className='font-semibold'>{ item.name}</h2>
          <span className='line-clamp-2 text-sm'>
            {item.description}
          </span>
          <div className='flex justify-between items-center mt-2'>
            <div className='font-semibold'>{Rupiah(item.price)}</div>
            {
              item.status === "Available" ? (
                <div className='text-xs bg-green-100 text-green-600 px-2 py-1 rounded-md'>{ item.status}</div>
              ): (
                  <div className='text-xs bg-red-100 text-red-600 px-2 py-1 rounded-md'>{ item.status}</div>
              )
            }
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem