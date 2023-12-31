import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "../common/SectionHeading";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setActiveSection } from "../../reducers/slices/navSlice";
import {experience} from '../../data/SkillsData';
const Eductaion = () => {

  const dispatch = useDispatch();

  const {ref, inView} = useInView({
    threshold: 0.5
  });

  const {timeOfLastClick} = useSelector((state)=> state.activeSec);

  useEffect(()=>{
    if(inView && Date.now() - timeOfLastClick > 1000){
      dispatch(setActiveSection("experience"));
    }
  },[inView]);


  return (
    <section ref={ref} className="relative w-full scroll-mt-20" id="experience">
        <SectionHeading text="Expericence"/>
      <div className="w-[95%] max-w-[1260px] mx-auto mt-6">
        <VerticalTimeline
            className="w-full"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0,0,0,0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            //   color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "0.5rem solid  #9ca3af" }}
            date="2017 - 2018"
            iconStyle={{ background: "white", fontSize:"1.5rem" }}
            // icon={<WorkIcon />}
          >
            <h3 className="font-semibold capitalize">
              Creative Director
            </h3>
            <h4 className="font-normal mt-0">Miami, FL</h4>
            <p className="mt-1 text-gray-700">
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>

            {
              experience.map((el,index) => (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "#f3f4f6",
                      boxShadow: "none",
                      border: "1px solid rgba(0,0,0,0.05)",
                      textAlign: "left",
                      padding: "1.3rem 2rem",
                    //   color: "#fff",
                    }}
                    contentArrowStyle={{ borderRight: "0.5rem solid  #9ca3af" }}
                    date="2017 - 2018"
                    iconStyle={{ background: "white", fontSize:"1.5rem" }}
                    // icon={<WorkIcon />}
                  >
                    <h3 className="font-semibold capitalize">
                      {el.heading}
                    </h3>
                    <h4 className="font-normal mt-0">{el.subHeading}</h4>
                    <p className="mt-1 text-gray-700">
                      {el.desc}
                    </p>
                  </VerticalTimelineElement>                
              ))
            }
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Eductaion;
