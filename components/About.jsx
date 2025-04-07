import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { infoList } from '@/assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1 }}>
      <motion.h4 
      initial={{ opacity: 0, y:-20}}
      whileInView={{ opacity: 1,y:0}}
      transition={{ duration: 0.5,delay:0.3 }}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </motion.h4>
      <motion.h2 
      initial={{ opacity: 0, y:-20}}
      whileInView={{ opacity: 1,y:0}}
      transition={{ duration: 0.5,delay:0.5}}
      className='text-center text-5xl font-Ovo'>
        About me
      </motion.h2>
      <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div 
        initial={{ opacity: 0, scale:0.9}}
        whileInView={{ opacity: 1,scale:1}}
        transition={{ duration: 0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user_image' className='w-full rounded-3xl'/>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.6,delay:0.8 }}
        className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
            I am a passionate and motivated engineering graduate with a strong foundation in Full Stack Development and DevOps practices. I have hands-on experience working with front-end technologies like HTML, CSS, JavaScript, and React.js, as well as back-end frameworks such as Node.js and Next.js.
            </p>

            <motion.ul 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.8,delay:1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
              {infoList.map(({icon, icondark, title, description},index) => (
                <motion.li 
                whileInView={{scale:1.05}}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                  <Image src={icon} alt={title}/>
                  <h3 className='my-4 font-semibold text-gray-600 text-sm'>{title}</h3>
                  <p>{description}</p>
                </motion.li>
                ))}
            </motion.ul>
            <h4>
             
            </h4>
            <ul>
              
            </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
