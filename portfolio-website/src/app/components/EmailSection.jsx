"use client"
import React from 'react'
import Link from 'next/link'
import { EmailLogo, GithubLogo, LinkedinLogo, PhoneLogo, UpworkLogo } from './svgs'
import GsapMagnetic from './GsapMagnetic';
import Spline from '@splinetool/react-spline';


const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my12 py-24 gap-4 relative' id='Email_Section'>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I&apos;m an independent developer mostly open for remote projects. I&apos;m available in many social platforms. You can respond in this given form also which will be stored in a google sheet. But for quicker response reach out to me through email, phone or LinkedIn.
            </p>
            <div className='socials flex flex-row gap-4'>
                <GsapMagnetic>
                    <Link href="tel:+91-781-096-5462">
                        <PhoneLogo className='text-3xl md:text-4xl text-white hover:text-secondary-600'/>
                    </Link>
                </GsapMagnetic>
                <GsapMagnetic>
                    <Link href="mailto:swarnarupbhunia2003@gmail.com">
                        <EmailLogo className='text-3xl md:text-4xl text-white hover:text-secondary-600'/>
                    </Link>
                </GsapMagnetic>
                <GsapMagnetic>
                    <Link href="https://github.com/Swarnarup">
                        <GithubLogo className='text-3xl md:text-4xl text-white hover:text-secondary-600'/>
                    </Link>
                </GsapMagnetic>
                <GsapMagnetic>
                    <Link href="https://www.linkedin.com/in/swarnarup-bhunia-6b253924a/">
                        <LinkedinLogo className='text-3xl md:text-4xl text-white hover:text-secondary-600'/>
                    </Link>
                </GsapMagnetic>
                <GsapMagnetic>
                    <Link href="https://www.upwork.com/freelancers/~012fd6e5bb3d7f1862?mp_source=share">
                        <UpworkLogo className='text-3xl md:text-4xl text-white hover:text-secondary-600'/>
                    </Link>
                </GsapMagnetic>
            </div>
        </div>
        <div className='z-10'>
            <form className='flex flex-col'>
                <div className="mb-6">
                    <label htmlFor="email" className='text-white block text-sm font-medium'>Email Me here</label>
                    <input type="email" id='email' required
                    className='bg-[#18191E] border-2 border-[#4f5053] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder='jhon@doe.in'/>
                </div>

                <div className="mb-6">
                    <label htmlFor="subject" className='text-white block text-sm font-medium'>Subject</label>
                    <input type="text" id='subject' required
                    className='bg-[#18191E] border-2 border-[#4f5053] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder="Subject" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className='text-white block text-sm font-medium'>Write here...</label>
                    <textarea name="message" id='message'
                    className='bg-[#18191E] border-2 border-[#4f5053] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    placeholder="What's Up?... You may also write some suggestion for upgrading this website.." />
                </div>
                <button type="submit"
                className='bg-secondary-500 hover:bg-primary-400 text-primary-200 hover:text-secondary-800 font-medium px-5 py-2.5 rounded-lg w-full duration-500'>Send Message</button>
            </form>
        </div>
        <Spline scene="https://prod.spline.design/0si12P5-dIS39vd3/scene.splinecode" className='absolute bottom-[-150px] scale-110'/>
    </section>
  )
}

export default EmailSection