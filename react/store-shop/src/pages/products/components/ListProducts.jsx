import ProductCard from "../../../components/product/card/ProductCard";
import TshirtLongsize from "../../../assets/images/products/t-shirt-black.png";
import ProductRate from "../../../assets/images/products/product-rate.png";
import BlueJeans from "../../../assets/images/products/long-jeans.png";
import LongBlue from "../../../assets/images/products/casual-long-blue.png";
import LongOrange from "../../../assets/images/products/t-shirt-baseball-orange.png";
import TshirtWhite from "../../../assets/images/products/t-shirt-white.png";
import TshirtGray from "../../../assets/images/products/t-shirt-grey.png";
import BaseballWhite from "../../../assets/images/products/t-shirt-baseball-white.png";
import LongBege from "../../../assets/images/products/casual-long-bege.png";
import TShirtOrange from "../../../assets/images/products/t-shirt-orange.png";
import ShortJeans from "../../../assets/images/products/short-jeans.png";



function ListProducts() {
  return (  
  <>
    <div className="w-full ">
      <div className="mb-5 flex justify-between">
        <h1>All Products</h1>
        <div className="flex gap-6 ">
          <p className="text-sm!">Showing 1-10 of 100 Products</p>
          <p className="text-sm!">Sort by:</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-5">
        <ProductCard 
                image={TshirtWhite} 
                productRate={ProductRate}
                title="Gradient Graphic T-shirt"
                price="145"
                />
                <ProductCard 
                image={TshirtGray} 
                productRate={ProductRate}
                title="Polo with Tipping Details"
                price="180"
                />
                <ProductCard 
                image={BaseballWhite} 
                productRate={ProductRate}
                title="Checkered Shirt"
                price="150"
                priceDiscount="120"
                discount="30"
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
      </div>
       <hr className="text-gray-300 mt-8"/>
       <div className="flex justify-between mb-6">
        <button>setinha esquerda</button>
        <div>numero pagina</div>
        <button>setinha direita</button>
       </div>
    </div>
  </>
  )
}

export default ListProducts;