import Image from "next/image";
import bg from "../Images/bg.jpg";
import {useRouter} from 'next/router'



function Banner() {
    const router = useRouter();
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px]">
            
        <Image 
        src={bg}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        />
    <div className="absolute top-1/2 w-full text-center">
        <p className="text-lg text-white sm:text-2xl md:text-5xl">
            Discover the world?
        </p>
        
        <button className="text-purple-500 bg-white px-10 py-3 shadow-md rounded-full font-bold my-5 hover:shadow-2xl active:scale-90 transition duration-150">
            Lets Holiday
        </button>
        
    </div>
        </div>
    )
}

export default Banner
