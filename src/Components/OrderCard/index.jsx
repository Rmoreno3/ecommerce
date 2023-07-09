/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function OrderCard(props) {
  const { id, title, price, images, quantity, handleDelete } = props;

  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex gap-2 items-center">
        <span className="text-sm w-4">{quantity}</span>
        <figure className="w-10 h-10">
          <img
            src={images}
            alt={title}
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-lg font-bold">{price}</p>
        {handleDelete &&  <XMarkIcon
          className="w-6 h-6 cursor-pointer"
          onClick={() => handleDelete(id)}
        />}       
      </div>
    </div>
  );
}
