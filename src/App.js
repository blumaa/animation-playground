import "./App.css";
import BumEdit from "./RosaRay/BumEditWithHand";
import MorphOnClick from "./Examples/MorphOnClick";

function App() {
  return (
    <div className="gallery">
      <div className="gallery-window">
        <MorphOnClick />
      </div>
      <div className="gallery-window">
        <BumEdit />
      </div>
    </div>
  );
}

export default App;
