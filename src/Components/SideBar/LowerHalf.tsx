import { LocationIcon } from "../../Icons";
const LowerHalf = () => {
  return (
    <div className="h-1/2 ">
      <div className="flex flex-col justify-between items-start w-full h-full">
        <div className="flex flex-col justify-start items-center w-full ">
          <div>Partially cloudy</div>
          <div>Perc - 0%</div>
        </div>
        <div className="ml-5 mb-4 w-full">
          <span className="mr-1 inline-block ">
            <LocationIcon />
          </span>
          <span>Liverpool</span>
        </div>
      </div>
    </div>
  );
};
export { LowerHalf };
