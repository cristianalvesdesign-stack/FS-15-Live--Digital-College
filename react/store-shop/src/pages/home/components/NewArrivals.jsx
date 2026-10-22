import TshirtLongsize from "../../../assets/images/products/t-shirt-black.png";
import ProductRate from "../../../assets/images/products/product-rate.png";
import BlueJeans from "../../../assets/images/products/long-jeans.png";
import LongBlue from "../../../assets/images/products/casual-long-blue.png";
import LongOrange from "../../../assets/images/products/t-shirt-baseball-orange.png";
import ProductCard from "../../../components/product/card/ProductCard"
import { NavLink } from "react-router";

function NewArrivals () {
    return (
        <section className="mb-15">
              <h3 className="text-4xl w-full text-center mt-20 mb-15">NEW ARRIVALS</h3>
              <div className="flex justify-between gap-4">
                <ProductCard 
                image={TshirtLongsize} 
                productRate={ProductRate}
                title="T-shirt With Tape Details"
                price="120"
                />
                <ProductCard 
                image={BlueJeans} 
                productRate={ProductRate}
                title="Skinny Fit Jeans"
                price="260"
                priceDiscount="240"
                discount="20"
                />
                <ProductCard 
                image={LongBlue} 
                productRate={ProductRate}
                title="Checkered Shirt"
                price="180"
                />
                <ProductCard 
                image={LongOrange} 
                productRate={ProductRate}
                title="Sleeve Striped T-shirt"
                price="160"
                priceDiscount="130"
                discount="30"
                />
              </div>
             <div className="w-full mt-10 flex justify-center">
              <NavLink to="produtos">
               <button className="border rounded-4xl! py-3 px-20 border-gray-300 cursor-pointer"> 
                View All 
              </button>
              </NavLink>
             </div>
            </section>
    );
}

export default NewArrivals