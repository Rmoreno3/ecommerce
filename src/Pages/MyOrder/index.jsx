import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

import OrderCard from '../../Components/OrderCard'

export default function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  index === 'last' ? index = context.order.length - 1 : index

  return (
    <>
      <div className="flex w-80 items-center justify-center relative">
        <Link to="/my-orders" className="absolute left-0"  >
          <ChevronLeftIcon className="h-6 w-6 cursor-pointer text-black"  />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            images={product.images}
          />
        ))}
        <div className="flex justify-between items-center mt-2 border-t-2 border-black">
          <span className="text-lg font-semibold">Total:</span>
          <div className="flex items-center gap-2">
            <CurrencyDollarIcon className="w-6 h-6" />
            <span className="text-xl font-bold">{context.order[index].totalPrice}</span>
          </div>
        </div>
      </div>
    </>
    )
}
