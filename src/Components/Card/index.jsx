import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export default function Card(data) {
  const context = useContext(ShoppingCartContext);

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-xl">
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
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 rounded-full m-2"
          onClick={() => context.setCount(context.count + 1)}
        >
          +
        </button>
      </figure>
      <div className="flex justify-between items-center bg-slate-300/50 rounded-b-lg p-2">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-bold">${data.data.price}</span>
      </div>
    </div>
  );
}
