import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col lg={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <figure>
                  <AboutImg alt="vienna skyline" filename={img} />
                  <figcaption className="photo-credit">
                    Photo by{' '}
                    <a href="https://unsplash.com/@anikinearthwalker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                      Dimitry Anikin
                    </a>{' '}
                    on{' '}
                    <a href="https://unsplash.com/s/photos/vienna-austria?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                      Unsplash
                    </a>
                  </figcaption>
                </figure>
              </div>
            </Fade>
          </Col>
          <Col lg={6} sm={12}>
            <Fade bottom duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                {paragraphOne && <p className="about-wrapper__info-text">{paragraphOne}</p>}
                {paragraphTwo && <p className="about-wrapper__info-text">{paragraphTwo}</p>}
                {paragraphThree && <p className="about-wrapper__info-text">{paragraphThree}</p>}
              </div>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <div className="about-wrapper__info-bottom">
              <p className="about-wrapper__info-bottom-locations">
                Originally from New York <br />
                Now happily living in Vienna, Austria
              </p>
              {resume && (
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={resume}
                  >
                    Resume
                  </a>
                </span>
              )}
            </div>
          </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default About;
