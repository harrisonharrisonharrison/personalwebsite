import Link from "next/link";
import Image from 'next/image'

export default function Cinemaker(){
    return (
        <div>
            <div className="card w-70 relative top-20">
              <div className="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
                <div className="card__front absolute top-20 right-0 left-0 bg-radial from-slate-950 to-indigo-900 flex items-center justify-center">
                  <Image 
                    src={"/cinemaker.jpg"} 
                    alt={"Cinemaker"}          
                    width={300}
                    height={200}  
                    className="rounded-lg"     
                  />
                </div>
                <div className="card__back absolute h-45 top-20 right-0 left-0 p-8 bg-radial from-red-550 to-rose-950 flex items-center">
                  <h2 className="absolute top-2 left-3">Cinemaker</h2>
                  <h2 className="absolute top-2 right-3 font-normal">April 2025</h2>
                  <h2 className="absolute bottom-3 right-3 font-normal">
                    <Link href="https://devpost.com/software/cinemaker">
                      <Image
                        src={"/devpost.png"} 
                        alt={"devpost"}          
                        width={30}
                        height={30}  
                        className="rounded-lg"/>
                    </Link>
                  </h2>
                  <h2 className="absolute top-9 left-0 px-3 font-normal font-mono text-xs">
                    Cinemaker was another hackathon project that helped consolidate trending movie trailers and used Google Gemini to display concise overviews of each title.
                    Users could Like, Dislike, or Skip trailers to refine their feed.
                  </h2>
                </div>
              </div>
          </div> 
        </div>
    )
}