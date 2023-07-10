// COMPONENTS
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";


function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
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
