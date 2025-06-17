'use client'
import * as motion from "motion/react-client"
import React, { useState } from 'react';
import Image from 'next/image'


export default function ReadMoreComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {isVisible ? '' : <Image 
                  src="/arrows.png" 
                  alt="arrow down" 
                  width={30} height={30}
                  className="absolute mt-75"
                  />}
      </button>
      {isVisible && (
        <motion.div
                initial={{ opacity: -1}}
                animate={{ opacity: 1}}>
            <p id="expand"  className="text-center mt-75" >
            This is the hidden text that is now visible.
            </p>
        </motion.div>
      )}
    </div>
    
  );
}