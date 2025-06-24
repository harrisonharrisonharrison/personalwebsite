import * as motion from "motion/react-client"
import Image from 'next/image'
import Link from 'next/link'
import ReadMoreComponent from "./descriptions/expand"
import Profile from "./profile"
import { GTT } from "./elements/gtt"
import { HNCC } from "./elements/hncc"
import Stellarship from "./projects/stellarship"
import Cinemaker from "./projects/cinemaker"
import Navbar from "./elements/navbar"
import 'react-vertical-timeline-component/style.min.css';

export default function Home() {
  return (
    <div id="home" className="min-h-screen">
      <div>
        <Profile/>
        <ReadMoreComponent/>
        <GTT/>
        <HNCC/>
        <Navbar/>
      </div>  
      <div id="projects" className="h-screen -z-1 w-screen absolute top-250 bg-linear-to-t to-black/25 from-rose-950 px-10 lg:px-80">
        <Stellarship/>
        <Cinemaker/>
      </div>
      <div id="gallery" className="h-screen -z-1 w-screen xs:top-400 sm:top-460 absolute bg-linear-to-t from-purple-950/25 to-rose-950 px-10 lg:px-80">
      </div>
    </div>
  );
}
