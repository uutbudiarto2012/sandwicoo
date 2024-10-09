"use client"
import HomeProduct from '@/components/products';
import { Rupiah } from '@/lib/utils';
import { useProductStore } from '@/stores/product';
import Image from 'next/image';

import { useParams } from 'next/navigation';

import { useEffect } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const ProductDetail = () => {
  const param = useParams()
  const id = param.id;

  const { detail, getProductId } = useProductStore()
  useEffect(() => {
    getProductId(Number(id))
  }, [])

  return (
    <div>
      <div className="mx-container py-6">
        {
          Object.keys(detail).length > 0 ? (
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className='w-full lg:w-[420px] aspect-square relative overflow-hidden rounded-xl'>
                <Image fill className='w-full h-full object-cover' src={detail.image} alt='product' />
              </div>
              <div className="flex-1">
                <div>
                  <h1 className='text-xl'>{detail.name}</h1>
                </div>
                <div>
                  <div className='space-y-3'>
                    <div className='text-xl md:text-2xl lg:text-3xl'>{Rupiah(detail.price)}</div>
                    {
                      detail.status === 'Available' ? (
                        <span className='text-xs bg-lime-400/30 text-lime-600 py-1 px-2 rounded-md'>{detail.status}</span>
                      ) : (
                        <span className='text-xs bg-red-400/30 text-red-600 py-1 px-2 rounded-md'>{detail.status}</span>
                      )
                    }

                  </div>
                  <div className='bg-slate-50 p-3 rounded-xl mt-3'>
                    <p>{detail.description}</p>
                  </div>
                  <div>
                    {
                      detail.status === "Available" ? (
                        <a href={`https://api.whatsapp.com/send?phone=6281319220003&text=Halo%20Admin%20Sandwicoo,%20Saya%20Mau%20Beli%20product%20${detail.name}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#5CB33C] text-white rounded-lg font-bold inline-flex items-center gap-2" >
                          <BsWhatsapp />
                          Beli Sekarang!
                        </a>
                      ) : (
                          <div className="px-6 py-3 bg-[#5CB33C] text-white rounded-lg font-bold inline-flex items-center gap-2">
                            Produk Kosong
                          </div>
                      )
                    }
                    
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )
        }
      </div>
      <HomeProduct title="Rekomendasi" subtitle="Produk yang mungkin anda suka" />
    </div>
  )
}

export default ProductDetail