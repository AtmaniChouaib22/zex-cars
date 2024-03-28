import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Sellpage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold">Sell your car</div>
      <p className="sm:px-40 px-10 py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        consequuntur tempore quos eius recusandae natus exercitationem error
        itaque cumque maiores doloremque possimus cupiditate ducimus suscipit
        necessitatibus, voluptate qui. In, repellendus!
      </p>
      <form action="" className="sm:px-14 flex flex-col gap-5">
        <div className="text-2xl font-bold text-center gap-3">Car Details</div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-3 px-8 sm:px-20">
          <div className="col-span-2">
            <Label htmlFor="name">Title</Label>
            <Input type="text" id="name" />
          </div>
          <div>
            <Label htmlFor="name">location</Label>
            <Input type="text" id="name" />
          </div>
          <div>
            <Label htmlFor="name">Model</Label>
            <Input type="text" id="name" />
          </div>
          <div>
            <Label htmlFor="name">Picture</Label>
            <Input type="file" id="name" className="cursor-pointer" />
          </div>
          <div>
            <Label htmlFor="name">Mileage</Label>
            <Input type="text" id="name" className="w-3/4" />
          </div>
          <div>
            <Label htmlFor="name">Make</Label>
            <Input type="text" id="name" className="w-3/4" />
          </div>
          <div>
            <Label htmlFor="name">Registration Year</Label>
            <Input type="text" id="name" className="w-3/4 " />
          </div>
          <div>
            <Label htmlFor="name">No of seats</Label>
            <Input type="text" id="name" className="w-3/4" />
          </div>
          <div>
            <Label htmlFor="name">no of doors</Label>
            <Input type="text" id="name" className="w-3/4" />
          </div>
          <div>
            <Label htmlFor="name">Colour</Label>
            <Input type="text" id="name" className="w-3/4" />
          </div>
        </div>
        <div className="text-2xl font-bold text-center">
          Car Performance Details
        </div>
        <div className="flex justify-center flex-wrap items-center px-8 sm:px-20 gap-3">
          <div className="">
            <Label htmlFor="name">Engine Capacity</Label>
            <Input type="text" id="name" className="w-full sm:w-3/4 " />
          </div>
          <div>
            <Label htmlFor="name">Fuel tank capacity</Label>
            <Input type="text" id="name" className="w-full sm:w-3/4" />
          </div>
          <div>
            <Label htmlFor="name">Cylender Layout</Label>
            <Input type="text" id="name" className="w-full sm:w-3/4" />
          </div>
          <div>
            <Label htmlFor="name">fuel type</Label>
            <Input type="text" id="name" className="w-full sm:w-3/4" />
          </div>
          <div>
            <Label htmlFor="name">Gears</Label>
            <Input type="text" id="name" className="w-full sm:w-3/4 " />
          </div>
          <div>
            <Label htmlFor="name">Transmission</Label>
            <Input type="text" id="name" className="w-full sm:w-3/4" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button className="px-10 ">sell</Button>
        </div>
      </form>
    </div>
  );
};

export default Sellpage;
