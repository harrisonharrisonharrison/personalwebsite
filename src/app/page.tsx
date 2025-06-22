import * as motion from "motion/react-client"
import Image from 'next/image'
import Link from 'next/link'
import ReadMoreComponent from "./descriptions/expand"
import Profile from "./profile"
import { GTT } from "./elements/gtt"
import { HNCC } from "./elements/hncc"
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
          <div className="card w-70">
              <div className="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
                <div className="card__front absolute top-20 right-0 left-0 bg-radial from-slate-950 to-indigo-900 flex items-center justify-center">
                  <Image 
                    src={"/stellarship.png"} 
                    alt={"Stellarship"}          
                    width={300}
                    height={200}  
                    className="rounded-lg"     
                  />
                </div>
                <div className="card__back absolute h-45 top-20 right-0 left-0 p-8 bg-radial from-slate-950 to-indigo-900 flex items-center">
                  <h2 className="absolute top-2 left-3">Stellarship</h2>
                  <h2 className="absolute top-2 right-3 font-normal">April 2025</h2>
                  <h2 className="absolute bottom-3 right-3 font-normal">
                    <Link href="https://devpost.com/software/stellarship">
                      <Image
                        src={"/devpost.png"} 
                        alt={"devpost"}          
                        width={30}
                        height={30}  
                        className="rounded-lg"/>
                    </Link>
                  </h2>
                  <h2 className="absolute top-9 left-0 px-3 font-normal font-mono text-xs">Stellarship was a hackathon project that was designed to make it easier for low-income students to find scholarships.
                    The most difficult part was implementing BeautifulSoup to scrape scholarships and input them into our MongoDB cluster.
                  </h2>
                </div>
              </div>
          </div> 
          
                                      
      </div>
      <div id="gallery" className="h-screen -z-1 w-screen xs:top-400 sm:top-460 absolute bg-linear-to-t from-purple-950/25 to-rose-950 px-10 lg:px-80">
      </div>
    </div>
  );
}
