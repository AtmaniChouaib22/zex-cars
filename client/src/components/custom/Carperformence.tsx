const Carperformence = () => {
  return (
    <div className="flex flex-col p-4 items-center sm:w-600 bg-white border-zinc-950 border-4 rounded-lg ">
      <div className="text-2xl font-bold">Car Performence</div>
      <div className="w-full">
        <div className="border-b-2 border-zinc-300   flex justify-between px-6 py-2">
          Engine Capacity: <span className="font-bold">value</span>
        </div>
        <div className="border-b-2 border-zinc-300 flex justify-between px-6 py-2">
          Fuel Tank Capacity: <span className="font-bold">value</span>
        </div>
        <div className="border-b-2 border-zinc-300  flex justify-between px-6 py-2">
          Fuel Type: <span className="font-bold">value</span>
        </div>
        <div className="border-b-2 border-zinc-300   flex justify-between px-6 py-2">
          Registration year: <span className="font-bold">value</span>
        </div>
        <div className="border-b-2 border-zinc-300   flex justify-between px-6 py-2">
          Gears: <span className="font-bold">value</span>
        </div>
      </div>
    </div>
  );
};

export default Carperformence;
