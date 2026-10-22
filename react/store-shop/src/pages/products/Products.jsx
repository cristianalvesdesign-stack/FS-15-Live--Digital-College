import Filter from "./components/Filter";
import ListProducts from "./components/ListProducts";

function Products() {
  return (  
  <>
    <div className="flex gap-4 items-start">
      <Filter />
      <ListProducts />
      
    </div>
  </>
  )
}

export default Products;