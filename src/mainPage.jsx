import { AiOutlineZoomIn } from "react-icons/ai";
import { LuRotate3D } from "react-icons/lu";
import ivarTestImage from "../assets/ivarTestImage.jpg";
import ivarTestImage2 from "../assets/ivarTestImage2.png";
import component1 from "../assets/component1.jpg";
import component2 from "../assets/component2.jpg";
import component3 from "../assets/component3.jpg";
import component4 from "../assets/component4.jpg";

export default function MainPage({ onZoom, onZoomOverlay }) {
  return (
    <main>
      <div className="mainTopSection">
        <div className="mainImageContainer">
          <img src={ivarTestImage2} alt="Ivar the Boneless" />
        </div>
        <div className="mainButtonsContainer">
          <button
            className="zoomButton"
            onClick={() => {
              onZoom(ivarTestImage2);
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
            <img src={component1} alt="Ivar the Boneless" />
          </div>
          <p>8X</p>
        </div>
        <div className="component">
          <div className="componentImageContainer">
            <img src={component2} alt="Ivar the Boneless" />
          </div>
          <p>8X</p>
        </div>
        <div className="component">
          <div className="componentImageContainer">
            <img src={component3} alt="Ivar the Boneless" />
          </div>
          <p>12X</p>
        </div>
        <div className="component">
          <div className="componentImageContainer">
            <img src={component4} alt="Ivar the Boneless" />
          </div>
          <p>16X</p>
        </div>
        <div className="component">
          <div className="componentImageContainer">
            <img src={ivarTestImage} alt="Ivar the Boneless" />
          </div>
          <p>20X</p>
        </div>
        <div className="component">
          <div className="componentImageContainer">
            <img src={ivarTestImage} alt="Ivar the Boneless" />
          </div>
          <p>24X</p>
        </div>
        <div className="component">
          <div className="componentImageContainer">
            <img src={ivarTestImage} alt="Ivar the Boneless" />
          </div>
          <p>32X</p>
        </div>
        <div className="component">
          <div className="componentImageContainer">
            <img src={ivarTestImage} alt="Ivar the Boneless" />
          </div>
          <p>40X</p>
        </div>
        <div className="component">
          <div className="componentImageContainer">
            <img src={ivarTestImage} alt="Ivar the Boneless" />
          </div>
          <p>50X</p>
        </div>
        <div className="component">
          <div className="componentImageContainer">
            <img src={ivarTestImage} alt="Ivar the Boneless" />
          </div>
          <p>60X</p>
        </div>
        <div className="component">
          <div className="componentImageContainer">
            <img src={ivarTestImage} alt="Ivar the Boneless" />
          </div>
          <p>70X</p>
        </div>
        <div className="component">
          <div className="componentImageContainer">
            <img src={ivarTestImage} alt="Ivar the Boneless" />
          </div>
          <p>80X</p>
        </div>
      </div>
    </main>
  );
}
