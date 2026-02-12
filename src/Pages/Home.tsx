import { MainData } from "../Components";
import { SideBar } from "../Components";
const Home = (): React.JSX.Element => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center py-8">
      <div className="w-[90%] min-h-[90vh] flex flex-row justify-start items-stretch rounded-4xl">
        <SideBar />
        <MainData />
      </div>
    </div>
  );
};

export { Home };
