import Image from "next/image";
import Link from 'next/link';

function MediumCard({ img, title }) {
    return (
        <Link href="/nearyou">
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image src={img} layout="fill" className="rounded-xl" />
            </div>
            <h3 className="text-2xl mt-3 mb-5 text-primary">{title}</h3>
            
        </div>
        </Link>
    )
}

export default MediumCard
