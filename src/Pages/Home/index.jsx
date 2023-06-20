import { useState, useEffect } from "react";
// COMPONENTS
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
const API = "https://fakestoreapi.com/products";

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setProduct(data);
        // console.log(data.title);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid gap-4 grid-cols-3 w-full max-w-screen-md">
        {product?.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <ProductDetail />
    </>
  );
}

export default Home;
