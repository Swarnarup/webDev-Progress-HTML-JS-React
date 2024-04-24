import React from 'react'
import {motion} from "framer-motion";

const varients ={
  default: {width: 0, opacity:0},
  active : {width: "calc(100% - 0.75rem", opacity:1},
};

const Tabbutton = ({active, selectTab, children}) => {
// const buttonClasses = active ? 'text-white border-b border-primary-500' : 'text-[#ADB7BE]'
const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]'


  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}  
        </p>
        <motion.div animate={active ? "active" : "default"} variants={varients} className="h-1 bg-primary-500 mt-2 mr-2">

        </motion.div>
    </button>
  )
}

export default Tabbutton