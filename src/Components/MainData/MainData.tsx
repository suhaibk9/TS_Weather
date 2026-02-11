import { HighlightRow } from "./HighlightRow";
import { TopRow } from "./TopRow";
import { WeekRow } from "./WeekRow";

const MainData = (): React.JSX.Element => {
  return (
    <div className="w-9/12 bg-[#f6f6f8] h-full text-black">
      <TopRow />
      <WeekRow />
      <div>Today's Highlight  </div>
      <HighlightRow />
    </div>
  );
};
export { MainData };
