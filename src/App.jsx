import { useState } from "react";
import "./App.css";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import { MdOutlineDocumentScanner } from "react-icons/md";
import MainPage from "./mainPage";
import BuildPage from "./buildPage";
import ZoomContainer from "./zoom";
import IvarModel3D from "./ivarModel3D";
import { IoIosClose } from "react-icons/io";
import { VscWarning } from "react-icons/vsc";
import warningImage1 from "../assets/warningImage1.jpg";
import warningImage2 from "../assets/warningImage2.jpg";
import warningImage3 from "../assets/warningImage3.jpg";
import ivarTestImage2 from "../assets/ivarTestImage2.png";
import ivarTestImage from "../assets/ivarTestImage.jpg";
import ivarBuildImage3 from "../assets/ivarBuildImage3.jpg";
import component1 from "../assets/component1.jpg";
import component2 from "../assets/component2.jpg";
import component3 from "../assets/component3.jpg";
import component4 from "../assets/component4.jpg";

export default function App() {
  const [page, setPage] = useState("main");
  const [overlay, setOverlay] = useState("none");
  const totalSteps = 12;
  const [currentStep, setCurrentStep] = useState(1);
  const [zoomImage, setZoomImage] = useState(null);

  function setPageToMain() {
    setPage("main");
    setCurrentStep(1);
  }
  return (
    <div className="mainContainer">
      {overlay !== "none" && (
        <div className="overlay">
          <div onClick={() => setOverlay("none")} className="overlayCloseBackground"></div>
          <div className="overlayContainer">
            <div className="overlayContent">
              {overlay === "rotate" && (
                <>
                  <div className="topRotateOverlayBar">
                    <p>Rotera möbel</p>
                  </div>
                  <div className="rotateOverlayImageContainer">
                    <img src={warningImage1} alt="Ivar the Boneless" />
                  </div>
                  <div className="bottomRotateOverlayNav">
                    <button className="rotateOverlayCloseButton">
                      <IoIosClose size="3rem" />
                    </button>
                    <button className="rotateOverlayNextButton">
                      <SlArrowRight size="3rem" />
                    </button>
                  </div>
                </>
              )}
              {overlay === "info" && (
                <>
                  <div className="topOverlayBar">
                    <button className="overlayCloseButton" onClick={() => setOverlay("none")}>
                      <IoIosClose size="3rem" />
                    </button>
                    <p>Information</p>
                  </div>
                  <div className="infoWarningContainer">
                    <div className="warningIconContainer">
                      <VscWarning size="3rem" />
                    </div>
                    <div className="infoWarningTextContainer">
                      <p>VARNING!</p>
                      <p>Allvarliga eller livsfarliga klämskador kan uppstå från möbler som välter. För att förhindra att möbeln välter måste den användas med medföljande väggfäste.</p>
                      <p>Skruv och plugg för väggen ingår inte. Använd skruv och plugg som passar dina väggar. Om du är osäker, sök professionell rådgivning. Läs och följ varje steg i anvisningen noga.</p>
                    </div>
                  </div>
                  <img src={warningImage1} alt="Warning" srcSet="" />
                  <img src={warningImage2} alt="Warning" srcSet="" />
                  <img src={warningImage3} alt="Warning" srcSet="" />
                </>
              )}
              {overlay === "zoomIn" && (
                <>
                  <div className="topOverlayBar">
                    <button className="overlayCloseButton" onClick={() => setOverlay("none")}>
                      <IoIosClose size="3rem" />
                    </button>
                    <p>Zoom in</p>
                  </div>
                  <ZoomContainer />
                </>
              )}
              {overlay === "view3D" && (
                <>
                  <div className="topOverlayBar">
                    <button className="overlayCloseButton" onClick={() => setOverlay("none")}>
                      <IoIosClose size="3rem" />
                    </button>
                    <p>3D</p>
                  </div>
                  <IvarModel3D />
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <header className="topNavContainer">
        {page === "build" && (
          <>
            <button onClick={() => setPageToMain()} type="button" className="backButton">
              <IoMdArrowBack />
            </button>
            <h2>IVAR</h2>
            <button onClick={() => setOverlay("info")} type="button" className="infoButton">
              <IoIosInformationCircleOutline />
            </button>
          </>
        )}
        {page === "main" && (
          <>
            <button style={{ opacity: 0 }} onClick={() => setPageToMain()} type="button" className="backButton">
              <IoMdArrowBack />
            </button>
            <h2>IVAR</h2>
            <button onClick={() => setOverlay("rotate")} type="button" className="infoButton">
              <IoIosInformationCircleOutline />
            </button>
          </>
        )}
      </header>
      {page === "main" && <MainPage onZoom={setZoomImage} onZoomOverlay={setOverlay} on3dOverlay={setOverlay} />}
      {page === "build" && <BuildPage currentStep={currentStep} onZoom={setZoomImage} onZoomOverlay={setOverlay} />}
      <nav className="bottomNav">
        {page === "main" && (
          <button onClick={() => setPage("build")} className="beginButton">
            <p>BÖRJA BYGG</p>
            <SlArrowRight />
          </button>
        )}
        {page === "build" && (
          <>
            <button onClick={() => currentStep < totalSteps && setCurrentStep(currentStep + 1)} className="beginButton">
              <p>NÄSTA STEG</p>
              <SlArrowRight />
            </button>
            <div className="progressBarContainer">
              <div className="progressBar">
                <div className="progressBarFill" style={{ width: `${(currentStep / totalSteps) * 100}%` }} />
              </div>
            </div>
            <div className="bottomNavButtonsContainer">
              {currentStep === 1 && (
                <>
                  <button style={{ opacity: 0, pointerEvents: "none" }} onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)} className="stepBackButton">
                    <IoMdArrowBack />
                    <p>Föregående</p>
                  </button>
                </>
              )}
              {currentStep > 1 && (
                <>
                  <button onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)} className="stepBackButton">
                    <IoMdArrowBack />
                    <p>Föregående</p>
                  </button>
                </>
              )}
              <p className="stepCounter">
                {currentStep} av {totalSteps}
              </p>
              <button className="overviewButton">
                <p>Översikt</p>
                <MdOutlineDocumentScanner />
              </button>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}
