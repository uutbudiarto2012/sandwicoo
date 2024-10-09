import Link from 'next/link'
import React from 'react'

const MyFooter = () => {
  return (
    <footer className=' bg-slate-200'>
      <div className="mx-container py-5 flex flex-col md:flex-row justify-between">
        <p className='text-xs'>
        © Copyright 2024 Sandwicoo. All Rights Reserved.
        </p>
        <Link className='text-xs' href={'/'}>Syarat Dan Ketentuan</Link>
      </div>
    </footer>
  )
}

export default MyFooter