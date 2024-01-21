import React, { useEffect, useRef, useState } from 'react'

import navLinks from '../../../data/NavLink'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import CTAButton from '../CTAButton'

import { useAnimate, motion, stagger, delay } from 'framer-motion';
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveSection, setTimeOfLastClick } from '../../../reducers/slices/navSlice'

import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";


import './Navbar.css';

const Navbar = ({theme, setTheme}) => {

    const [sideBarOpen, setSideBarOpen] = useState(false);
    
    
    const changeTheme = () => {
        if(theme === "dark"){
            setTheme("light")
        }
        else{
            setTheme("dark")
        }
    }

    // const [activeSection, setactiveSection] = useState("home");
    const {activeSection} = useSelector((state)=> state.activeSec);
    const dispatch = useDispatch();

    const hidden = {
        opacity: 0,
        y: -150,
    }
    const show = {
        opacity: 1,
        y: 0
    }

  return (

    

    <div className='mt-3 h-[4rem] flex items-center  w-full z-[900] fixed  bg-opacity-30 box-border'>
        <div className='flex gap-4 justify-between items-center w-[95%] max-w-[1260px] mx-auto relative  py-[1.1rem] border-rich-black-200 border-2 px-6 rounded-3xl bg-white '>
            <motion.div className='logo'
                initial={hidden}
                animate={show}                
                // animate={{:200}}
                transition={{delay: 0.2, duration:0.7}}
                // animate={{delay: stagger(0.2)}}
            >
                Logo
            </motion.div>

            <ul
                className={`navList ${sideBarOpen ? 'active' : '' }`}
            >   
                {
                    navLinks.map((link, index) => (
                        <motion.li
                            className='relative'
                            initial={hidden}
                            animate={show}
                            transition={{delay: 0.2*(index+2), duration:0.7}}                            
                            onClick={()=>{
                                dispatch(setActiveSection(link.name));
                                dispatch(setTimeOfLastClick(Date.now()));
                                setSideBarOpen(false);
                            }}
                        >
                            <a 
                                //to={link.path} key={index}
                                href={link.path}
                                className={clsx("z-10 text-lg py-1 px-[0.6rem] relative capitalize", {"text-rich-purple-800" : activeSection === link.name})}
                            >
                                <span className='relative z-10'>
                                    {link.name}
                                </span>

                                {
                                    link.name === activeSection && (
                                        <motion.span className='absolute top-0 left-0 w-full h-full bg-rich-purple-100 z-0 rounded-lg'
                                            layoutId='activeSection'
                                            transition={{type:'spring', stiffness: 380, damping: 30}}
                                        >
                                        
                                        </motion.span>
                                    )
                                }

                            </a>

                        </motion.li>
                    ))
                }
            </ul>


            {/* <div className='flex items-center gap-4'>

                <motion.div onClick={()=>changeTheme()}
                            initial={hidden}
                            animate={show}
                            transition={{delay: 1.4, duration:0.7}}   
                >
                    {
                        theme === "light" ? 
                        <BsFillMoonStarsFill size={24}/>
                        :
                        <BsFillSunFill size={24}/>
                    }
                </motion.div>
            </div> */}

            <div className='md:hidden'
                onClick={()=>{
                    setSideBarOpen(prev => !prev);
                }}
            >
                {
                    sideBarOpen ? <MdClose size={28}/>: <RiMenu3Fill size={24}/>
                }
                
            </div>

        </div>
    </div>
  )
}

export default Navbar