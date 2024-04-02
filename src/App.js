import { useEffect, useState } from "react";
import Navbar from "./components/common/commonComponents/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/common/commonComponents/Footer";

import gsap from "gsap";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(()=>{
    localStorage.setItem("theme", theme)
  },[])


//   var xscale = 1
//   var yscale = 1
//   var xprev = 0
//   var yprev = 0
//   const followCursor = (e)=>{
//     const cursor = document.getElementById("mouse")
//     console.log(e);
//     xscale = gsap.utils.clamp(0.8, 1.2, e.clientX - xprev);
//     yscale = gsap.utils.clamp(0.8, 1.2, e.clientY - yprev);
//     xprev = e.clientX;
//     yprev = e.clientY;
//     console.log(xscale, yscale)
//     cursor.style.transform = `scale(${xscale},${yscale})`
    
//     cursor.style.top = `${e.pageY}px`
//     cursor.style.left = `${e.pageX}px`

    
//     clearTimeout(moveTimer)
//     var moveTimer = setTimeout(()=>{
//       cursor.style.transform = `scale(${1},${1})`;
//     },2000)
// }
//   document.addEventListener("mousemove", followCursor )
//   document.addEventListener("mouseover", followCursor )

//   document.addEventListener("mouseout", ()=>{
//     document.getElementById("mouse").style.transform = `scale(1,1)`
//   })

  return (
    <>
    
        {/* <div
        id="mouse"
          className="absolute h-4 w-4  bg-gradient-to-r from-[#335bf4] to-[#2ae9c9] translate-x-[-50%] translate-y-[-50%] z-50 rounded-full transition-transform linear"
        ></div> */}
    <div id="appCom" className={`min-h-screen w-full overflow-x-hidden relative  ${theme === "dark" ? "dark bg-black  text-opacity-90" : "light "}`}>


        <div className={`bg-[#fbe2e3] ${theme === "dark" ? "absolute" : "fixed"} top-[-6rem] z-0 right-[11rem] h-[20rem] w-[31.25rem]  rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#2d3d5c]`}></div>
        <div className={`bg-[#dbd7fb] ${theme === "dark" ? "hidden" : "fixed"} top-[-1rem] z-0 left-[-35rem] h-[20.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]`}></div>

        {/* <div
          className="w-4 h-[457px] bg-indigo-500 blur-2xl absolute -left-4 top-0"
        ></div> */}

      <Navbar theme={theme} setTheme={setTheme}/>
      <HomePage/>
      <Footer/>

    </div>

    </>
  );
}

export default App;
