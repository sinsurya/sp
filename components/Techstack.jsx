import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

export default function TechStack() {
    const techStack = [
        { name: 'Python', icon: '/tech/python.png' },
        { name: 'Java', icon: '/tech/java.png' },
        { name: 'C++', icon: '/tech/cpp.png' },
        { name: 'HTML', icon: '/tech/html.png' },
        { name: 'CSS', icon: '/tech/css.png' },
        { name: 'JavaScript', icon: '/tech/js.png' },
        { name: 'React', icon: '/tech/react.png' },
        { name: 'NodeJS', icon: '/tech/nodejs.png' },
        { name: 'MongoDB', icon: '/tech/mongodb.png' },
        { name: 'Git', icon: '/tech/git.png' },
        { name: 'VsCode', icon: '/tech/vscode.png' },
        { name: 'MySQL', icon: '/tech/mysql.png' },
        { name: 'Tailwind CSS', icon: '/tech/tailwind.png' },
        { name: 'Github', icon: '/tech/github.png' },
        { name: 'NextJS', icon: '/tech/nextjs.png' },
    ]

    return (
        <div className="p-6 bg-gray dark:bg-white-900 max-w-full mx-auto">
          <motion.h2 
          initial={{ y:-20, opacity: 0}}
          whileInView={{ y:0, opacity: 1}}
          transition={{ duration: 0.5}}
          className="text-3xl font-bold mb-10 text-center text-white-800 dark:text-gray ">
            Tech Stack
          </motion.h2>
          <motion.div 
          initial={{ y:-20, opacity: 0}}
          whileInView={{ y:0, opacity: 1}}
          transition={{ duration: 1 }}
          className="grid grid-cols-5 sm:grid-cols-4 lg:grid-cols-7 gap-1 gap-y-12 ">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <Image
                  width={64}
                  height={64}
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain mb-2"
                />
                <p className="text-sm font-semibold text-gray-700 dark:text-black-300 ">
                  {tech.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      )
    }

  
