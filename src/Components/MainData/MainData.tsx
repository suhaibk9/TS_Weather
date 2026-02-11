import { HighlightRow } from "./HighlightRow";
import { TopRow } from "./TopRow";
import { WeekRow } from "./WeekRow";

const MainData = (): React.JSX.Element => {
  return (
    <div className="w-9/12 bg-[#f6f6f8] h-full text-black flex flex-col justify-start">
      <TopRow />
      <WeekRow />
      <div>Today's Highlight </div>
      <HighlightRow />
    </div>
  );
};
export { MainData };
