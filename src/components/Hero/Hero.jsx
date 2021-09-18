import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, location } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowMain(true);
    }, 1500);
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <div className="hero-left-triangle" />
        <div className="hero-initials">KR</div>
        {showMain && (
          <>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={200} distance="30px">
              <h1 className="hero-title">
                {title || `Hi there, I'm`}{' '}
                <span className="text-color-main">{name || 'Your Name'}</span>
                <br />
                {subtitle || "I'm the Unknown Developer."}
              </h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={200} distance="30px">
              <p className="hero-location">
                <i className="fa fa-map-marker" />
                <span>{location || 'Somewhere'}</span>
              </p>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="about" smooth duration={1000}>
                    {cta || 'Know more'}
                  </Link>
                </span>
              </p>
            </Fade>
          </>
        )}
        <div className="hero-right-triangle" />
      </Container>
    </section>
  );
};

export default Header;
