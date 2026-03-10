import { AiOutlineZoomIn } from "react-icons/ai";
import { LuRotate3D } from "react-icons/lu";
import ivarTestImage from "../assets/ivarTestImage.jpg";
import ivarBuildImage3 from "../assets/ivarBuildImage3.jpg";

export default function MainPage({ onZoom, onZoomOverlay }) {
  return (
    <main>
      <div className="mainTopSection">
        <div className="mainImageContainer">
          <img src={ivarBuildImage3} alt="Ivar the Boneless" />
        </div>
        <div className="mainButtonsContainer">
          <button
            className="zoomButton"
            onClick={() => {
              onZoom(ivarBuildImage3);
              onZoomOverlay("zoomIn");
            }}>
            <AiOutlineZoomIn />
          </button>
          <button className="rotateButton">
            <LuRotate3D />
            <p>Visa i 3D</p>
          </button>
        </div>
      </div>
      <div className="componentsContainer">
        <div className="component">
          <div className="componentImageContainer">
            <img src={ivarTestImage} alt="Ivar the Boneless" />
          </div>
          <p>8X</p>
        </div>
      </div>
    </main>
  );
}
