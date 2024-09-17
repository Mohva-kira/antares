import React from 'react'
// import { viteLogo } from '/vite.svg';
import { useNavigate } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoToggleOutline } from "react-icons/io5";


const Header = () => {


    const path = location.pathname
    const navigate = useNavigate()
    const links = [
        {
            name: "Accueil",
            path: '/home'
        },
        {
            name: "Jobs",
            path: '/jobs'
        },
        {
            name: "Entretien",
            path: '/meets'
        },
        {
            name: "Base de CV",
            path: '/cv'
        },
        {
            name: "Communauté",
            path: '/community'
        },
    ]
    console.log('path', path)
    return (
        <div className='flex w-full  h-full  shadow-2xl shadow-slate-900 p-2 m-2 rounded-xl'>
            <div className='flex items-start justify-start w-full  m-2 p-2'>
                {/* <img src={viteLogo} alt="" />  */} logo
            </div>

            <div className="flex items-center justify-start  flex-wrap gap-5 w-full">
                {links.map(item => <li className={`list-none flex flex-col justify-around font-normal ${item.path === path && "text-blue-500 font-bold"}`} onClick={() => navigate(`${item.path}`)}>

                    {item.name}
                    {item.path === path &&
                        <div className=" w-full top-4 relative h-1 bg-blue-500 rounded-2xl">

                        </div>}
                </li>)}
            </div>

            <div className="flex w-1/2 h-full items-end justify-between m-2 p-2">
                <div className='text-4xl'>
                    <IoToggleOutline />
                </div>
                <div className='text-3xl'>
                    <CiSearch />
                </div>
                <div className='text-3xl'>
                    <FiMessageSquare />
                </div>
                <div className='bg-slate-500 rounded-full h-10 w-10'>

                </div>
            </div>
        </div>
    )
}

export default Header