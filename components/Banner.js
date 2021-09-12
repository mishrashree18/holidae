import Image from "next/image";
import bg from "../Images/banner.jpg";
import Link from "next/link";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px]">
         
      <Image
        src={bg}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        opacity="25"
        className="opacity-60"
      />

      <div className="absolute top-1/4 w-full text-center space-y-5 md:space-y-20">
        <div class="text-xl sm:text-3xl xl:text-4xl text-primary">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-700 md:text-9xl text-5xl font-extrabold uppercase">Paradise</span>
          <br></br> Discover the world
          
        </div>
      
        <Link href="/explore">
          <button className="text-primary text-sm md:text-md lg:text-lg bg-white px-5 md:px-10 py-1 md:py-3 shadow-md rounded-full font-bold my-5 hover:shadow-2xl active:scale-90 transition duration-150">
            Lets Holiday
          </button>
        </Link>
        <div className="w-20 h-40 absolute bg-blue rounded-full bottom-20 left-20 transform rotate-45 hidden md:block"></div>
      </div>
     
    </div>
  );
}

export default Banner;
