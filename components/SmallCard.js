import Image from "next/image";
import Link from 'next/link';

function SmallCard({img, location, distance}) {
    return (
        <Link href="/nearyou">
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
        <div className="relative h-16 w-16">
            <Image src={img} layout="fill" className="rounded-lg" />
        </div>
        <div>
            <h2 className="text-primary font-semibold">{location}</h2>
            <h3>{distance}</h3>
        </div>
        </div>
        </Link>
    )
}

export default SmallCard
