import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
export default function ProductDetail() {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[300px] h-[calc(100vh-80px)] bottom-1`}
    >
      <div className="flex justify-between items-center p-3">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
}
