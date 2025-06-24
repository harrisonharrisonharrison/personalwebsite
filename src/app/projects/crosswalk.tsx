import Link from "next/link";
import Image from 'next/image'

export default function Crosswalk(){
    return (
        <div>
            <div className="card w-70 relative top-30">
                <div className="card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
                    <div className="card__front absolute top-20 right-0 left-0 bg-radial from-slate-950 to-indigo-900 flex items-center justify-center">
                    <Image 
                        src={"/crosswalk.png"} 
                        alt={"Crosswalk"}          
                        width={300}
                        height={200}  
                        className="rounded-lg"     
                    />
                    </div>
                    <div className="card__back absolute h-55 top-20 right-0 left-0 p-8 bg-radial from-lime-900 to-sky-900 flex items-center">
                    <h2 className="absolute top-2 left-3">Crosswalk</h2>
                    <h2 className="absolute top-2 right-3 font-normal">June 2025</h2>
                    <h2 className="absolute bottom-3 right-3 font-normal">
                        <Link href="https://www.canva.com/design/DAGox-1Ibxk/CmhcmfAfyfw6x0WJqNDLmg/view?utm_content=DAGox-1Ibxk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7fd2fbf391#1">
                        View the case study!
                        </Link>
                    </h2>
                    <h2 className="absolute top-9 left-0 px-3 font-normal font-mono text-xs">
                        I worked on Crosswalk with 5 others as part of a design project team.
                        It was a Hi-Fidelity prototype for a driver's ed app that incorporated features like GPS and live feedback.
                        We won Second Place, as well as the People's choice award.
                        In the future, I hope to turn it into a fully usable mobile app.
                    </h2>
                    </div>
                </div>
            </div> 
        </div>
    )
}