// import "./App.scss";
import BumEdit from "./RosaRay/BumEditWithHand";
import MorphOnClick from "./Examples/MorphOnClick";
import IxiLoaderAnimation from "./xion/IxiLoader";
import CareflexBackground from "./xion/CareflexBackground";
import XionLogo from "./xion/XionLogo";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="gallery-buttons">
        <Link className="button" to="/">home</Link>
        <Link className="button" to="/ixi-loader">Ixi Loader</Link>
        {/* <Link className="button" to="/xion-logo">Xion Logo</Link> */}
      </div>
      <div className="gallery">
        {/* <div className="gallery-window">
          <MorphOnClick />
        </div> */}
            <div className="gallery-window">
              <Switch>
              <Route path="/" exact>
                { ({ match }) => <XionLogo show={match !== null} /> }
              </Route>
              <Route path="/ixi-loader" exact>
                { ({ match }) => <IxiLoaderAnimation show={match !== null} /> }
              </Route>
              </Switch>
              {/* <Route path="/" exact>
                { ({ match }) => <BumEdit show={match !== null} /> }
              </Route>
              <Route path="/xion-logo">
                { ({ match }) => <XionLogo show={match !== null} /> }
              </Route> */}
            </div>
        {/* <div className="gallery-window">
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
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
