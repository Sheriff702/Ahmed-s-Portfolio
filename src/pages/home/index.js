import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec ">
          <h2 className="mb-1x">{introdata.title}</h2>
          <h1 className="fluidz-48 ">
            <Typewriter
              options={{
                strings: [
                  introdata.animated.first,
                  introdata.animated.second,
                  introdata.animated.third,
                  introdata.animated.forth,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
              }}
            />
          </h1>
          <p className="mb-1x">{introdata.description}</p>
          <div className="intro_btn-action pb-3">
            <Link to="/portfolio" className="text_2">
              <div id="button_p" className="ac_btn btn">
                My Portfolio
              </div>
            </Link>
            <Link to="/contact">
              <div id="button_h" className="ac_btn btn">
                Contact Me
              </div>
            </Link>
          </div>
        </div>
        <div className="boxen">
          <div className="inner-boxen">
            <img
              className="profilbild"
              src={introdata.your_img_url} // Make sure this path is correct
              alt="ProfilePicture"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
