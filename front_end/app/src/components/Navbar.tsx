import React, { useState } from "react";

const Navbar:React.FC=()=>{
    const[clicked,setClicked]=useState(false);
    const registerClick=()=>{
        setClicked(clicked=>!clicked)
    }
    return(
        <>
        <div id="narbar-container" className="  w-full overflow-x-hidden bg-amber-400 shadow-xl p-1 fixed ">
            <div id="nav-items" className="flex justify-between pr-3  ">
                <div >
             <svg id="logo-icon" className="flex flex-row absolute" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z"/></svg>
                <p id="logo-text" className=" relative text-xl md:text-3xl font-bold text-amber-50 pl-10  sm:pr-0 hover:text-amber-600">Dano-sour</p>
                </div>
                <ul id="navmenu-items" className="sm:flex flex-wrap sm:flex-nowrap gap-[2%] items-center px-[2%] md:px-[5%] md:p-[2%]">
                    <li className="hidden sm:flex hover:text-amber-700 active:text-blue-700 text-white font-bold">Dashboard</li>
                    <div className="flex pt-2">
                 <div className="flex bg-gray-100 rounded-full ">
                 <input className=" p-0.5 pl-4 gap-1 outline-none border-none hover:cursor-pointer sm:w-40 w-25 focus:w-50" type="text" placeholder="search..."/>
                 <svg className="active:scale-105 bg-amber-600 hover:bg-amber-500 shadow-xl rounded-r-lg  pt-1 h-[100%]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                 </div>
                 <button id="mobile-menu" className="sm:hidden h-10 w-10 font-bold text-4xl pl-4 active:scale-108" onClick={registerClick}> ☰ </button>
                 </div>
                    <li className="hidden sm:flex  hover:text-amber-700 active:text-blue-700 text-white font-bold">Activities</li>
                
                </ul>
            </div>
 
        </div>
        {clicked&& <div id="mobile-mene-show" className="absolute pt-4 flex items-center pr-6  top-[4rem] left-0 w-full h-[90%] flex-col  bg-amber-500 opacity-85 shadow-2xl text-xl font-bold">
                        <ul onClick={registerClick}>
                        <li className="flex hover:text-amber-700 active:text-blue-700 text-white font-bold pb-4">Dashboard</li>
                        <li className="flex  hover:text-amber-700 active:text-blue-700 text-white font-bold">Activities</li>
                        </ul>
                    </div>
                 }

        </>
    )
}
export default Navbar;