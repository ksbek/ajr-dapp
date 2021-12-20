import React from 'react'
import LogoWhite from '../assets/images/logo_white.png'
import LogoBlack from '../assets/images/logo_black.png'
import snake from '../assets/images/snake.png'

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="row landing-page page">
        <div className="col-sm-6 white-bg text-center">
          <img src={snake} className="snake" />
          <img src={LogoBlack} />
          <div className="mt-2">Luxury Brand</div>
        </div>
        <div className="col-sm-6 black-bg text-center">
          <img src={LogoWhite} />
          <div className="mt-2">One Brand One Dream</div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LandingPage
