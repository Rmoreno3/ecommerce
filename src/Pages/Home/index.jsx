import { useState, useEffect } from "react";
import Card from "../../Components/Card";
const API = "https://api.escuelajs.co/api/v1/products";

function Home() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {product?.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </div>
  );
}

export default Home;
