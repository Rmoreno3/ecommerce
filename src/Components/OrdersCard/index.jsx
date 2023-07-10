/* eslint-disable react/prop-types */
// import { XMarkIcon } from "@heroicons/react/24/outline";

export default function OrdersCard(props) {
  const { date, totalPrice, totalProducts } = props;

  return (
    <div className="flex gap-2 items-center border border-black">
        <p>
            <span>{date}</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>    
    </div>
  );
}
