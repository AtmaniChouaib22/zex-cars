const Cardetails = () => {
  return (
    <div className="flex flex-col p-4 items-center sm:w-600 bg-white border-zinc-950 border-4 rounded-lg">
      <div className="text-2xl font-bold">Car Details</div>
      <div className="w-full">
        <div className="border-b-2 border-zinc-300  flex justify-between px-6 py-2">
          Make: <span className="font-bold">value</span>
        </div>
        <div className="border-b-2 border-zinc-300  flex justify-between px-6 py-2">
          Model: <span className="font-bold">value</span>
        </div>
        <div className="border-b-2 border-zinc-300  flex justify-between px-6 py-2">
          Mileage: <span className="font-bold">value</span>
        </div>
        <div className="border-b-2 border-zinc-300   flex justify-between px-6 py-2">
          Registration year: <span className="font-bold">value</span>
        </div>
        <div className="border-b-2 border-zinc-300   flex justify-between px-6 py-2">
          Transmission: <span className="font-bold">value</span>
        </div>
        <div className="border-b-2 border-zinc-300  flex justify-between px-6 py-2">
          no of seats: <span className="font-bold">value</span>
        </div>
        <div className="border-b-2 border-zinc-300   flex justify-between px-6 py-2">
          no of Doors: <span className="font-bold">value</span>
        </div>
        <div className="border-b-2 border-zinc-300   flex justify-between px-6 py-2">
          colour: <span className="font-bold">value</span>
        </div>
      </div>
    </div>
  );
};

export default Cardetails;
