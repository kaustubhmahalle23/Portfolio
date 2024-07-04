import React from 'react'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            Hello bozos
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
           <a href="https://www.linkedin.com/in/kaustubh-mahalle-57a1a9211/" target="_blank" rel="noopener noreferrer" className=" hover:text-sky-600"> <FaLinkedin size={40}/></a>
            <a href="https://github.com/kaustubhmahalle23" target="_blank" rel="noopener noreferrer" className='hover:text-blue-950'><FaGithub size={40}/></a>
           <a href='https://www.instagram.com/kaustubh__023?igsh=MWY3NHB1YjZsanM4MQ==' target="_blank" rel="noopener noreferrer" className='hover:text-pink-400'> <FaInstagram size={40}/></a>
            <a href='https://x.com/KaustubhMahall7' target="_blank" rel="noopener noreferrer" className='hover:text-violet-950'><FaTwitterSquare size={40}/></a>
        </div>
    </nav>
  )
}

export default Navbar;