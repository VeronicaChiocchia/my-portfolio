import React from "react";
import "./Homepage.css";
import "/src/index.css"

function Homepage() {
  return (
    <div id="homepage" className="hero-container container h-screen md:h-[600px] bg-center bg-cover w-screen max-w-full">
      <div className="custom-gradient flex items-center justify-start px-4 md:px-32">
        <div className="hero-content w-full flex flex-col gap-10 md:text-center">
          <h1 className="text-white custom-h1 text-center">Hi, my name is Verónica</h1>
          <p className="custom-subtitle text-white text-center" >I'm a UX/UI designer and front-end developer.</p>
          <div className="flex items-center pt-2 justify-center gap-4">
            <a className="w-16" href="https://www.linkedin.com/in/veronica-chiocchia/" target="_blank">
                <img src="/img/linkedin logo.png" alt="Descripción de la imagen"/>
            </a>
            <a className="w-16" href="https://github.com/VeronicaChiocchia" target="_blank">
                <img src="/img/github-logo.png" alt="Descripción de la imagen"/>
            </a>
            <a className="w-16" href="https://www.behance.net/veronicachiocchia" target="_blank">
                <img src="/img/behance.webp" alt="Descripción de la imagen"/>
            </a>
            



          </div>

        </div>
      </div>
    </div>
  );
}

export default Homepage;
