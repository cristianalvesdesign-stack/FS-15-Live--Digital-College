import MainBanner from "../../assets/images/banners/banner-main.png";
import VersaceBrand from "../../assets/images/brands/versace.png";
import ZaraBrand from "../../assets/images/brands/zara.png";
import GucciBrand from "../../assets/images/brands/gucci.png";
import PradaBrand from "../../assets/images/brands/prada.png";
import CalvinKleinBrand from "../../assets/images/brands/calvin-klein.png";
import TshirtLongsize from "../../assets/images/products/t-shirt-black.png";
import ProductRate from "../../assets/images/products/product-rate.png";
import BlueJeans from "../../assets/images/products/long-jeans.png";
import LongBlue from "../../assets/images/products/casual-long-blue.png";
import LongOrange from "../../assets/images/products/t-shirt-baseball-orange.png";
import LongBege from "../../assets/images/products/casual-long-bege.png";
import TShirtOrange from "../../assets/images/products/t-shirt-orange.png";
import ShortJeans from "../../assets/images/products/short-jeans.png";
import BlackJeans from "../../assets/images/products/jeans.png";

function Home() {
    return (
        <>
            <div>
                <img src={MainBanner} alt="" />
            </div>

            <div className="bg-black! py-10 flex justify-evenly items-center">
                <img src={VersaceBrand} alt="" />
                <img src={ZaraBrand} alt="" />
                <img src={GucciBrand} alt="" />
                <img src={PradaBrand} alt="" />
                <img src={CalvinKleinBrand} alt="" />
            </div>
            <section className="mb-15">
              <h3 className="text-4xl w-full text-center mt-20 mb-15">NEW ARRIVALS</h3>
              <div className="flex justify-between gap-4">
                <div>
                  <img src={TshirtLongsize} alt="" className="rounded-xl mb-3" />
                  <p className="font-semibold! text-black! mb-2">
                    T-shirt With Tape Details
                  </p>
                  <img src={ProductRate} alt="" className="mb-2" />
                  <p className="font-semibold! text-black! text-xl!">
                    R$ 120
                  </p>
                </div>
                <div>
                  <img src={BlueJeans} alt="" className="rounded-xl mb-3" />
                  <p className="font-semibold! text-black! mb-2">
                    Skinny Fit Jeans
                  </p>
                  <img src={ProductRate} alt="" className="mb-2" />
                  <div className="flex gap-3">
                  <p className="font-semibold! text-black! text-xl!">
                    R$ 240
                  </p>
                   <p className="font-semibold! text-gray-400! text-xl! line-through!">
                    R$ 260
                  </p>
                  <span className="bg-red-100 py-1 px-3 text-sm! rounded-2xl text-red-400 font-semibold!">
                    -20%
                  </span>
                  </div>
                </div>
                <div>
                  <img src={LongBlue} alt="" className="rounded-xl mb-3" />
                  <p className="font-semibold! text-black! mb-2">
                    Checkered Shirt
                  </p>
                  <img src={ProductRate} alt="" className="mb-2" />
                  <p className="font-semibold! text-black! text-xl!">
                    R$ 180
                  </p>
                </div>
                <div>
                  <img src={LongOrange} alt="" className="rounded-xl mb-3" />
                  <p className="font-semibold! text-black! mb-2">
                    Sleeve Striped T-shirt
                  </p>
                  <img src={ProductRate} alt="" className="mb-2" />
                  <div className="flex gap-3">
                  <p className="font-semibold! text-black! text-xl!">
                    R$ 130
                  </p>
                   <p className="font-semibold! text-gray-400! text-xl! line-through!">
                    R$ 160
                  </p>
                  <span className="bg-red-100 py-1 px-3 text-sm! rounded-2xl text-red-400 font-semibold!">
                    -30%
                  </span>
                  </div>
                </div>
              </div>
             <div className="w-full mt-10 flex justify-center">
               <button className="border rounded-4xl! py-3 px-20 border-gray-300 cursor-pointer"> 
                View All 
              </button>
             </div>
            </section>
            <hr className="text-gray-300"/>
            <section className="mb-15">
              <h3 className="text-4xl w-full text-center mt-10 mb-15">TOP SELLINGS</h3>
              <div className="flex justify-between gap-4">
                <div>
                  <img src={LongBege} alt="" className="rounded-xl mb-3" />
                  <p className="font-semibold! text-black! mb-2">
                    Vertical Striped Shirt
                  </p>
                  <img src={ProductRate} alt="" className="mb-2" />
                  <div className="flex gap-3">
                  <p className="font-semibold! text-black! text-xl!">
                    R$ 212
                  </p>
                   <p className="font-semibold! text-gray-400! text-xl! line-through!">
                    R$ 232
                  </p>
                  <span className="bg-red-100 py-1 px-3 text-sm! rounded-2xl text-red-400 font-semibold!">
                    -20%
                  </span>
                  </div>
                </div>
                <div>
                  <img src={TShirtOrange} alt="" className="rounded-xl mb-3" />
                  <p className="font-semibold! text-black! mb-2">
                    Courage Graphic T-shirt
                  </p>
                  <img src={ProductRate} alt="" className="mb-2" />
                  <p className="font-semibold! text-black! text-xl!">
                    R$ 145
                  </p>
                </div>
                <div>
                  <img src={ShortJeans} alt="" className="rounded-xl mb-3" />
                  <p className="font-semibold! text-black! mb-2">
                    Loose Fit Bermuda Shorts
                  </p>
                  <img src={ProductRate} alt="" className="mb-2" />
                  <p className="font-semibold! text-black! text-xl!">
                    R$ 80
                  </p>
                </div>
                <div>
                  <img src={BlackJeans} alt="" className="rounded-xl mb-3" />
                  <p className="font-semibold! text-black! mb-2">
                    Faded Skinny Jeans
                  </p>
                  <img src={ProductRate} alt="" className="mb-2" />
                  <p className="font-semibold! text-black! text-xl!">
                    R$ 210
                  </p>
                </div>
              </div>
             <div className="w-full mt-10 flex justify-center">
               <button className="border rounded-4xl! py-3 px-20 border-gray-300 cursor-pointer"> 
                View All 
              </button>
             </div>
            </section>
        </>
    );
}

export default Home;