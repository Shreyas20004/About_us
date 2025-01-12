import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.jpg';
import cat5 from '../assets/cat5.jpg';
import cat6 from '../assets/cat6.jpg';
import cat7 from '../assets/cat7.jpg';
import cat8 from '../assets/cat8.jpg';
import cat9 from '../assets/cat9.jpg';


export default function About_us() {
  return (
        <div id="about" className="mt-[2rem] sm:mt-[-3rem] ">
            <div className="p-4 md:pl-24 h-full w-full">
                <h1 className="text-7xl sm:text-[11rem] md:text-[12rem] font-bebas text-[#c1339a] font-bold text-center mb-[2rem]">About Us</h1>
                <p className="font-bold text-white text-center text-xl leading-relaxed mb-[2rem]">Code Kshetra 2.0, a 36-hour hackathon in February 2025, invites tech enhusisasts to a reviting experience of innovation. Dive into coding challenges, showcase your skills, and seize the chance to win exciting swags and prizes. Elevate your coding game, connect with industry experts, and leave your mark on the future of tech.</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 md:ml-6 mt-6 h-80 ">
                <div className="grid grid-cols-5 grid-rows-7 md:w-[45%] gap-3">
                    <div className="bg-slate-400 col-span-3 row-span-3 rounded-3xl overflow-hidden hover:cursor-pointer">
                        <img src={cat1} alt="Logo1" className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out " />
                    </div>
                    <div className="bg-slate-900 col-span-2 row-span-3 rounded-3xl overflow-hidden hover:cursor-pointer">
                        <img src={cat2} alt="Logo2" className="w-full p-4 h-full object-contain rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out " />
                    </div>
                    <div className="bg-slate-400 col-span-2 row-span-4 rounded-3xl overflow-hidden hover:cursor-pointer">
                        <img src={cat3} alt="Logo3" className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out" />
                    </div>
                    <div className="bg-slate-400 col-span-3 row-span-4 rounded-3xl overflow-hidden hover:cursor-pointer">
                        <img src={cat4} alt="Logo4" className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out" />
                    </div>
                </div>
                <div className="grid grid-cols-9 grid-rows-5 md:w-[55%] gap-3">
                    <div className="bg-slate-400 col-span-3 row-span-3 rounded-3xl overflow-hidden hover:cursor-pointer">
                        <img src={cat5} alt="Logo5" className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out" />
                    </div>
                    <div className="bg-slate-400 col-span-6 row-span-3 rounded-3xl overflow-hidden hover:cursor-pointer">
                        <img src={cat6} alt="Logo6" className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out" />
                    </div>
                    <div className="bg-slate-400 col-span-2 row-span-2 rounded-3xl overflow-hidden hover:cursor-pointer" >
                        <img src={cat7} alt="Logo7" className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out" />
                    </div>
                <div className="bg-slate-400 col-span-5 row-span-2 rounded-3xl overflow-hidden hover:cursor-pointer">
                    <img src={cat8} alt="Logo8" className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-all duration-300 ease-in-out" />
                </div>
                <div className="bg-slate-900 col-span-2 row-span-2 rounded-3xl overflow-hidden hover:cursor-pointer">
                    <img src={cat9} alt="Logo9" className="w-full h-full object-contain hover:scale-110 transition-all duration-300 ease-in-out " />
                </div>
            </div>
        </div>
    </div>
  )
}
