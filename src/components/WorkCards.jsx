import React from 'react'
import Image from 'next/image';
import { Noto_Sans_Georgian } from 'next/font/google';

const title = Noto_Sans_Georgian({ subsets: ["latin"], weight: ["400", "400"] })
export default function WorkCards({colorA, colorB, header, companyName, image, footer}) {
    return (
      <div className="relative w-80 font-mono">
        {/* Background offset layer */}
        <div className={`absolute bottom-5 right-5 w-full h-full ${colorA} border border-black z-0`} />
  
        {/* Foreground card */}
        <div className="relative bg-white border border-black z-10">
          {/* Header */}
          <div className="p-3 border-b border-black">
            <p className="text-sm tracking-wide">{header}</p>
          </div>
  
          {/* Company Name */}
          <div className={`${title.className} p-3 border-b border-black font-mono`}>
            <h2 className="text-3xl font-extrabold ">{companyName}</h2>
          </div>
          <div className= {`${colorB}`}>
            {/* Image */}
            <Image
                src={image}
                height={200}
                width={150}
                className=' border-black p-5 object-fill h-100 w-80'
            />
          </div>
  
          {/* Footer */}
          <div className="p-3 border-y">
            <p className="text-md font-semibold">{footer}</p>
          </div>
        </div>
      </div>
    );
  }
  