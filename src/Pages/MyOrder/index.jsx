import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import OrderCard from '../../Components/OrderCard'

export default function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <>
      <div className="flex w-80 items-center justify-center relative">
        <Link to="/my-orders" className="absolute left-0"  >
          <ChevronLeftIcon className="h-6 w-6 cursor-pointer text-black"  />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
    </>
    )
}
