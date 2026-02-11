import { MainData } from "../Components";
import { SideBar } from "../Components";
const Home = (): React.JSX.Element => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[90%] h-[90%] flex flex-row justify-center items-center  rounded-4xl overflow-hidden">
        <SideBar />
        <MainData />
      </div>
    </div>
  );
};

export { Home };
