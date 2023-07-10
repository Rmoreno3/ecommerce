// COMPONENTS
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";


function Home() {
  const context = useContext(ShoppingCartContext);
  console.log(context.searchTitleBar)

  return (
    <>
      <div className="m-4">
        <input 
          className="border border-black rounded-lg w-80 p-4 mb-4 focus:outline-none" 
          type="text" 
          placeholder="Search"
          onChange={context.Search}
        />
      </div>
      <div className="grid gap-4 grid-cols-3 w-full max-w-screen-md">
        {context.product?.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <ProductDetail />
    </>
  );
}

export default Home;
