'use client'
import * as motion from "motion/react-client"
import React, { useState } from 'react';
import Image from 'next/image'
import Desc from "./desc2"

export default function ReadMoreComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
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
                    className="absolute mt-60"
                    />}
        </button>
      </motion.div>
      {isVisible && (
        <motion.div
                initial={{ y:0, opacity: -1}}
                animate={{ y:10, opacity: 1}}>
            <p id="expand"  className="m-auto md:w-150 w-fit mt-60" >
            helloooo im harrison, a second year compsci major at uci, and this is my personal 
            website/portfolio. here, i hope to add a project showcase and create gallery for my photos, among other things.
            </p>
            <div className="text-center"><Desc/></div>
        </motion.div>
      )}
    </div>
    
  );
}