export default function Card() {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-xl">
      <figure className="relative h-5/6">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs font-light m-1 p-1">
          Electronics
        </span>
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="headphones"
        />
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 rounded-full m-2">
          +
        </button>
      </figure>
      <div className="flex justify-between items-center bg-slate-300/50 rounded-b-lg p-2">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-lg font-bold">$400</span>
      </div>
    </div>
  );
}
