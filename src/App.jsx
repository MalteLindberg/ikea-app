import { useState } from "react";
import "./App.css";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlineZoomIn } from "react-icons/ai";
import { LuRotate3D } from "react-icons/lu";
import { SlArrowRight } from "react-icons/sl";

export default function App() {
  return (
    <div className="mainContainer">
      <header className="topNavContainer">
        <button type="button" className="backButton">
          <IoMdArrowBack />
        </button>
        <h2>IVAR</h2>
        <button type="button" className="infoButton">
          <IoIosInformationCircleOutline />
        </button>
      </header>
      <main>
        <div className="mainTopSection">
          <div className="mainImageContainer">
            <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
          </div>
          <div className="mainButtonsContainer">
            <button className="zoomButton">
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
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>8X</p>
          </div>
          <div className="component">
            <div className="componentImageContainer">
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>8X</p>
          </div>
          <div className="component">
            <div className="componentImageContainer">
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>12X</p>
          </div>
          <div className="component">
            <div className="componentImageContainer">
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>16X</p>
          </div>
          <div className="component">
            <div className="componentImageContainer">
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>20X</p>
          </div>
          <div className="component">
            <div className="componentImageContainer">
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>24X</p>
          </div>
          <div className="component">
            <div className="componentImageContainer">
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>32X</p>
          </div>
          <div className="component">
            <div className="componentImageContainer">
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>40X</p>
          </div>
          <div className="component">
            <div className="componentImageContainer">
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>50X</p>
          </div>
          <div className="component">
            <div className="componentImageContainer">
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>60X</p>
          </div>
          <div className="component">
            <div className="componentImageContainer">
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>70X</p>
          </div>
          <div className="component">
            <div className="componentImageContainer">
              <img src="/src/assets/ivarTestImage.jpg" alt="Ivar the Boneless" />
            </div>
            <p>80X</p>
          </div>
        </div>
        <nav className="bottomNav">
          <button className="beginButton">
            <p>BÖRJA BYGG</p>
            <SlArrowRight />
          </button>
        </nav>
      </main>
    </div>
  );
}
