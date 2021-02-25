import "./App.css";
import BumEdit from "./RosaRay/BumEditWithHand";
import MorphOnClick from "./Examples/MorphOnClick";
import IxiLoaderAnimation from "./xion/IxiLoader";

function App() {
  return (
    <div className="gallery">
      {/* <div className="gallery-window">
        <MorphOnClick />
      </div> */}
      <div className="gallery-window">
        <BumEdit />
      </div>
      <div className="gallery-window">
        <IxiLoaderAnimation />
      </div>
    </div>
  );
}

export default App;
