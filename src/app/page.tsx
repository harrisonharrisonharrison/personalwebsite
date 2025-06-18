import * as motion from "motion/react-client"
import Image from 'next/image'
import Link from 'next/link'
import ReadMoreComponent from "./descriptions/expand"
import Profile from "./profile"

export default function Home() {
  return (
    <div className="bg-black">
        
      <div className="bg-black"><Profile/></div>
      <div className=" bg-black text-center"><ReadMoreComponent/></div>
      
    </div>
  );
}
