import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="FooterElements">
      <div class="row">
        <h3 className="footer__text">powered by:</h3>
        <img
          className="footer__logo"
          href="https://www.themoviedb.org/documentation/api"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
          alt="TMDB"
        />
      </div>
    </div>
  )
}

export default Footer
