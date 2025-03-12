import React from 'react';
import Navbar from '../components/Navbar';

interface Activity {
  id: number;
  icon:string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
}

const User_Activity: Activity[] = [
  {
    id: 1,
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOz0O4asQuy3O_sxfmYf8mDmeOdMjAKZzsBrWVbLg40TGwOrBzIu4YrUqZ81Xloiixx8&usqp=CAU",
    name: "Read 'Understanding TypeScript' (Chapter 1-3)",
    description: "Go through the first three chapters to understand TypeScript basics and take notes.",
    start_date: "2025-02-23",
    end_date: "2025-02-23",
  },
  {
    id: 2,
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95dN4-knZGLyIjV0FOy4vNRINqW8zkjUTn35XJbJlIBxOc-A0e5l7G4b7h8vBM_J3sjQ&usqp=CAU",
    name: "Team Discussion on Social Platform Features",
    description: "Brainstorm and refine core functionalities of the social platform with team members.",
    start_date: "2025-02-24",
    end_date: "2025-02-24",
  },
  {
    id: 3,
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95dN4-knZGLyIjV0FOy4vNRINqW8zkjUTn35XJbJlIBxOc-A0e5l7G4b7h8vBM_J3sjQ&usqp=CAU",
    name: "Attend Weekly AI Study Group Meeting",
    description: "Join the AI study session to discuss recent advancements and assigned readings.",
    start_date: "2025-02-25",
    end_date: "2025-02-25",
  },
  {
    id: 4,
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cjkUAxZ-npndIXPws7FycvXUGgHnWB8qfnbHjoKPxsPGbgJYT0daa2-N50GIhnnvEmg&usqp=CAU",
    name: "Review and Discuss PostgreSQL Optimization Techniques",
    description: "Analyze best practices for optimizing PostgreSQL queries and indexing strategies.",
    start_date: "2025-02-26",
    end_date: "2025-02-26",
  },

];


const Home: React.FC = () => {
  return (
    <div>
      < Navbar/>
      <div className='p-3 sm:p-3 bg-amber-100 shadow-xl overflow-x-hidden'>
        <div className="sm:px-25">
          <div  id='box' className='grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 pt-20 sm:pt-40  '>
           {User_Activity.map((act)=>(
            <div key={act.id} className='shadow-2xl rounded-lg p-2 h-auto sm:w-65 hover:scale-95'>
            <img className='h-20 w-50 sm:h-[40%] sm:w-140 ' src={act.icon}/>
            <h1 className='sm:text-3xl text-xl text-amber-600 font-bold pb-2'>{act.name}</h1>
            <div className='bg-yellow-400 rounded-md'>
            <h2 className='font-bold text-amber-100 px-2'><span className='text-green-800'>Start :</span> {act.start_date}</h2>
            <h2 className='font-bold text-amber-100 px-2 pb-1'><span className='text-amber-700'>End :</span> {act.end_date}</h2>
            </div>
            </div>
           ))}
            </div>
        </div>
        < div className='pl-[85%] pt-[30%] '>
        <svg className='bg-amber-500 absolute bottom-1 sm:h-20 sm:w-20 rounded-full hover:scale-110 active:bg-amber-300 ' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
