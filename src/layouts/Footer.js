import React from "react";
import TelegramSVG from '../assets/images/telegram.svg';
import DiscordSVG from '../assets/images/discord.svg';
import TwitterSVG from '../assets/images/twitter.svg';
import TiktokSVG from '../assets/images/tiktok.svg';
import InstagramSVG from '../assets/images/instagram.svg';

const Footer = () => {
  return <React.Fragment>
    <div className="row footer">
      <div className="col-sm-6 white-bg d-flex justify-content-between">
        <div className="">
          <div>JOIN THE AJR COMMUNITY</div>
          <div className="community-links">
            <a href="https://t.me/ajrtoken" target="_blank">
              <img src={TelegramSVG} />
            </a>
            <a href="https://discord.gg/bd5UUnYmQ5" target="_blank">
              <img src={DiscordSVG} />
            </a>
            <a href="https://www.instagram.com/ajrtoken/" target="_blank">
              <img src={InstagramSVG} />
            </a>
            <a href="https://www.tiktok.com/@ajrtoken?lang=fr" target="_blank">
              <img src={TiktokSVG} />
            </a>
            <a href="https://twitter.com/AJRTOKEN" target="_blank">
              <img src={TwitterSVG} />
            </a>
          </div>
        </div>
        <div className="slippage">
          Slippage
        </div>
      </div>
      <div className="col-sm-6 black-bg d-flex justify-content-between text-center">
        <span>Liquidity 4%&nbsp;</span>
        <span>Marketing 2%</span>
        <span>Rewards 2%</span>
        <span>Burn 1%</span>
      </div>
    </div >
  </React.Fragment >
}

export default Footer;