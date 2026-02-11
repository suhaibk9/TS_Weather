import { LowerHalf } from "./LowerHalf";
import { UpperHalf } from "./UpperHalf";
const SideBar = (): React.JSX.Element => {
  return (
    <div className="h-full w-3/12 bg-white/80 text-black flex flex-col ">
      <UpperHalf />
      <div className="divider before:bg-white after:bg-white text-white px-4"></div>
      <LowerHalf />
    </div>
  );
};
export { SideBar };
