import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero-img.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const iconVarients = (duration) => ({
    initial:{y:-10},
    animate:{
        x:[10, -10],
        transition:{
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})



const Hero = ({scrollToContact}) => {



  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Kaustubh Mahalle
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Java Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
          <div className="flex justify-center pb-8">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt=""
            />
          </div>
          
          <Link to="Contact" smooth={true} duration={1000}>
          <motion.button 
            className="w-1/3 mx-auto p-3 text-2xl mt-2 flex justify-center rounded-2xl border-4 border-neutral-100"
            variants={iconVarients(1)}
    initial="initial"
    animate='animate'>
            Hire Me !
          </motion.button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
