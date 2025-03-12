
interface HeroProps {
  toLog:() => void;
}
export default function Hero({toLog}:HeroProps){
return(
    <div className="bg-amber-200 h-screen w-full   py-[5%] flex font-roboto">
    <div >
    <div className="w-screen flex  justify-between px-4 ">
      <div className="flex justify-between" >
      <svg className="relative" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z"/></svg>
      <p className="p-2 font-bold left-3 text-xl text-amber-700">Dano-sour</p> 
      </div> 
      <ul className="flex flex-row justify-between gap-10 font-bold px-6 ">
        <li className="hover:text-yellow-500 text-pink-900">Home</li>
        <li className="hover:text-yellow-500  text-pink-900">Work space</li>
        <li className="hover:text-yellow-500  text-pink-900">Dashboard</li>
      </ul>
      <div className="font-bold px-12 ">
        <button className=" px-2.5 active:scale-110 text-amber-400 text-bold" onClick={toLog}>login</button>
        <button className=" gap-2.5  active:scale-110 text-amber-600 text-bold" onClick={toLog}>sign up</button>
      </div>
    </div>
    <div className="flex flex-col py-2 pt-[5%] ">
      <h1 className="text-4xl font-bold px-[5%]  pb-4 hover:text-amber-300 text-amber-500">Bring the experience to you </h1>
      <p className=" text-xl text-justify px-[5%]">Danno-sour is an interesting platform that help you work on your personal development.
      We also help your team or group progress at a speed simply unmatched</p>
    </div>
    <div className="flex flex-row py-8 px-[8%] text-lg items-center gap-2">
      <button className="bg-amber-500 rounded-full p-2 hover:text-white active:scale-105 text-l hover:cursor-pointer">Join for free</button>
      <svg className="rounded-full bg-amber-300 w-10 h-10 active:scale-105 hover:cursor-pointer "   xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#5f6368"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>
      <p className="u text-amber-400">How Danno-sour works</p>
    </div>
    <div className="pt-[10%] pl-[80%] text-amber-600 font-bold  active:text-amber-800 hover:cursor-pointer active:underlin"> About Dano-sour </div>
    </div>
    </div>
  )
}