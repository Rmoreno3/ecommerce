/* eslint-disable react/prop-types */
// import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon, CurrencyDollarIcon, CalendarDaysIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


export default function OrdersCard(props) {
  const { date, totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-center gap-2 items-center border border-black p-2 mt-5 rounded-md">
        <div className="flex items-center gap-1">
          <ShoppingCartIcon className="w-6 h-6"/>
          <span>{totalProducts}</span>
        </div>
        <div className="flex items-center gap-1">
          <CurrencyDollarIcon className="w-6 h-6"/>
          <span>{totalPrice}</span>
        </div> 
        <div className="flex items-center gap-1">
          <CalendarDaysIcon className="w-6 h-6"/>
          <span>{date}</span>
        </div>
        <div>
          <ChevronRightIcon className="w-6 h-6"/>
        </div>
    </div>
  );
}
