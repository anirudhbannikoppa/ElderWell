import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";
import heroImg from "../assets/img/hero.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/aichat");
  };

  return (
    <section id="#">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2
              className="section__title"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              Stay Active, Stay <span className="highlights">Healthy</span> with
              ElderWell
            </h2>
            <p data-aos-duration="1100" data-aos="fade-up" data-aos-delay="100">
              Your Wellness, Our Priority at ElderWell
              <br />
              <br />
              ElderWell is your trusted companion for aging well. Whether it's
              staying active, managing your health, finding nearby care, or
              simply learning something new — we’re here to support your full
              well-being every step of the way.
              <br /> <br />
              Let’s take the first step and ask out Ai-Assistant about your
              health.
            </p>

            <div
              className="hero__btns"
              data-aos-duration="1200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button className="register__btn" onClick={handleGetStarted}>
                Get Started
              </button>
            </div>
          </div>

          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img className="heroposter" src={heroImg} alt="err" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
