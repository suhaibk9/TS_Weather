import { SearchIcon } from "../../Icons";
import { format } from "date-fns";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { useEffect, useState } from "react";
import CloudyNight from "../../Assets/cloudyNight.png";

import { updateCityName } from "../../slices/informationSlice";
import { useGetCurrentWeatherQuery } from "../../Api/getCityData";
export const UpperHalf = (): React.JSX.Element => {
  const [inputVal, setInputVal] = useState<string>("Liverpool");
  const dispatch = useAppDispatch();
  const { cityName, typeTemp } = useAppSelector((state) => state.information);
  const isC = typeTemp === "C";
  const { data, error } = useGetCurrentWeatherQuery(
    { city: cityName },
    { skip: !cityName },
  );
  useEffect(() => {
    if (error && cityName !== "Liverpool") {
      window.alert("City not found. Reverting back to Liverpool.");
      dispatch(updateCityName("Liverpool"));
      setInputVal("Liverpool");
    }
  }, [error, cityName, dispatch]);
  return (
    <div className="h-1/2 w-full p-6">
      <div className="flex rounded-md overflow-hidden border border-black">
        <input
          placeholder="Search For A City"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="h-10 px-3 flex-1 outline-none bg-white text-black"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(updateCityName(inputVal));
            }
          }}
        />
        <button
          className="h-10 px-3 bg-blue-500 flex items-center justify-center border-l border-black"
          onClick={() => dispatch(updateCityName(inputVal))}
        >
          <SearchIcon />
        </button>
      </div>
      <div className="flex justify-center my-5 w-full">
        <img
          src={data ? data.current.condition.icon : CloudyNight}
          className=" h-55 "
        />
      </div>
      <div className="flex flex-col items-start">
        <div className="font-semibold text-7xl text-black relative inline-block">
          {data ? (isC ? data.current.temp_c : data.current.temp_f) : "12"}
          <span className="absolute top-1 text-2xl">{isC ? "°C" : "°F"}</span>
        </div>

        <div className="text-xl">{format(new Date(), "EEEE, HH:mm")}</div>
      </div>
    </div>
  );
};
