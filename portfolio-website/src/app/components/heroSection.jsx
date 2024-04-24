"use client";
import React from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import GsapMagnetic from './GsapMagnetic';


const HeroSection = () => {
  return (
    <section className="xl:px-16">
        <motion.div initial={{opacity:0, scale: 1.1}} animate={{opacity:1, scale: 1}} className="grid grid-cols-1 sm:grid-cols-12">
            <div transition={{duration: .5}} className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-400'>Hi, I&apos;m{""}</span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Swarnarup',
                            3000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Bhunia',
                            2000,
                            'a software Developer',
                            2000,
                            'a Designer',
                            2000,
                            'an Enthusiast..',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-white text-lg lg:text-xl mb-6'>
                    I may not look interesting. Well.. you have talk to me for few minuites to really get to the interesting stuffs...
                </p>
                <div>
                    <Link href="mailto:swarnarupbhunia2003@gmail.com">
                        <GsapMagnetic>
                            <button href="mailto:swarnarupbhunia2003@gmail.com" style={{height: "8rem", width: "8rem"}} className="rounded-full mr-3 sm:mr-10 bg-secondary-600 hover:bg-primary-500 font-mono text-white hover:text-black">
                                Contact Me
                            </button>
                        </GsapMagnetic>
                    </Link>
                        <a href="images/SwarnarupBhunia_resume.pdf" download >
                            <GsapMagnetic>
                                <button style={{height: "8rem", width: "8rem"}} className='rounded-full mt-8 bg-secondary-600 hover:bg-primary-500 text-white hover:text-black font-mono'>
                                        Download CV
                                </button>
                            </GsapMagnetic>
                        </a>
                    {/* <GsapMagnetic><button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">Hire me</button></GsapMagnetic>
                    <GsapMagnetic>
                        <button className='px-1 py-1 mt-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-400 text-white border'>
                            <GsapMagnetic>
                                <div className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</div>
                            </GsapMagnetic>
                        </button>
                    </GsapMagnetic> */}
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4">
                <div className="rounded-full bg-[#181818] relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
                    <img src="images/avatar2.png" alt="The Image" height={300} width={300}
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
                    {/* <video src="images/lotus.png"></video> */}
                </div>
            </div>
        </motion.div>
    </section>
  );
};

export default HeroSection;