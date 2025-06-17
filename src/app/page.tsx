import * as motion from "motion/react-client"
import Image from 'next/image'

export default function Home() {
  return (
    <div>
        <motion.div
          initial={{ scale:0, opacity: -1}}
          animate={{ scale:1, opacity: 1}}>
          <div className="absolute ml-[30vw] mt-20">
            <Image
              src="/pfp2.jpg"
              height={100}
              width={100}
              alt="my profile pic"
              className="rounded-full aspect-2/3 object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: "0px", opacity: 0}}
          animate={{ y: "100px", opacity: 1}}
        >
          <p className="text-red-400 ml-[37vw]">
            harrison tran
          </p>
          <p className="absolute mt-[-25] text-blue-400 ml-[70vw]">
            socials
          </p>
        </motion.div>
        <motion.div
          initial={{ y: "0px", opacity: 0}}
          animate={{ y: "110px", opacity: 1}}
          transition={{delay: 0.5}}
        >
          <Image
              src="/schoolico.png"
              height={20}
              width={20}
              alt="school"
              className="absolute ml-[37vw]"
          />
          <p className="text-white ml-[38.3vw]">
            uc irvine
          </p> 
          <Image
              src="/locoicon.png"
              height={25}
              width={25}
              alt="school"
              className="absolute ml-[36.9vw]"
          />
          <p className="text-white ml-[38.3vw]">
            garden grove, ca
          </p> 
          <Image
              src="/techstackico.png"
              height={25}
              width={25}
              alt="school"
              className="absolute ml-[36.9vw]"
          />
          <p className="text-white ml-[38.3vw]">
            c++, python, tailwind, java
          </p> 
        </motion.div>
        <motion.div
          initial={{ y: "0px", opacity: 0}}
          animate={{ y: "70px", opacity: 1}}
          transition={{delay: 0.7}}
        >
          <p className="absolute mt-1 ml-[70vw] text-blue-400 text-right">
            desc
          </p> 
        </motion.div>
    </div>
  );
}
