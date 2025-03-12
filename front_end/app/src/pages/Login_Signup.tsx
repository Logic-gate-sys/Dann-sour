import { useState } from 'react';

interface LoginProp{
   isLogged:()=>void;
}
export default function LoginSignup({isLogged}:LoginProp){
    const [isUser,setIsUser] =useState(false);
    function hasRegistered(){
        // some logic to confirm the user is in the database then
          setIsUser(!isUser)
    }
    return(
        <div>
           <div className=" h-full p-[10%]  ">
           <div className='grid grid-cols-[1fr_1.5fr] gap-[2%] shadow-2xl '>
            <div className="flex flex-col pl-10 pb-10 ">
                <div className="">
                <h1 className='text-4xl font-bold text-amber-500 pb-2 pt-15 pl-8'>Sign In</h1>
                <form className='flex flex-col gap-2 '>
                    <input className='bg-gray-200 p-2 rounded-xl ' type='email' placeholder="Email: "/>
                    <input className='bg-gray-200  p-2 rounded-xl ' type='password' placeholder="Password: "/>
                </form>
                <p className='pb-5 text-2xl'>Forgot password? < span className='text-xl text-blue-800 ' >Reset</span></p>
                <div className=''>
                  <button className=' bg-amber-600 p-1 w-30 rounded-full hover:text-white hover:bg-amber-300' type="button" onClick={isLogged}> Login </button>
                </div>
               </div>
            </div>
            <div className="flex flex-col p-4 bg-amber-500">
                <div className="flex flex-col p-10">
                <h1 className='text-3xl pb-5 font-bold text-amber-50 '>Create Account </h1>
                <p className='text-xl text-amber-100 self-start'>To keep in touch with you please sign up with your details below;
                Remember we always cherish you!
                </p>
                <div className="flex flex-col justify-between ">
                    {isUser &&
                    <form  className='flex flex-col space-y-2'>
                        <input className='bg-amber-100 rounded-full p-2 ' type='name' placeholder="Name: "/>
                        <input className='bg-amber-100 rounded-full p-2' type='email' placeholder="Email: "/>
                        <input className='bg-amber-100 rounded-full p-2' type='password' placeholder="Password: "/>
                        <input className='bg-amber-100 rounded-full p-2' type='confirm-password' placeholder="Confirm password: "/>
                    </form>
                }
                    <div className="p-5">
                    <button className='bg-amber-50 p-1 rounded-full w-30 hover:bg-amber-600' onClick={hasRegistered}>{isUser? "Create user":"Sign up"}</button>
                    </div>
                    </div>
                </div>
            </div>
           </div>
           </div>
        </div>
    );
}
