import { HighlightRow } from "./HighlightRow";
import { TopRow } from "./TopRow";
import { WeekRow } from "./WeekRow";

const MainData = (): React.JSX.Element => {
  return (
    <div className="w-9/12 bg-[#f6f6f8] min-h-full text-black flex flex-col justify-start pb-8 rounded-r-4xl">
      <TopRow />
      <WeekRow />
      <div className="px-7 text-2xl font-semibold my-5">Today's Highlight </div>
      <HighlightRow />
    </div>
  );
};
export { MainData };
