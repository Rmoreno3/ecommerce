import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
export default function ProductDetail() {
  const context = useContext(ShoppingCartContext);
  const { images, title, price, description } = context.productToShow;

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[300px] h-[calc(100vh-80px)] bottom-1`}
    >
      <div className="flex justify-between items-center p-3">
        <h2 className="font-medium text-xl">Detail</h2>
        <button
          className="cursor-pointer"
          onClick={() => context.closeProductDetail()}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="p-6">
        <figure className="flex justify-center w-full shadow-xl rounded-lg">
          <img className="h-40" src={images} alt={title} />
        </figure>
        <div className="flex flex-col">
          <span className="font-medium text-2xl mt-5">${price}</span>
          <span className="font-medium text-md mt-2">{title}</span>
          <span className="text-justify truncate font-light text-sm">
            {description}
          </span>
        </div>
      </div>
    </aside>
  );
}
