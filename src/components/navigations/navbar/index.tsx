"use client"
import { RiMenuLine } from 'react-icons/ri'
import MenuItem from './menu-item'
import { useMenuStore } from '@/stores/menu'
import { IoMdClose } from 'react-icons/io'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const { open, isOpen, close } = useMenuStore()

  const handleOpenMenu = () => {
    open()
  }
  const handleCloseMenu = () => {
    close()
  }
  return (
    <nav className='bg-white shadow-sm px-2 sticky top-0 z-30'>
      <div className='flex items-center h-[70px] mx-container'>
        <div className='w-1/3 shrink-0'>
          <Link href={'/'} className="w-32 h-16 shrink-0 relative block">
            <Image src={'/images/logo.png'} fill className='h-full w-full object-contain' alt="logo" />
          </Link>
        </div>
        <div className='flex-1 justify-end'>
          <div className={cn(
            'space-y-6 md:space-y-0 items-center transition-all flex flex-col md:flex-row md:justify-end gap-x-12 fixed top-1/2 bottom-0 left-0 right-0 bg-white z-30 md:relative p-6 md:p-0',
            !isOpen ? "translate-y-[100vh] md:translate-y-0" : 'translate-y-0'
          )}>
            <MenuItem onClick={close} href='/' label='Home' />
            <MenuItem onClick={close} href='/products' label='Products' />
            <MenuItem onClick={close} href='/teams' label='Teams' />
            <MenuItem onClick={close} href='/about' label='About Us' />
          </div>
          {
            !isOpen ? (
              <button onClick={handleOpenMenu} className='flex md:hidden ml-auto'>
                <RiMenuLine className='w-6 h-6' />
              </button>
            ) : (
              <button onClick={handleCloseMenu} className='flex md:hidden ml-auto'>
                <IoMdClose className='w-6 h-6' />
              </button>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar