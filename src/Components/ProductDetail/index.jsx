export default function ProductDetail() {
  return (
    <aside className="flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[300px] h-[calc(100vh-80px)] bottom-1">
      <div className="flex justify-between items-center p-3">
        <h2 className="font-medium text-xl">Detail</h2>
        <button>X</button>
      </div>
    </aside>
  );
}
