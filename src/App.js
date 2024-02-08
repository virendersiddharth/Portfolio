import { useState } from "react";
import Navbar from "./components/common/commonComponents/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/common/commonComponents/Footer";

function App() {

  const [theme, setTheme] = useState("light");
  
  return (
    <div id="appCom" className={`min-h-screen w-full overflow-x-hidden ${theme === "dark" ? "dark bg-gray-900  text-opacity-90" : "light "}`}>

        <div className="bg-[#fbe2e3] fixed top-[-6rem] z-0 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] fixed top-[-1rem] z-0 left-[-35rem] h-[20.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>


      <Navbar theme={theme} setTheme={setTheme}/>
      <HomePage/>
      <Footer/>

    </div>
  );
}

export default App;
