import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Portfolio | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container className="About-header">
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 text-center "> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-center" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <Image
                  src={data.img}
                  alt="different jobs"
                  loading="lazy"
                  width={500}
                  height={300}
                />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    View project
                  </a>
                  {data.github && (
                    <a
                      href={data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  )}
                  {data.description2 && <p>{data.description2}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};
