import TopSelling from "./components/TopSelling";
import NewArrivals from "./components/NewArrivals";
import MainBanner from "./components/MainBanner";
import BrandsCompany from "./components/BrandsCompany";
import BrowseStyle from "./components/BrowseStyle";
import Testimonials from "./components/Testimonials";


function Home() {
    return (
        <>
            <MainBanner />
            <BrandsCompany />
            <NewArrivals />
            <hr className="text-gray-300"/>
            <TopSelling />
            <BrowseStyle />
            <Testimonials />
        </>
    );
}

export default Home;