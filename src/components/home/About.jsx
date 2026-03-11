import React, { useEffect } from 'react'
import SectionHeading from '../common/SectionHeading'
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection } from '../../reducers/slices/navSlice';

const About = () => {

    const [ref, inView] = useInView({
        threshold: 1
    });
    const dispatch = useDispatch();
    const {timeOfLastClick} = useSelector((state)=> state.activeSec);
    useEffect(()=>{
        if(inView && Date.now() - timeOfLastClick > 1000){
            dispatch(setActiveSection("about"));
        }
    },[inView])


  return (
    <section ref={ref} id='about' className='scroll-mt-20 '>
        <SectionHeading text='About'/>

        <div className='w-[95%] max-w-[1260px] mx-auto text-[1.2rem] flex justify-between gap-5'>
            <div className='flex-1 flex justify-center flex-col font-Inter text-[18px]'>
                <p className='leading-[2.2rem] tracking-wide text-center text-rich-black-700 font-medium dark:text-rich-black-50'>
                    I'm a software developer currently working as an RPA Developer at Deloitte, where I design and build automation solutions that streamline business processes and improve operational efficiency.
                
                    Beyond automation, I have a strong interest in full-stack web development and enjoy building modern web applications using technologies such as React, Next.js, Node.js, Express, and MongoDB.

                    I've built several full-stack projects that focus on clean architecture, responsive design, and scalable backend systems. These projects have helped me strengthen my understanding of modern web development practices and problem-solving.

                    I'm passionate about building impactful software, continuously improving my development skills, and exploring opportunities where I can contribute as a Full Stack Web Developer.
                </p>
            </div>

        </div>
    </section>
  )
}

export default About
