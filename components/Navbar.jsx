import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  
  const [isScroll,setIsScroll]= useState(false)
  const sideMenuRef= useRef();
  
  const openMenu=()=>{
    sideMenuRef.current.style.transform='translateX(-16rem)'
  }
  
  const closeMenu=()=>{
    sideMenuRef.current.style.transform='translateX(16rem)'
  }

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY>50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-dark bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>     
        <a href="#top">
            <Image src={assets.logo} alt="" className='w-28 cursor-pointer mr-14'/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About me</a></li>
          <li><a className='font-Ovo' href="#work">My Work</a></li>
          <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <a 
            href="https://github.com/sinsurya" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='flex items-center gap-3 px-4 py-2.5 border border-gray-500 rounded-full font-Ovo hover:bg-gray-100 transition duration-300'
          >  
            {assets.github && (
            <Image src={assets.github} alt="GitHub" className='w-9' />
            )}
            
          </a>
          <a 
            href="https://www.linkedin.com/in/dasari-surya-prakash-reddy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='flex items-center gap-3 px-4 py-2.5 border border-gray-500 rounded-full font-Ovo hover:bg-gray-100 transition duration-300'
          >  
            {assets.linkedin && (
            <Image src={assets.linkedin} alt="Linkedin" className='w-9' />
            )}
            
          </a>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 '>
          <div className='absolute top-6 right-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>
          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
