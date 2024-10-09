import React from 'react'
import { MdCleanHands, MdOutlinePriceCheck } from 'react-icons/md'
import { Ri24HoursFill } from 'react-icons/ri'

const HomeOverview = () => {
  return (
    <div className='bg-slate-100 py-4 md:py-8'>
      <div className="mx-container">
        <div>
          <h2 className='text-xl md:text-2xl'>Mengapa Di Koselani Premium?</h2>
          <p>Kemewahan Eksklusif Menanti di Sereniti - Dimana Gaya Bertemu Kualitas.</p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-6'>
          <div className='bg-white p-3 rounded-lg'>
            <div className='flex gap-2 items-center'>
              <div className="h-8 w-8 flex items-center justify-center border rounded-md">
                <MdCleanHands />
              </div>
              <h3 className='text-xl md:text-2xl font-bold'>Higienis</h3>
            </div>
            <p className='text-sm md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa error, cumque ipsam sunt eaque nulla facere minus repellat minima.
            </p>
          </div>
          <div className='bg-white p-3 rounded-lg'>
            <div className='flex gap-2 items-center'>
              <div className="h-8 w-8 flex items-center justify-center border rounded-md">
                <MdOutlinePriceCheck />
              </div>
              <h3 className='text-xl md:text-2xl font-bold'>Harga Terjangkau</h3>
            </div>
            <p className='text-sm md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa error, cumque ipsam sunt eaque nulla facere minus repellat minima.
            </p>
          </div>
          <div className='bg-white p-3 rounded-lg'>
            <div className='flex gap-2 items-center'>
              <div className="h-8 w-8 flex items-center justify-center border rounded-md">
                <Ri24HoursFill />
              </div>
              <h3 className='text-xl md:text-2xl font-bold'>Service 24 Jam</h3>
            </div>
            <p className='text-sm md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa error, cumque ipsam sunt eaque nulla facere minus repellat minima.
            </p>
          </div>
        </div>

        <div className='mt-6 mx-auto max-w-xl text-center p-4 border border-dashed  bg-lime-500/10 text-lime-600 rounded-lg border-lime-400'>
          {/* tagline */}
          <p className='text-xl italic font-ligh'>
            Sandwich lezat, selalu fresh dan siap dinikmati kapan saja. Dibuat dengan bahan pilihan untuk kepuasan setiap gigitan.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeOverview