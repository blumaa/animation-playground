// import "./App.scss";
import BumEdit from "./RosaRay/BumEditWithHand";
import MorphOnClick from "./Examples/MorphOnClick";
import IxiLoaderAnimation from "./xion/IxiLoader";
import CareflexBackground from "./xion/CareflexBackground";
import XionLogo from "./xion/XionLogo";

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
        <XionLogo />
        click the logo
      </div>
      <div className="gallery-window">
        <IxiLoaderAnimation />
      </div>
      <div className="gallery-window">
        <CareflexBackground />
        hover over the beaker
      </div>
    </div>
  );
}

export default App;
