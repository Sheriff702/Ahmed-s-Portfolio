import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { introdata, meta, CV } from "../../content_option";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <section id="home" className="home">
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
            <Link href="/portfolio">
              <div id="button_p" className="ac_btn btn">
                My Portfolio
              </div>
            </Link>
            <Link href="/about">
              <div id="button_h" className="ac_btn btn">
                About Moi
              </div>
            </Link>
            {!!(CV.cvenglish || CV.cvswedish) && (
              <div>
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
                        <span
                          className="close"
                          onClick={() => setShowModal(false)}
                        >
                          &times;
                        </span>
                      </div>
                      <div className="modal-header">
                        <p>
                          Select the version of the CV you want to download:
                        </p>
                      </div>
                      <div className="modal-body">
                        {[
                          {
                            href: CV.cvenglish,
                            label: "English",
                            filename: "Ahmed_Sharif_CV_ENGLISH.pdf",
                          },
                          {
                            href: CV.cvswedish,
                            label: "Swedish",
                            filename: "Ahmed_Sharif_CV_SWEDISH.pdf",
                          },
                        ]
                          .filter((cv) => Boolean(cv.href))
                          .map((cv) => (
                            <a
                              key={cv.label}
                              href={cv.href}
                              download={cv.filename}
                            >
                              <div className="ac_btn btn">{`Download ${cv.label} Version`}</div>
                            </a>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="boxen">
          <div className="inner-boxen">
            <Image
              className="profilbild"
              src={introdata.your_img_url} // Make sure this path is correct
              alt="ProfilePicture"
            />
          </div>
        </div>
      </section>
    </>
  );
};
