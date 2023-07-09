import { Link } from "react-router-dom";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import { totalPrice } from "../../Utils";

import OrderCard from "../OrderCard";
export default function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    }

    context.setOrder([...context.order, orderToAdd]);
    console.log(orderToAdd)
    context.setCartProducts([]);
    context.setCount(0)
    context.closeCheckoutSideMenu()
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[300px] h-[calc(100vh-80px)] bottom-1 overflow-scroll overflow-x-hidden`}
    >
      <div className="flex justify-between items-center p-3">
        <h2 className="font-medium text-xl">My Order</h2>
        <button
          className="cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            images={product.images}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 pb-3">
        <p className="flex justify-between items-center border-t-2 border-t-black">
          <span className="font-light">Total:</span>
          <span className="text-2xl font-bold py-1">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
          <button className="w-full bg-black text-white py-3 rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  );
}
