import React from 'react'
import Image from 'next/image'
import { Style_Script, Gabriela } from 'next/font/google'

const title = Style_Script({ subsets: ["latin"], weight: ["400", "400"] })
const desc = Gabriela({ subsets: ["latin"], weight: ["400", "400"] })

const Hero = () => {
  return (
    <div className='flex h-screen w-screen justify-center items-center gap-20 bg-[#fafafa]'>
        <div className='flex flex-col gap-15'>
            <div className='flex flex-col gap-5'>
                <p className={`${title.className} text-8xl`}>Shreyash Neeraj</p>
                <p className={`${title.className} text-4xl`}>Developer</p>
            </div>
            <p className={`${desc.className} max-w-150`}>—hi iam <span className='text-red-700 font-extrabold'>shreyash,</span> <br />a full-stack developer, problem solver, android enthusiast, web tinkerer, backend builder, design admirer, tech explorer — and a second-year engineering student shaping thoughtful digital experiences. Currently building a smarter, more animated version of this portfolio!</p>
        </div>
        <div>
            <Image src="/hero_img.png" width={200} height={200} alt='pfp'/>
        </div>
    </div>
  )
}

export default Hero