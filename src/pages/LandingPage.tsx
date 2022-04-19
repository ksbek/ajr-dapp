import React from "react";
import LogoWhite from "../assets/images/logo.svg";
import LeftImage from "../assets/images/frog.png";
import RightImage from "../assets/images/bro.png";
import TelegramSVG from "../assets/images/telegram.svg";
import RedditSVG from "../assets/images/reddit.svg";
import TwitterSVG from "../assets/images/twitter.svg";
import GmailSVG from "../assets/images/gmail.svg";
import InstagramSVG from "../assets/images/instagram.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="row landing-page">
        <div className="col-sm-12 text-center d-flex justify-content-between flex-column">
          <div className="row">
            <div className="col d-md-flex d-none align-items-center">
              <img src={LeftImage} />
            </div>
            <div className="col">
              <img className="mt-2" src={LogoWhite} style={{ maxWidth: 300 }} />
              <div className="mt-2 gap-2">
                <div>
                  <a href="" target="_blank">
                    Buy NFT
                  </a>
                </div>
                <div>
                  <Link to="/project">Project</Link>
                </div>
                <div>
                  <a href="https://linktr.ee/AJR_Official" target="_blank">
                    Social
                  </a>
                </div>
                <div>
                  <Link to="/team">Team</Link>
                </div>
              </div>
            </div>
            <div className="col d-md-flex d-none align-items-center">
              <img src={RightImage} />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="community-links">
              <a href="https://www.instagram.com/ajrtoken/" target="_blank">
                <img src={InstagramSVG} />
              </a>
              <a href="https://twitter.com/AJRTOKEN" target="_blank">
                <img src={TwitterSVG} />
              </a>
              <a href="https://t.me/ajrtoken" target="_blank">
                <img src={TelegramSVG} />
              </a>
              <a href="mailto:ajrtoken@gmail.com" target="_blank">
                <img src={GmailSVG} />
              </a>
              <a href="https://www.reddit.com/user/AJRTOKEN" target="_blank">
                <img src={RedditSVG} />
              </a>
            </div>
          </div>
          <div className="mt-2 pb-5">
            METAVERSE - NFT - FASHION - LIFESTYLE
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
