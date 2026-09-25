import Categories from "./categories/Categories"
import MostSold from "./most-sold/MostSold"
import Off from "./off/Off"
import NewsLetter from "./newsletter/NewsLetter"

function Home () {
    return (
        <>
            <div className="mb-3 mt-5">
                <Categories />
            </div>
            <div className="mb-3">
                <MostSold />
            </div>
            <div className="mb-3">
                <Off />
            </div>
            <div className="mb-3">
                <NewsLetter />
            </div>
        </>
    )
}

export default Home