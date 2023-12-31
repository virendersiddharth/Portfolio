import React, { useEffect } from 'react'

import homeLogo from "../assets/home/homeLogo.png";
import circle from "../assets/diamondIcons/circle.png";
import CTAButton from '../components/common/CTAButton';
import { TypeAnimation } from 'react-type-animation';

import { BsStars } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

import { motion} from 'framer-motion';

import './Home.css';
import Skills from '../components/home/Skills';
import { fadeIn } from '../utils/motion';
import Eductaion from '../components/home/Eductaion';
import Contact from '../components/home/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { setActiveSection } from '../reducers/slices/navSlice';
import About from '../components/home/About';
import Projects from '../components/home/Projects';

const Home = () => {


    const dispatch = useDispatch();

    const {ref, inView} = useInView({
      threshold: 0.7
    });
  
    const {timeOfLastClick} = useSelector((state)=> state.activeSec);
  
    useEffect(()=>{
      if(inView && Date.now() - timeOfLastClick > 1000){
        dispatch(setActiveSection("home"));
      }
    },[inView]);

  return (
    <div className='z-20 relative'>

        {/* Home Section  INTRO  */}
        <div ref={ref} id='home' className='scroll-mt-20 w-11/12 py-5 mt-[4.5rem] max-w-[1260px] mx-auto flex flex-col-reverse md:flex-row gap-6 md:justify-between items-center min-h-[550px] relative'>

            {/*=========================== Left Container Side ===========================*/}
            <div className='flex-1 max-w-[500px] flex flex-col gap-2 justify-start md:justify-center md:items-start relative z-10'
                initial={{opacity:0, x:-150}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 1}}
            >
                <motion.h2 className='text-2xl font-medium text-rich-black-900 dark:text-white'
                    initial="hidden"
                    animate="show"
                    variants={fadeIn("right","ease", 1.8, 1)}
                >
                    Hey there,
                    <p className='text-3xl'>This is virender</p>
                </motion.h2>
                <motion.p className='text-4xl md:text-5xl font-bold md:text-left text-rich-purple-600 dark:text-[#6e96cf]'
                    initial="hidden"
                    animate="show"
                    variants={fadeIn("right","ease", 2, 1)}
                >
                    I am {" "}
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Developer',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            // '',
                            // 1000,
                            'Designer',
                            2000
                        ]}
                        wrapper="span"
                        speed={1}
                        style={{ color: '#3c4250', display: 'inline-block'}}
                        repeat={Infinity}
                        omitDeletionAnimation={false}
                        />
                </motion.p>
                <motion.p className='text-rich-black-700 md:text-xl dark:text-rich-black-200'
                    initial="hidden"
                    animate="show"
                    variants={fadeIn("right","ease", 2.2, 1)}
                >
                    A creative web developer, specializing in website design. Checkout my work below and free to get in touch if you want to work with me.
                </motion.p>


                {/* <div className='flex justify-start  gap-4'>
                    {
                        HomeIcons.map(icon => (
                            <a key={icon.id} 
                                className='w-[40px]'
                            >
                                <img src={icon.icon} alt="" />
                            </a>
                        ))
                    }
                </div> */}


                <motion.div className='flex gap-2 md:gap-4 w-full justify-start mt-5'
                    initial="hidden"
                    animate="show"
                    variants={fadeIn("right","ease", 2.4, 1)}
                >
                    {/* <div className='flex-1 max-w-fit'> */}
                        <CTAButton text="Get In Touch" active={true} icon={<BsStars size={19}/>}/>
                    {/* </div> */}
                    {/* <div className='flex-1 max-w-fit'> */}
                        <a href='/Virender_Resume.pdf' download
                            className='text-[16px] sm:text-[18px] md:text-xl border-2 rounded-[25px] font-medium relative
                            flex items-center justify-center gap-1 md:gap-2 px-4 py-2 min-w-[120px]
                            '
                        >
                            {/* <CTAButton text="Download CV" active={false} icon={<HiDownload size={20}/>}/> */}
                            <span>Download CV</span>
                            <HiDownload size={20}/>
                        </a>
                    {/* </div> */}
                </motion.div>


            </div>


            {/*=========================== Right Image Side ===========================*/}

            <div className='flex-1 max-w-[550px] flex justify-end relative'>

                {/* Diamond Icon */}
                <motion.div className='absolute z-0 w-[30%] circleAnimation left-[30%] top-[30%] -translate-x-[80%] -translate-y-[50%]'
                    initial={{scale: 0, opacity: 0}}
                    animate={{scale:1, opacity: 1}}
                    transition={{delay: 0.4, duration: 1.8}}
                >
                    <img src={circle} alt="" />
                </motion.div>

                <motion.div className='w-[100%] z-10'
                    initial={{scale: 0, opacity: 0}}
                    animate={{scale:1, opacity: 1}}
                    transition={{delay: 3, duration: 1.8}}
                >
                    <img src={homeLogo} alt="Logo" />
                </motion.div>
            </div>




        </div>


        <About/>
        <Skills/>
        <Eductaion/>
        <Projects/>
        <Contact/>


    </div>
  )
}

export default Home