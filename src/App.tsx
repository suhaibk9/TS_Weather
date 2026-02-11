import { Home } from "./Pages";
import NightImage from "./Assets/NightImage.jpg";
function App(): React.JSX.Element {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${NightImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}

    >
      <Home />
    </div>
  );
}
export default App;
