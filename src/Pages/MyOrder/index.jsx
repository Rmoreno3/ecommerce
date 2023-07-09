import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

import OrderCard from '../../Components/OrderCard'

export default function MyOrder() {
  const context = useContext(ShoppingCartContext)

  return (
    <>
      <div>MyOrder</div>
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
