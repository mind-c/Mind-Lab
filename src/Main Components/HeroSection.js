import { Button } from '@material-tailwind/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as Links } from 'react-scroll';
import User from '../General Components/Context';
export default function HeroSection() {
  const [questionList, setQuestionList] = useState([]);
  const[user,setUser]= useContext(User)
  
  useEffect(() => {
    const usersaved = localStorage.getItem('isQuesList');
    if (usersaved !== null) {
      console.log(JSON.parse(usersaved));
      setQuestionList(JSON.parse(usersaved));
    }
  }, []);
  return (
    <div className=' w-full flex flex-col lg:space-y-8 space-y-8 px-4 lg:justify-center py-20 items-center h-screen z-10'>

<p className=' lg:text-5xl text-3xl font-bold '>
<span className='text-white'>
    Perfect for </span><span className=' text-[#E84C61]  rounded-full mx-2 border-[#2C2F3C] lg:px-4 lg:py-2 px-2 py-0.5 border-2'>Education </span><span className='text-[#F8B81F]'>& </span><span className=' text-[#28B889]  rounded-full mx-2 border-[#2C2F3C] lg:px-4 lg:py-2 px-2 py-0.5 border-2'>Online </span><span className=' text-white'>Diverse Content</span>
</p>
<p className=' lg:text-5xl text-3xl font-bold text-white'>
Innovative Software
</p>

<p className=' text-lg text-white font-semibold'>AI <span className=' text-[#9A9DA3]'>Learning Path Generation Models</span>, Online Learning Resourses and bunch of notes <span className=' text-[#9A9DA3]'>For All</span></p>
{
!user?.path?(<>
<Link to={"/pre-assesment"}><Button className=' border-[#28B889] bg-transparent text-white border-2 lg:text-xl text-md mt-4'>Take the Pre-assessment Quiz</Button></Link>
</>):(<>
  <Links to={"content"} smooth={true} duration={2000}><Button className=' border-[#28B889] bg-transparent text-white border-2 lg:text-xl text-md mt-4'>Test Your knowledge</Button></Links>
</>)
}

    </div>
  )
}
