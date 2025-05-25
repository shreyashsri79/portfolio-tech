import React from 'react'
import WorkCards from './WorkCards'

const Work = () => {
  return (
    <> 
    <header id='work' className="border-y border-black bg-[#fafafa]">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 font-serif">
          <div className="text-2xl font-bold underline underline-offset-[6px]">
            work
          </div>

            <div className='flex gap-3'>
                <div className="text-lg font-light underline underline-offset-[6px]">
                    internships
                </div>
                <div className="text-xl font-bold">
                    /
                </div>
                <div className="text-lg  underline underline-offset-[6px]">
                    hackathons
                </div>
                <div className="text-xl font-bold">
                    /
                </div>
                <div className="text-lg  underline underline-offset-[6px]">
                    innovations
                </div>
            </div>  
        </nav>
    </header>
    <div className='p-20 flex gap-20'>
        <WorkCards colorA={"bg-red-600"} colorB={"bg-amber-200"} header={"Feburary 2025"} companyName={"LOCALLOOP"} image={"/LocalLoop.png"} footer={"PROTOTYPE"}/>
        <WorkCards colorA={"bg-blue-400"} colorB={"bg-lime-200"} header={"April 2025"} companyName={"SCROLLANA"} image={"/Scrollana.png"} footer={"HACKATHON"}/>
    </div>
    </>
  )
}

export default Work