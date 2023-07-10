import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from '../../Context'
import OrdersCard from "../../Components/OrdersCard";

export default function MyOrders() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order)

  return (
    <>
      <div>
        <h1>My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/last/${order.id}`}>
          <OrdersCard
            date={order.date}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>

      ))}
    </>
  )
}
