"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLinkButton from './NavLinkButtomModule'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";
import { BhuniaLogo } from './svgs';
import GsapMagnetic from './GsapMagnetic';

const navlinks_array = [
    {
        title:"About",
        path:"#About_Section"
    },
    {
        title:"Projects",
        path:"#Project_Section"
    },
    {
        title:"Contacts",
        path: "#Email_Section"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <motion.nav initial={{opacity:0, y:-50}} animate={{opacity:1, y:0}} className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-40 bg-black bg-opacity-100">
        <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <GsapMagnetic>
                <Link href={"/"} className='text-white font-semibold'><BhuniaLogo className='text-4xl md:text-6xl'/></Link>
            </GsapMagnetic>
            <div className="mobile-menu block md:hidden">
                {!navbarOpen ? (
                    <button
                    onClick={() => setNavbarOpen(true)}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                    <Bars3Icon className="h-5 w-5" />
                    </button>
                        ) : (
                    <button
                    onClick={() => setNavbarOpen(false)}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                    <XMarkIcon className="h-5 w-5" />
                    </button>
                )}
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {navlinks_array.map((link, index) => (
                    <GsapMagnetic key={index}>
                        <li key={index}>
                            <NavLinkButton href={link.path} title={link.title} />
                        </li>
                    </GsapMagnetic>
                ))}
                </ul>
            </div>
        </div>
        {navbarOpen? <MenuOverlay links={navlinks_array}/> : null}
    </motion.nav>
  )
}

export default Navbar