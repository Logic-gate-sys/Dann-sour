import React from "react";
import { useState } from "react";
import Hero from "./pages/Hero.tsx";
import LoginSignup from "./pages/Login_Signup.tsx";
import Home from "./pages/Home.tsx";

const App: React.FC=()=>{
  const [toLog,setTolog]=useState(false);
  const [islogged,setIslogged]=useState(false);
  //a function to log trigger home page;
   const isRegistered=():void=>{
     setIslogged(islogged=>!islogged);
   }
  //a function to trigger signu;
  const wantsToLog=(): void=>{
      setTolog(toLog=>!toLog);
  }
  return (
  <div>{
   !toLog && <Hero toLog={wantsToLog}/>
    }
     
     {!islogged &&<LoginSignup isLogged={isRegistered} />
     }
     {
      islogged && <Home/>
     }
     
  </div>
  )
}
export default App;