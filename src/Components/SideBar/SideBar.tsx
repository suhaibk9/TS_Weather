import { LowerHalf } from "./LowerHalf";
import { UpperHalf } from "./UpperHalf";
const SideBar = (): React.JSX.Element => {
  return (
    <div className="self-stretch w-3/12 bg-white/80 text-black flex flex-col rounded-l-4xl">
      <UpperHalf />
      <div className="divider before:bg-white after:bg-white text-white px-4"></div>
      <LowerHalf />
    </div>
  );
};
export { SideBar };
