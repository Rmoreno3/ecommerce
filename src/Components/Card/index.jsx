import { PlusIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export default function Card(data) {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);

    const productExists = context.cartProducts.some(
      (cartItem) => cartItem.id === productData.id
    );

    if (productExists) {
      const productCart = context.cartProducts.find(
        (cartItem) => cartItem.id === productData.id
      );
      productCart.quantity += 1;
    } else {
      productData.quantity = 1;
    }

    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
  };

  return (
    <div
      className="flex flex-col justify-between cursor-pointer w-56 h-61 rounded-lg shadow-xl"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative h-5/6">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs font-light m-1 p-1">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={data.data.images[0]}
          alt={`${data.data.title}`}
        />
        <button
          className="absolute top-0 right-0 bg-white w-6 rounded-full m-2"
          onClick={(event) => addProductToCart(event, data.data)}
        >
          <PlusIcon className="w-6 h-6" />
        </button>
      </figure>
      <div className="flex justify-between items-center bg-slate-300/50 rounded-b-lg p-2">
        <span className="text-sm truncate font-light">{data.data.title}</span>
        <span className="text-lg font-bold">${data.data.price}</span>
      </div>
    </div>
  );
}
