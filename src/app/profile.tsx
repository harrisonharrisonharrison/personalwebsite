import * as motion from "motion/react-client"
import Image from 'next/image'
import Link from 'next/link'

export default function Profile(){
    return (
        <div >
            <div className="absolute  md:ml-[25vw] ml-[0] mt-20">
        <motion.div
          initial={{ scale:0, opacity: -1}}
          animate={{ scale:1, opacity: 1}}>
          <Image
            src="/pfp2.jpg"
            height={100}
            width={100}
            alt="my profile pic"
            className="rounded-full aspect-2/3 object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ y: "-500px", opacity: 0}}
          animate={{ y: "-125px", opacity: 1}}
          className="ml-30 text-red-400 "
        >
          harrison tran
        </motion.div>
          
          <motion.div
            initial={{ y: "0px", opacity: 0}}
            animate={{ y: "-115px", opacity: 1}}
            transition={{delay: 0.3}}
          >
            <Image
                src="/schoolico.png"
                height={20}
                width={20}
                alt="school"
                className="inline ml-30"
            />
            <p className="text-white inline ml-2">
              uc irvine
            </p> 
          </motion.div>
          <motion.div
            initial={{ y: "0px", opacity: 0}}
            animate={{ y: "-115px", opacity: 1}}
            transition={{delay: 0.5}}
          >
            <Image
                src="/locoicon.png"
                height={25}
                width={25}
                alt="school"
                className="inline ml-30"
            />
            <p className="text-white inline ml-1">
              garden grove, ca
            </p>
          </motion.div>
          <motion.div
            initial={{ y: "0px", opacity: 0}}
            animate={{ y: "-115px", opacity: 1}}
            transition={{delay: 0.7}}
          >
            <Image
                src="/techstackico.png"
                height={25}
                width={25}
                alt="school"
                className="inline ml-30"
            />
            <p className="text-white inline ml-1">
              c++, python, tailwind, java
            </p> 
          </motion.div>
          
      </div>

      <div className="absolute ml-[89vw] md:ml-[70vw] mt-8 text-right">  
        <motion.div
          initial={{ y: "0px", opacity: 0}}
          animate={{ y: "73px", opacity: 1}}
          transition={{delay: .9}}
        >
          <Link href={'https://github.com/harrisonharrisonharrison'}>
            <Image 
              src="/github ico.png" 
              alt="github" 
              width={30} height={30}
              className="ml-5"
              />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: "0px", opacity: 0}}
          animate={{ y: "73px", opacity: 1}}
          transition={{delay: 1.1}}
        >
          <Link href={'https://steamcommunity.com/id/carrotoes/'}>
            <Image 
              src="/steamico.png" 
              alt="steam" 
              width={30} height={30}
              className="ml-5"
              />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: "0px", opacity: 0}}
          animate={{ y: "73px", opacity: 1}}
          transition={{delay: 1.3}}
        >
          <Link href={'https://www.instagram.com/lasnganga/'}>
            <Image 
              src="/instaico.png" 
              alt="github" 
              width={30} height={30}
              className="ml-5"
              />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: "0px", opacity: 0}}
          animate={{ y: "73px", opacity: 1}}
          transition={{delay: 1.5}}
        >
          <Link href={'https://www.linkedin.com/in/harrison-tran-547213294/'}>
            <Image 
              src="/linkedico.png" 
              alt="github" 
              width={30} height={30}
              className="ml-5"
              />
          </Link>
        </motion.div>
      </div>
        </div>
    )
}