import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { updateTodayWeek } from "../../slices/informationSlice";
import { updateTemp } from "../../slices/informationSlice";
const TopRow = () => {
  const { typeTemp, dayWeek } = useAppSelector((state) => state.information);
  const isDay = dayWeek === "Day";
  const isWeek = dayWeek === "Week";
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-row justify-between items-center px-7 py-5">
      <div className="flex justify-start gap-3 items-center font-semibold">
        <div
          className={`${isDay ? "text-blue-400" : "text-black"}`}
          onClick={() => dispatch(updateTodayWeek("Day"))}
        >
          Today
        </div>
        <div
          onClick={() => dispatch(updateTodayWeek("Week"))}
          className={`${isWeek ? "text-blue-400" : "text-black"}`}
        >
          Week
        </div>
      </div>
      <div className="flex flex-row gap-1 items-center">
        <div
          onClick={() => dispatch(updateTemp("C"))}
          className={`${
            typeTemp === "C" ? "bg-white text-black" : "bg-black text-white"
          } rounded-full h-10 w-10 text-center p-2`}
        >
          °C
        </div>
        <div
          className={`${
            typeTemp === "F" ? "bg-white text-black" : "bg-black text-white"
          } rounded-full h-10 w-10 text-center p-2`}
          onClick={() => dispatch(updateTemp("F"))}
        >
          °F
        </div>
      </div>
    </div>
  );
};
export { TopRow };
