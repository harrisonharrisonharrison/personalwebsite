'use client'
import * as motion from "motion/react-client"
import React, { useState } from 'react';
import Image from 'next/image'
import Desc3 from "./desc4"

export default function Desc2() {
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
            i've been lifting since september 2024, and you can usually spot me at the arc. i weigh 140, my bench pr is 205, and i skip 
            <motion.div
                animate={{x: -2,
            transition: {
                duration: .1,
                repeat: Infinity,
                repeatType: "mirror",
            }}}> <span className="text-orange-900">legs.</span></motion.div>
            </div>
            <Desc3/>
        </motion.div>
      )}
    </div>
    
  );
}