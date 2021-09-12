import Image from "next/image";
import Link from 'next/link';


function LargeCard({ img, title, description, buttonText }) {
    return (
        <Link href="/nearyou">
        <section className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
            <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
        </div>
        <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 text-primary">
            {title}
        </h3>
        <p className="text-gray-800">{description}</p>
        <button className="text-sm text-white bg-gray-900 py-2 px-4 rounded-2xl mt-5">
            {buttonText}
        </button>
        </div>
        </section>
        </Link>
    )
}

export default LargeCard
