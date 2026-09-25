import BannerOutlet from "../../assets/images/banner/banner-1.jpg"
import BannerOutlet2026 from "../../assets/images/banner/banner-2.jpg"


function  AppBanner() {
    return (
        <>
        <section className="container">
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"  aria-current="true" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={BannerOutlet} class="d-block w-100" alt="..."/>
            </div>
                 <div class="carousel-item active">
                    <img src={BannerOutlet2026} class="d-block w-100" alt="..."/>
                 </div>
            </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </section>
        </>
    )
}

export default AppBanner