import React from "react";
import LeftImage from "../assets/images/ceo.png";

const TeamPage = () => {
  return (
    <React.Fragment>
      <div className="row landing-page">
        <div className="col-sm-12 text-center d-flex justify-content-between flex-column p-5">
          <h1>TEAM</h1>
          <div className="row content">
            <div className="col-md-4 d-flex flex-column align-items-center gap-2">
              <div>Ceo / Creator</div>
              <div
                style={{
                  border: "10px solid #F6E7C3",
                  borderRadius: "100%",
                  height: "300px",
                  width: "300px",
                }}
              >
                <img src={LeftImage} className="w-100" />
              </div>
            </div>
            <div className="col-md-4 align-items-center d-flex justify-content-center">
              <div className="mt-2 gap-2">
                This is <br />
                just the <br />
                beginning
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center gap-2">
              <div>AJR Dev</div>
              <div
                style={{
                  border: "20px solid #F6E7C3",
                  borderRadius: "100%",
                  position: "relative",
                  height: "300px",
                  width: "300px",
                }}
              >
                <div
                  className="justify-content-center d-flex align-items-center"
                  style={{
                    fontSize: 26,
                    fontFamily: "Arial",
                    width: "100%",
                    height: "100%",
                    background: "white",
                    border: "4px solid #888",
                    borderRadius: "100%",
                    color: "#888",
                  }}
                >
                  NO IMAGE AVAILABLE
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">METAVERSE - NFT - FASHION - LIFESTYLE</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamPage;
