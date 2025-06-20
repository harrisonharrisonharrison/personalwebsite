import * as motion from "motion/react-client"
import Image from 'next/image'
import Link from 'next/link'
import ReadMoreComponent from "./descriptions/expand"
import Profile from "./profile"
import { GTT } from "./elements/gtt"
import { HNCC } from "./elements/hncc"
import Navbar from "./elements/navbar"

export default function Home() {
  return (
    <div className="">
        
      <Profile/>
      <ReadMoreComponent/>
      <GTT/>
      <HNCC/>
      <Navbar/>
    </div>
  );
}
