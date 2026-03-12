import { AiOutlineZoomIn } from "react-icons/ai";
import { LuRotate3D } from "react-icons/lu";
import ivarTestImage from "../assets/ivarTestImage.jpg";
import ivarBuildImage3 from "../assets/ivarBuildImage3.jpg";
import component1 from "../assets/component1.jpg";
import component2 from "../assets/component2.jpg";
import component3 from "../assets/component3.jpg";
import component4 from "../assets/component4.jpg";
import component5 from "../assets/component5.jpg";
import component6 from "../assets/component6.jpg";
import component7 from "../assets/component7.jpg";
import component8 from "../assets/component8.jpg";
import component9 from "../assets/component9.jpg";
import component10 from "../assets/component10.jpg";
import component11 from "../assets/component11.jpg";
import component12 from "../assets/component12.jpg";
import component13 from "../assets/component13.jpg";
import component14 from "../assets/component14.jpg";
import component15 from "../assets/component15.jpg";

export default function MainPage({ currentStep, onZoom, onZoomOverlay }) {
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
        {currentStep === 1 && (
          <>
            <div className="component">
              <div className="componentImageContainer">
                <img src={component2} alt="Ivar the Boneless" />
              </div>
              <p>8X</p>
            </div>
          </>
        )}
        {currentStep === 2 && (
          <>
            <div className="component">
              <div className="componentImageContainer">
                <img src={component1} alt="Ivar the Boneless" />
              </div>
              <p>4X</p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
