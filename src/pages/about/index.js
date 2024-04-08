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
import {
  faScroll,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
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
            <h1 className="display-4 mb-4">About me</h1>
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
          <Col lg="5">
            <h3>Technologies I Use:</h3>
          </Col>

          <Col lg="7">
            <div className="icon-container">
              <FontAwesomeIcon
                icon={faHtml5}
                className="icon icon-html icon-rotate"
              />
              <FontAwesomeIcon
                icon={faCss3}
                className="icon icon-css icon-scale"
              />
              <FontAwesomeIcon
                icon={faJs}
                className="icon icon-js icon-bounce"
              />
              <FontAwesomeIcon
                icon={faReact}
                className="icon icon-react icon-rotate"
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
                className="icon icon-github icon-scale"
              />
              <FontAwesomeIcon
                icon={faNpm}
                className="icon icon-npm icon-bounce"
              />
              <FontAwesomeIcon
                icon={faTrello}
                className="icon icon-trello icon-rotate"
              />
              <FontAwesomeIcon
                icon={faFigma}
                className="icon icon-figma icon-scale"
              />
              <FontAwesomeIcon
                icon={faYarn}
                className="icon icon-yarn icon-rotate"
              />
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
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
