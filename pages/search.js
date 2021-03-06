import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

export default function Search({ searchResults }) {
    const router = useRouter();
    console.log(searchResults);
    // ES6 destructuring
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
            <main className="flex">
                <section className="flex-grow pt-8 px-6">
                    <p className="text-xs p-2 text-primary">5000+ Stay - {range} - for {noOfGuests} guests</p>
                <h1 className="text-3xl text-primary font-semibold mt-2 mb-6 p-2">Stays in {location}</h1>
                <div className="hidden lg:inline-flex mb-5 ml-5 space-x-3 text-primary whitespace-nowrap">
                    <p className="button">Cancellation Flexibility</p>
                    <p className="button">Type of place</p>
                    <p className="button">Price</p>
                    <p className="button">Rooms</p>
                    <p className="button">More filters</p>
                
                </div>
                <div className="flex flex-col">
                
                
                
                {searchResults.map(({ img, location, title, description, star, price, total }
                ) => (
                <InfoCard
                   key={img}
                   img={img}
                   location={location}
                   title={title}
                   description={description}
                   star={star}
                   price={price}
                   total={total}
                   />
                   
                ))}
                </div>

                </section>


            </main>
            <Footer />
        </div>
    )
}



export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then(
        res => res.json()
        );

    return {
        props: {
            searchResults,
        },
    };
}
