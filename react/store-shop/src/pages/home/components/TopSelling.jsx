import ProductRate from "../../../assets/images/products/product-rate.png";
import LongBege from "../../../assets/images/products/casual-long-bege.png";
import TShirtOrange from "../../../assets/images/products/t-shirt-orange.png";
import ShortJeans from "../../../assets/images/products/short-jeans.png";
import BlackJeans from "../../../assets/images/products/jeans.png";
import ProductCard from "../../../components/product/card/ProductCard"

function TopSelling () {
    return (
        <section className="mb-15">
              <h3 className="text-4xl w-full text-center mt-10 mb-15">TOP SELLING</h3>
              <div className="flex justify-between gap-4">
              <ProductCard 
                image={LongBege} 
                productRate={ProductRate}
                title="Vertical Striped Shirt"
                price="232"
                priceDiscount="212"
                discount="20"
                />
                <ProductCard 
                image={TShirtOrange} 
                productRate={ProductRate}
                title="Courage Graphic T-shirt"
                price="145"
                />
                <ProductCard 
                image={ShortJeans} 
                productRate={ProductRate}
                title="Loose Fit Bermuda Shorts"
                price="80"
                />
                <ProductCard 
                image={BlackJeans} 
                productRate={ProductRate}
                title="Faded Skinny Jeans"
                price="210"
                />
              </div>
             <div className="w-full mt-10 flex justify-center">
               <button className="border rounded-4xl! py-3 px-20 border-gray-300 cursor-pointer"> 
                View All 
              </button>
             </div>
            </section>
    );
}

export default TopSelling