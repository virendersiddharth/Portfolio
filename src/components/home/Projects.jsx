import React, { useEffect, useRef } from 'react'
import SectionHeading from '../common/SectionHeading'
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection } from '../../reducers/slices/navSlice';

import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';
import Slider from "react-slick";

import { Project } from '../../data/Projects';

const Projects = () => {

    var settings = {
        className: "center",
        // loop: true,
        dots: true,
        centerMode: true,
        dots: false,
        infinite: true,
        // autoplay : true,
        // autoplaySpeed : 2000,
        cssEase: "linear",
        pauseOnHover : true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows : false,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              centerMode : false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              centerMode : false
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode : false
            }
          }
        ]
      };

    const [ref, inView] = useInView({
        threshold:0.5
    });
    const dispatch = useDispatch();
    const {timeOfLastClick} = useSelector((state)=> state.activeSec);
    useEffect(()=>{
        if(inView && Date.now() - timeOfLastClick > 1000){
            dispatch(setActiveSection("projects"));
        }
    },[inView])

    const arrowRef = useRef(null);

  return (
    <section ref={ref} id='projects' className='scroll-mt-20 mt-10'>
        <SectionHeading text='Projects'/>

        <div className='w-[95%] max-w-[1260px] mx-auto relative overflow-hidden'>

            <Slider {...settings} ref={arrowRef}>
                {
                    Project.map((el, index)=>(
                        <ProjectCard projectCard={el} key={index}/>
                    ))
                }
                
            </Slider>

            <div className='w-full flex justify-evenly'>
                <button 
                onClick={() => arrowRef.current.slickPrev()}
                className='back bg-[#d3d3d3] text-rich-black-500 p-2 text-xl rounded-full border-2 border-rich-purple-300'><IoIosArrowBack/></button>
                <button 
                onClick={() => arrowRef.current.slickNext()}
                className='next bg-[#d3d3d3] text-rich-black-500 p-2 text-xl rounded-full border-2 border-rich-purple-300'><IoIosArrowForward/></button>
            </div>
        
        </div>

    </section>
  )
}



const ProjectCard = ({projectCard}) => {
  return (
  <div className='bg-[#d3d3d3] w-full p-[15px] h-[15rem] overflow-hidden rounded-[10px] relative group transition-all duration-200 ease-in-out '>
    <div className='overflow-hidden rounded-[5px] h-full'>
        <img src={projectCard.image} alt="" 
          className='group-hover:scale-[1.1] transition-all duration-200 ease-in-out'
        />
    </div>
    <div className=' absolute top-[100%] p-[15px] left-0 w-full h-full bg-[#f3f4f6] backdrop-blur-3xl  flex flex-col justify-between shadow-3dBox
        group-hover:top-0 transition-all duration-200 ease-in-out
        
    '>
        <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-bold capitalize text-rich-black-950'>{projectCard.name}</h2>
            <p className='font-medium text-rich-black-800'>{projectCard.description}</p>
        </div>
        <div className='flex items-center gap-5'>
            {
                projectCard.array.map((icons,i)=>(
                    <a href={icons.link} target='_blank'
                        className='p-3 bg-white w-[50px] aspect-square rounded-full grid place-content-center text-black text-2xl'    
                    >
                        {icons.icon}
                    </a>
                ))
            }
        </div>
    </div>
  </div>
  )
}

export default Projects;