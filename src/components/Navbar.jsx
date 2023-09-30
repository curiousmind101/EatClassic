import React, {useState} from "react";
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';
import {BsFillSaveFill,BsFillCartFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite, MdHelp} from 'react-icons/md';
import {FaUserFriends, FaWallet} from 'react-icons/fa';

import { Link } from "react-router-dom";
const Navbar = () =>{
    const [nav, setNav] = useState(false);
    const [mode, setMode] = useState(false);
    return (
        <div className="bg-white max-w-[1620px] gap-1 mx-auto flex w-full justify-between items-center p-4 fixed top-0 z-50">
            {/* left side of navbar */}
            <div className="flex items-center" >
                <div onClick={()=>setNav(!nav)} className="cursor-pointer z-[5]" >
                    <AiOutlineMenu size={30}/>
                </div>
                {/* tailwind is a mobile first approach search on google */}
                <Link to='/'>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl ml-1'>
                         Eat<span className="font-bold">Classic</span> 
                    </h1>
                </Link>
                
                <div onClick={()=>{setMode(!mode)}}className="hidden lg:flex items-center ml-3 bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
                    <p className={mode?"bg-black text-white rounded-full p-2 duration-200":"p-2 duration-200"}> Delivery</p>
                    <p className={!mode?"bg-black text-white rounded-full p-2 duration-200":"p-2 duration-200"}> PickUp </p>
                </div>
            </div>

            {/* search space */}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[300px] sm:w-[200px] lg:w-[500px]">
                <AiOutlineSearch size={25}/>
                <input className="bg-transparent p-2 focus:outline-none" type="text" placeholder="search foods"/>
            </div>

            {/* Cart Button */}
            
            <div className="flex items-center gap-2">
                <Link to='/cart'>
                    <button className="bg-black text-white hidden md:flex items-center py-2 rounded-xl">
                        <BsFillCartFill size={20} className="mr-2"/> Cart
                    </button>
                </Link>
                <Link to='/login'>
                    <button className="text-black bg-white hidden md:flex items-center py-2 rounded-xl max-md:text-[4px]">Login</button>
                </Link>
            </div>

            {/** mobile menu */}
            {/** overlay */}

            {nav?<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>: ''}
            

            <div className={nav?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300":"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className="absolute z-5 right-4 top-4 cursor-pointer"/>
                <h2 className="text-2xl p-4">Eat<span className="font-bold">Classic</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <Link to="/orders">
                        <li onClick={()=> setNav(!nav)} className="text-xl py-4 flex cursor-pointer"><TbTruckDelivery size={25} className="mr-4"/>Orders</li>
                        </Link>
                        <Link to ="/favorites">
                        <li onClick={()=> setNav(!nav)} className="text-xl py-4 flex cursor-pointer"><MdFavorite size={25} className="mr-4"/>Favorites</li>
                            
                        </Link>
                        <Link to ="/wallet">
                        <li onClick={()=> setNav(!nav)} className="text-xl py-4 flex cursor-pointer"><FaWallet size={25} className="mr-4"/>Wallet</li>

                        </Link>
                        <Link to ="/help">
                        <li onClick={()=> setNav(!nav)} className="text-xl py-4 flex cursor-pointer"><MdHelp size={25} className="mr-4"/>Help</li>

                        </Link>
                        <Link to ="/promotions">
                        <li onClick={()=> setNav(!nav)} className="text-xl py-4 flex cursor-pointer"><AiFillTag size={25} className="mr-4"/>Promotions</li>

                        </Link>
                        <Link to ="/bestones">
                        <li onClick={()=> setNav(!nav)} className="text-xl py-4 flex cursor-pointer"><BsFillSaveFill size={25} className="mr-4"/>Best Ones</li>

                        </Link>

                        <Link to ="/invite">
                        <li onClick={()=> setNav(!nav)} className="text-xl py-4 flex cursor-pointer"><FaUserFriends size={25} className="mr-4"/>Invite Friends</li>

                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;