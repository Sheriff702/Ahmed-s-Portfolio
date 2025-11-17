import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const technologies = [
  { label: "HTML & CSS", color: "#FF6B6B" },
  { label: "JavaScript", color: "#FFD166" },
  { label: "React", color: "#4ECDC4" },
  { label: "React Native", color: "#1A535C" },
  { label: "Node.js", color: "#6BCB77" },
  { label: "Next.js", color: "#2F2F2F" },
  { label: "Express.js", color: "#495057" },
  { label: "Bootstrap", color: "#7952B3" },
  { label: "Tailwind CSS", color: "#0EA5E9" },
  { label: "Git", color: "#F25F5C" },
  { label: "GitHub", color: "#24292E" },
  { label: "npm", color: "#CC2936" },
  { label: "Yarn", color: "#2A9D8F" },
  { label: "PostgreSQL", color: "#336791" },
  { label: "Postman", color: "#FF6C37" },
  { label: "SEO", color: "#FFC300" },
  { label: "Trello", color: "#0079BF" },
  { label: "Figma", color: "#A259FF" },
  { label: "Swift", color: "#F05340" },
  { label: "Kotlin", color: "#8A4FFF" },
];

export const About = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>About | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container className="About-header">
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
            <Row>
              {skills.map((data, i) => {
                const color = getRandomColor();
                return (
                  <Col lg="6" key={i} className="skill-section">
                    <h3
                      className="skill-title"
                      style={{
                        color: color, // Apply the generated color
                      }}
                    >
                      {data.name}
                    </h3>
                    <p className="skill-description">{data.description}</p>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3>Technologies I Use:</h3>
          </Col>

          <Col lg="7">
            <div className="tech-chip-container">
              {technologies.map((tech) => (
                <span
                  key={tech.label}
                  className="tech-chip"
                  style={{ backgroundColor: tech.color, color: "#fff" }}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top gap-3">
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
    </>
  );
};
