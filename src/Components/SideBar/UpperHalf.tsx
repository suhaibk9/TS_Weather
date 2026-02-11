import { SearchIcon } from "../../Icons";
import { format } from "date-fns";
import CloudyNight from "../../Assets/cloudyNight.png";
export const UpperHalf = (): React.JSX.Element => {
  return (
    <div className="h-1/2 w-full p-6">
      <div className="flex rounded-md overflow-hidden border border-black">
        <input
          placeholder="Search For A City"
          className="h-10 px-3 flex-1 outline-none bg-white text-black"
        />
        <button className="h-10 px-3 bg-blue-500 flex items-center justify-center border-l border-black">
          <SearchIcon />
        </button>
      </div>
      <div className="flex justify-center my-5 w-full">
        <img src={CloudyNight} className=" h-55 " />
      </div>
      <div className="flex flex-col items-start">
        <div className="font-semibold text-7xl text-black relative inline-block">
          12
          <span className="absolute top-1 text-2xl">°C</span>
        </div>

        <div className="text-xl">{format(new Date(), "EEEE, HH:mm")}</div>
      </div>
    </div>
  );
};
