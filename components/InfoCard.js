import Image from "next/image"

function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div>
            <div className="relative h-24 w-40 md:h-52 flex-shrink-0">
                <Image src={img} layout="fill" objectFit="cover" />
                info
            </div>
        </div>
    )
}

export default InfoCard



