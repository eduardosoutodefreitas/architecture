import React from 'react'
import icon from '../../../public/assets/logo-arch.svg'
import Image from 'next/image'
import Button from '@/app/componentes/Button'
 const Navbar = () => {
  return (
    <div className='flex flex-row justify-between md:px-32 px-5 p-4 m-2'>
        <div className='flex flex-row items-center gap-12 text-lightText p-2'>
        <div>
            <Image src={icon} alt="logo"/>
        </div>
        <nav className='hidden md:flex gap-4'>
            <a className='hover:text-brightRed transition-all' href="/works">How it Works</a>
            <a className='hover:text-brightRed transition-all' href="/gallery">Design Gallery</a>
            <a className='hover:text-brightRed transition-all' href="architects">Architects</a>
            <a className='hover:text-brightRed transition-all' href="articles">Articles</a>
        </nav>
        </div>
        <div className='flex flex-row items-center p-2 gap-4'>
            <a href="/signIn">Sign In</a>
            <Button title="Sign Up"/>
        </div>
    </div>
  )
}
export default Navbar