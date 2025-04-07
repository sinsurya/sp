import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
  
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c6a4b163-90b9-437b-ab02-38e6577a7d81");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{  opacity: 1}}
    transition={{ duration: 1 }}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <motion.h4 
      initial={{ y:-20, opacity: 0}}
      whileInView={{ y:0, opacity: 1}}
      transition={{ delay:0.3, duration: 0.5}}
      className='text-center mb-2 text-lg font-Ovo'>
        Connect with me
      </motion.h4>
      <motion.h2 
      initial={{ y:-20, opacity: 0}}
      whileInView={{ y:0, opacity: 1}}
      transition={{ delay:0.5, duration: 0.5}}
      className='text-center text-5xl font-Ovo'>
        Get in touch
      </motion.h2>

      <motion.p 
      initial={{ opacity: 0}}
      whileInView={{  opacity: 1}}
      transition={{ delay:0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I am always open to discussing new projects, creative ideas or opportunities to be part of your vision. If you have any questions or would like to connect, feel free to reach out to me via email or LinkedIn. I look forward to hearing from you!
      </motion.p>

      <motion.form 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ delay:0.9, duration: 0.5 }}
      onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
          <motion.input 
          initial={{ x:-50, opacity: 0}}
          whileInView={{ x:0, opacity: 1}}
          transition={{ delay:1.1, duration: 0.6 }}
          type="text" placeholder='Enter your name' required
          className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
          rounded-md bg-white'name='name'/>
          <motion.input 
          initial={{ x:50, opacity: 0}}
          whileInView={{ x:0, opacity: 1}}
          transition={{ delay:1.2, duration: 0.6 }}
          type="email" placeholder='Enter your email' required 
          className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
          rounded-md bg-white'name='email'/>
        </div>
        <motion.textarea 
        initial={{ y:100, opacity: 0}}
        whileInView={{ y:0, opacity: 1}}
        transition={{ delay:1.3, duration: 0.6 }}rows='6' placeholder='Enter your message' required 
        className='w-full p-4 outline-none border-[0.5px] border-gray-400
        rounded-md bg-white mb-6' name='message'></motion.textarea>

        <motion.button 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1 }}
        type='submit'
        className='py-3 px-8 w-max flex items-center justify-between gap-2 border border-black 
         text-black rounded-full mx-auto hover:bg-black hover:text-white duration-500'>
          Submit </motion.button>
        
        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
