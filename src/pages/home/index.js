import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, CV } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

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
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
              }}
            />
          </h1>
          <p className="mb-1x">{introdata.description}</p>
          <div className="intro_btn-action pb-3">
            <Link to="/portfolio">
              <div id="button_p" className="ac_btn btn">
                My Portfolio
              </div>
            </Link>
            <Link to="/about">
              <div id="button_h" className="ac_btn btn">
                About Moi
              </div>
            </Link>
            <div
              className="ac_btn btn"
              id="button_c"
              onClick={() => setShowModal(true)}
            >
              Download CV
            </div>

            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <div className="modal-X">
                    <span className="close" onClick={() => setShowModal(false)}>
                      &times;
                    </span>
                  </div>
                  <div className="modal-header">
                    <p>Select the version of the CV you want to download:</p>
                  </div>
                  <div className="modal-body">
                    <a
                      href={CV.cvenglish}
                      download="Ahmed_Sharif_CV_ENGLISH.pdf"
                    >
                      <div className="ac_btn btn">Download English Version</div>
                    </a>
                    <a
                      href={CV.cvswedish}
                      download="Ahmed_Sharif_CV_SWEDISH.pdf"
                    >
                      <div className="ac_btn btn">Download Swedish Version</div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="boxen">
          <div className="inner-boxen">
            <img
              className="profilbild"
              src={introdata.your_img_url} // Make sure this path is correct
              alt="ProfilePicture"
            />
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
