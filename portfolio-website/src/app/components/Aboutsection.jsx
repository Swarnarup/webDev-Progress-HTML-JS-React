"use client"
import React, { useTransition, useState } from 'react'
import Tabbutton from './Tabbuttons'
import { motion } from "framer-motion";
import { PythonLogo, UniLogo, SchoolLogo, SettingsLogo, DbmsLogo, RobotLogo, UnityLogo, HtmlLogo, CLogo, CppLogo, GithubLogo, DockerLogo} from './svgs'


const tabData = [
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='pl-2 flex-col'>                
                <li className='flex gap-3'><SchoolLogo/> DPS Ruby Park, Kolkata</li>
                <li className='flex gap-3'><UniLogo/> IIT Mandi, Himachal Pradesh</li>
            </ul>
        )
    },
    {
        title: "Courses",
        id: "courses",
        content: (
            <ul className='list-disc pl-2'>
                <li>Operating System & Networks</li>
                <li>Data Structures and Algorithms</li>
                <li>Computer Organisation</li>
                <li> Information And Database Systems</li>
                <li>Programming Paradigms</li>
                <li>Linear Algebra</li>
                <li>Finite Languages and Automata Theory</li>
                <li>Stastical Learning (Regression and Machine Learning)</li>
                <li>Data Science- 1,2,3 (Python,Probability, Statistics & machine Learning)</li>
                <li>Data Handling and Visualization</li>
                <li>Computer Vision</li>
            </ul>
        )
    },
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li><span className="font-bold">Languages:</span> <span className="inline-flex gap-2">C <CLogo className="text-2xl"/></span> - <span className="inline-flex gap-2">C++ <CppLogo className="text-2xl"/></span> - <span className="inline-flex gap-2">Python <PythonLogo className="text-2xl"/></span></li>
                <li><span className="font-bold">Domain Specific Knowledge:</span>
                    <ul className='list-disc pl-4'>
                        <li><span className="font-semibold inline-flex gap-2"><SettingsLogo/>Systems:</span> GNU-Linux, RaspberryPi, Networking Protocols, RaspberryPi</li>
                        <li><span className="font-semibold inline-flex gap-2"><DbmsLogo/>DBMS:</span> MySQL, PostgreSQL, PySpark</li>
                        <li><span className="font-semibold inline-flex gap-2"><RobotLogo/>Data Science:</span> Pandas, Numpy, Matplotlib, Seaborn, ScikitLearn, OpenCV</li>
                        <li><span className="font-semibold inline-flex gap-2"><HtmlLogo/>Web:</span> HTML-CSS-JavaScript, NEXT.js-Tailwind, Figma, Spline3D</li>
                        <li><span className="font-semibold inline-flex gap-2"><UnityLogo/>3D/GameDev:</span> Unity3D-C#, Blender</li>
                    </ul>
                </li>
                <li>
                    <span className="font-bold">Tools/Engines:</span> <span className="inline-flex gap-2">GitHub<GithubLogo className="text-xl"/></span>, <span className="inline-flex gap-2">Docker<DockerLogo className="text-xl"/></span>
                </li>
                <li><span className="font-bold">Soft Skills:</span> Time Management, Communication, Writing Skills, Team Management</li>
            </ul>
        )
    }
]

const Aboutsection = () => {

    const [tab, setTab] = useState("education")
    const [isPending, startTransition] = useTransition()

    const handleTabChanges = (id)=>{
        startTransition(() =>{
            setTab(id)
        })
    }
  return (
    <section className='text-white' id='About_Section'>
        <motion.div initial={{opacity:0, scale: 1.1}} animate={{opacity:1, scale: 1}} className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <img src="images/face.png" alt='my image' width={500} height={500} className="rounded-md"></img>
            <div>
                <h2 className='text-4xl font-bold text-secondary-500 mb-4 mt-8'>About Me</h2>
                <p className='text-base lg:text-lg'>I&apos;m dedicated CSE student currently pursuing my B.Tech degree with a passion for software, front-end, designing and Game development. My interests extend to the realms of art, geometry and technology reflecting a diverse range of creative and analytical pursuits. I have adaptability and quick learning abilities in my arsenal. Due to my collaborative nature, I excel in team environments. My strong time management skills ensure efficient project execution, while my effective communication skills facilitate seamless collaboration with team menbers and clients alike.</p>
                <div className="flex flex-row justify-start mt-8">
                    <Tabbutton selectTab={()=>handleTabChanges("education")} active={tab==="education"}>
                        {" "}
                        Education{" "}
                    </Tabbutton>
                    <Tabbutton selectTab={()=>handleTabChanges("courses")} active={tab==="courses"}>
                        {" "}
                        Courses{" "}
                    </Tabbutton>
                    <Tabbutton selectTab={()=>handleTabChanges("skills")} active={tab==="skills"}>
                        {" "}
                        Skills{" "}
                    </Tabbutton>
                </div>
                <div className="mt-8">
                    {tabData.find((t) => t.id === tab).content}
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Aboutsection