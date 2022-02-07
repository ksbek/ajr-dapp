import React from 'react'
import LogoWhite from '../assets/images/logo_white.png'
import LogoBlack from '../assets/images/logo_black.png'
import snake from '../assets/images/snake.png'

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="row landing-page">
        <div className="col-sm-12 text-center">
          <img className="mt-5" src={LogoWhite} />
          <div className="mt-2 text-red mt-5 pt-5">Metaverse - Net - Luxury - Lifestyle - Fashion</div>
          <div className="mt-4">Presale AJR Token</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LandingPage
