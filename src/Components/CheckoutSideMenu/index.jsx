import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

import OrderCard from "../OrderCard";
export default function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[300px] h-[calc(100vh-80px)] bottom-1 overflow-scroll`}
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
    </aside>
  );
}
