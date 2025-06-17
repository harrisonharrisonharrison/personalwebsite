'use client'
import * as motion from "motion/react-client"
import React, { useState } from 'react';
import Image from 'next/image'
import Link from "next/link";
import Desc2 from "./desc3";

export default function Desc() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div suppressHydrationWarning>
      <motion.div
          animate={{y: -20,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            }}}>
        <button onMouseEnter={toggleText}>
          {isVisible ? '' : <Image 
                    src="/arrows.png" 
                    alt="Click Me!" 
                    width={30} height={30}
                    className="absolute mt-5"
                    />}
        </button>
      </motion.div>
      {isVisible && (
        <motion.div
                initial={{ y:0, opacity: -1}}
                animate={{ y:10, opacity: 1}}>
            <div id="expand"  className="m-auto md:w-150 w-fit" >
            in my free time, i like to lift, play video games, loredrop, play guitar, and listen to music. 
            i like all genres of music, but my favorites are 
            <span className="text-purple-800"><Link href="https://open.spotify.com/artist/3tlXnStJ1fFhdScmQeLpuG?si=Dhchm20YTj-BDXMBGOfPtg"> rnb</Link></span>, 
            <span className="text-yellow-200"><Link href="https://open.spotify.com/artist/4vGrte8FDu062Ntj0RsPiZ?si=z3_qAuAeT7a3LqjPPGtW1Q"> prog rock</Link></span>, and 
            <span className="text-blue-500"><Link href="https://open.spotify.com/artist/5SXuuuRpukkTvsLuUknva1?si=iraXmqfBRIK9kBgLblhXaA"> rap</Link></span>.
            i've linked my favorite artist on each genre, but you can check out my spotify 
            <span className="text-red-500"><Link href="https://open.spotify.com/user/5ccy5hj8eppqsgzwvs3ul56nx?si=fead9f6750604988"> here</Link></span>.
            </div>
            <div className="text-center"><Desc2/></div>
        </motion.div>
      )}
    </div>
    
  );
}