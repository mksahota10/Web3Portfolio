import Spline from '@splinetool/react-spline';
import { useState } from "react"; 
import {IoMenu} from 'react-icons/io5';
import Vetri  from "./Images1/IMG_2220.jpg"


function App() {

const [isActive, setIsActive] = useState(false)

  return (
    <div className="w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">

      {/*Navigation Bar */}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2x1 flex items-center">
          <p className="text-lg text-slate-200 font-medium">Manpreet Kaur</p>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a href="#home" 
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Home
              </a>
              <a href="#about" 
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              About
              </a>
              <a href="#projects" 
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Projects
              </a>
              <a href="#contact" 
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Contact
              </a>
              <a href="Resume" 
            className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-x1 
            hover:border-gray-100 duration-100 ease-in-out"
            >
              Download
              </a>
            </div>
            <div className="block md;hidden ml-auto cursor-pointer"
            onClick={()=> setIsActive(!isActive)}>
              <IoMenu className="text-2xl text-textBase" />
            </div>
            {isActive && (
              <div
              className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">

                 <a href="#home" 
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" 
            onClick={()=> setIsActive(false)}
            >
              Home
              </a>
              <a href="#about" 
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=> setIsActive(false)}
            >
              About
              </a>
              <a href="#projects" 
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=> setIsActive(false)}
            >
              Projects 
              </a>
              <a href="#contact" 
            className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={()=> setIsActive(false)}
            >
              Contact
              </a>
              <a href="Resume" 
            className="text-base text-textbase text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-x1 
            hover:border-gray-100 duration-100 ease-in-out"
            >
              Download
              </a>
              </div>
            )}
        </div>
      </nav>

     <div className="relative" id="home">
       <Spline scene="https://draft.spline.design/1SIsKQFH-TVtEI-0/scene.spline" />
       <div className="absolute bottom-10 w-full justify-center items-center flex">
         <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
           <p className="text-textBase">Press and drag to orbit</p>
         </div>
       </div> 
     </div>


     {/* {Main Section} */}

     <main className="w-[80%] mt-5">
       {/* {About Section} */}
       <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
       id="about">
         {/* {image box} */}
         <div className="w-full h-420 flex items-center justify-center">
           <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
           <img className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg" src={Vetri} alt=""/>
         </div>
         </div>

        {/* {content box} */}
         <div className="w-full h-420 flex flex-col items-center justify-center">
           <p className="text-lg text-textBase text-center">
           Software engineer dedicated to developing and optimizing interactive, user-friendly, and feature-rich websites. Leveraging analytical skills and strong attention to detail, I am comfortable providing technical knowledge and expertise, building new websites from start to finish. In order to deliver original and efficient web solutions, I hope to bring my experience in analytics and client-facing work to my next challenge as a developer. 
           </p>
           <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
              </button>

         </div>
       </section>



     </main>
    </div>
  );
}

export default App;
