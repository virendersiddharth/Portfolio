import React, { useEffect, useRef } from 'react'
import SectionHeading from '../common/SectionHeading'
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection } from '../../reducers/slices/navSlice';

import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';

import Slider from "react-slick";

// import studyNotion from "../../assets/projects/studyNotion.png"
import studyNotion from "../../assets/projects/Modern Chair.png";

const Project = [
  {
    image : "https://res.cloudinary.com/dhuy4ln71/image/upload/v1702916577/PortFolio_Projects/studyNotion_peecxb.png",
  },
  {
    image : "https://res.cloudinary.com/dhuy4ln71/image/upload/v1702916572/PortFolio_Projects/Modern_Chair_la4dvf.png",
  },
  {
    image : "https://res.cloudinary.com/dhuy4ln71/image/upload/v1702916577/PortFolio_Projects/studyNotion_peecxb.png",
  },
  {
    image : "https://res.cloudinary.com/dhuy4ln71/image/upload/v1702917477/PortFolio_Projects/WeatherApp_f18geg.png",
  },
]

const Projects = () => {

    var settings = {
        className: "center",
        dots: true,
        centerMode: true,
        dots: false,
        infinite: true,
    
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows : false,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 3,
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

                        <div className='bg-[#4e5156] w-full p-[15px] h-[14rem] overflow-hidden rounded-[10px] relative group transition-all duration-200 ease-in-out'>
                            <div className='overflow-hidden rounded-[5px] h-full'>
                                <img src={el.image} alt="" 
                                  className='group-hover:scale-[1.1] transition-all duration-200 ease-in-out'
                                />
                            </div>
                            <div className='text-white absolute top-[100%] p-[15px] left-0 w-full h-full backdrop-blur-[5px] flex flex-col justify-between
                                group-hover:top-0 transition-all duration-200 ease-in-out
                                
                            '>
                                <div>
                                    <h2 className='text-xl text-white capitalize'>Project Name</h2>
                                    <p>Project Desc</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    {
                                        [0,1,2].map((el,i)=>(
                                            <a href="" target='_blank'
                                                className='p-3 bg-slate-600 w-[50px] aspect-square rounded-full'
                                            >
                                                el
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </Slider>

            <div className='w-full flex justify-evenly'>
                <button 
                onClick={() => arrowRef.current.slickPrev()}
                className='back bg-[#00000066] text-white p-2 text-xl rounded-full border-2 border-rich-purple-300'><IoIosArrowBack/></button>
                <button 
                onClick={() => arrowRef.current.slickNext()}
                className='next bg-[#00000066] text-white p-2 text-xl rounded-full border-2 border-rich-purple-300'><IoIosArrowForward/></button>
            </div>
        
        </div>

    </section>
  )
}

export default Projects;