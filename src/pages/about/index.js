import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Postgree from "./../../assets/images/postgresql.png";
import Postman from "./../../assets/images/postman.png";
import ExpressJS from "./../../assets/images/expressJS.png";
import BootStrap from "./../../assets/images/bootstrap.png";
import NextJS from "./../../assets/images/nextJS.png";
import tailwindCSS from "./../../assets/images/tailwindCSS.png";
import SEO from "./../../assets/images/SEO.png";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNode,
  faGit,
  faGithub,
  faNpm,
  faTrello,
  faFigma,
  faYarn,
} from "@fortawesome/free-brands-svg-icons";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About moi</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>
                {dataabout.aboutme}
                <br />
                <br />
                {dataabout.aboutme2}
                <br />
                <br />
                {dataabout.aboutme3}
                <br />
                <br />
                {dataabout.aboutme4}
              </p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              const color = getRandomColor();
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                        backgroundColor: color, // Apply the generated color
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3>Technologies I Use:</h3>
          </Col>

          <Col lg="7">
            <div className="icon-container">
              <FontAwesomeIcon
                icon={faHtml5}
                className="icon icon-html icon-rotate icon-side-to-side"
              />
              <FontAwesomeIcon
                icon={faCss3}
                className="icon icon-css icon-scale icon-side-to-side"
              />
              <FontAwesomeIcon
                icon={faJs}
                className="icon icon-js icon-bounce icon-side-to-side"
              />
              <FontAwesomeIcon
                icon={faReact}
                className="icon icon-react icon-rotate icon-side-to-side"
              />
              <FontAwesomeIcon
                icon={faNode}
                className="icon icon-node icon-side-to-side"
              />
              <FontAwesomeIcon
                icon={faGit}
                className="icon icon-git icon-side-to-side"
              />
              <FontAwesomeIcon
                icon={faGithub}
                className="icon icon-github icon-scale icon-side-to-side"
              />
              <FontAwesomeIcon
                icon={faNpm}
                className="icon icon-npm icon-bounce icon-side-to-side"
              />
              <FontAwesomeIcon
                icon={faTrello}
                className="icon icon-trello icon-rotate icon-side-to-side"
              />
              <FontAwesomeIcon
                icon={faFigma}
                className="icon icon-figma icon-scale icon-side-to-side"
              />
              <FontAwesomeIcon
                icon={faYarn}
                className="icon icon-yarn icon-rotate icon-side-to-side"
              />
              <img
                src={Postgree}
                className="icon custom-icon-class"
                alt="Custom Icon"
              />{" "}
              <img
                src={ExpressJS}
                className="icon custom-icon-class2"
                alt="Custom Icon"
              />
              <img
                src={Postman}
                className="icon custom-icon-class"
                alt="Custom Icon"
              />
              <img
                src={SEO}
                className="icon custom-icon-class2"
                alt="Custom Icon"
              />
              <img
                src={BootStrap}
                className="icon custom-icon-class4"
                alt="Custom Icon"
              />
              <img
                src={NextJS}
                className="icon custom-icon-class3"
                alt="Custom Icon"
              />
              <img
                src={tailwindCSS}
                className="icon custom-icon-class5"
                alt="Custom Icon"
              />
            </div>
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
