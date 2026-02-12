import { LocationIcon } from "../../Icons";
import { useAppSelector } from "../../hooks/typedHooks";
import { useGetCurrentWeatherQuery } from "../../Api/getCityData";
const LowerHalf = () => {
  const { cityName } = useAppSelector((state) => state.information);
  const { data } = useGetCurrentWeatherQuery(
    { city: cityName },
    { skip: !cityName },
  );
  return (
    <div className="h-1/2 ">
      <div className="flex flex-col justify-between items-start w-full h-full">
        <div className="flex flex-col justify-start items-center w-full ">
          <div>{data ? data.current.condition.text : "Partially cloudy"}</div>
          <div>{data ? `Perc - ${data.current.precip_in}%` : "Perc - 0%"}</div>
        </div>
        <div className="ml-5 mb-4 w-full">
          <span className="mr-1 inline-block ">
            <LocationIcon />
          </span>
          <span>{data ? data.location.name : "Liverpool"}</span>
        </div>
      </div>
    </div>
  );
};
export { LowerHalf };
