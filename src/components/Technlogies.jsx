import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import {FaJava} from "react-icons/fa6";
import {BiLogoSpringBoot } from "react-icons/bi";
import { ImHtmlFive2 } from "react-icons/im";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import {animate, motion} from "framer-motion";

const iconVarients = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10, -10],
        transition:{
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})


export const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
    <motion.h1 whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration: 1.5}} className='my-20 text-center text-4xl text-neutral-500'>Technologies</motion.h1>
    <motion.div whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x:-100}}
    transition={{duration: 1.5}} className='flex flex-wrap items-center justify-center gap-4'>
    <motion.div 
    variants={iconVarients(2.5)}
    initial="initial"
    animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <ImHtmlFive2 className='text-7xl justify-center text-red-700'/>
            <div className='flex items-center pt-1 justify-center'>HTML5</div>
        </motion.div>
        <motion.div variants={iconVarients(3.5)}
    initial="initial"
    animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiTailwindcss className='text-7xl pl-5 justify-center text-sky-400'/>
            <div className='flex items-center pt-1 justify-center'>Tailwind CSS</div>
        </motion.div>
        <motion.div     variants={iconVarients(5)}
    initial="initial"
    animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoJavascript className='pl-1 text-7xl justify-center text-yellow-500'/>
            <div className='flex items-center pt-1 justify-center'>JavaScript</div>
        </motion.div>
        <motion.div     variants={iconVarients(2)}
    initial="initial"
    animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaJava className='text-7xl justify-center text-orange-600'/>
            <div className='flex items-center pt-1 justify-center'>Java</div>
        </motion.div>
        <motion.div     variants={iconVarients(6)}
    initial="initial"
    animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoSpringBoot className='pl-1 text-7xl justify-center text-green-500'/>
            <div className='flex items-center pt-1 justify-center'>Spring Boot</div>
        </motion.div>
        <motion.div     variants={iconVarients(4)}
    initial="initial"
    animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl justify-center text-cyan-400'/>
            <div className='flex items-center pt-1 justify-center'>React JS</div>
        </motion.div>
        <motion.div     variants={iconVarients(3)}
    initial="initial"
    animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMysql className='text-7xl  text-yellow-700'/>
            <div className='flex items-center pt-1 justify-center'>MySQL</div>
        </motion.div>
    </motion.div>
    </div>
  )
}
export default Technologies;