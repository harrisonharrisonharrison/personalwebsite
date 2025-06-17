'use client'
import * as motion from "motion/react-client"
import React, { useState } from 'react';
import Image from 'next/image'


export default function Desc3() {
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
                    className="absolute mt-5 ml-[-13]"
                    />}
        </button>
      </motion.div>
      {isVisible && (
        <motion.div
                initial={{ y:0, opacity: -1}}
                animate={{ y:10, opacity: 1}}>
            <div id="expand"  className="m-auto md:w-150 w-fit" >
            i really like meeting new people, so feel free to hmu on any of the socials on the top right. 
            i've also been getting more involved with clubs on campus, like FUSION, Design@UCI, and AI@UCI.
            </div>
        </motion.div>
      )}
    </div>
    
  );
}