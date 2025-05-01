import React from "react";
import "../styles/exercise.css";
import lunges from "../assets/img/lunges.png";
import yoga from "../assets/img/yoga-pose.png";
import ex from "../assets/img/extended.png";

const Exercise = () => {
  return (
    <section>
      <div className="container exercise__top">
        <div className="exercise__top">
          <h2 className="section__title">
            🌿 What <span className="highlights">ElderWell</span> Can Help You
            With
          </h2>
          <p>
            We believe that wellness is more than just exercise — it’s about
            feeling good,
            <br /> staying safe, and staying connected.
          </p>
        </div>
        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos-duration="1500"
            data-aos="zoom-in"
          >
            <span className="exercise__icon">
              <img src={lunges} alt="err" />
            </span>

            <div className="exercise__content">
              <h4> Health & Care</h4>
              <p>
                Keep track of medical info, find nearby hospitals, and access
                health tips.
              </p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos-duration="1500"
            data-aos="zoom-in"
          >
            <span className="exercise__icon">
              <img src={yoga} alt="err" />
            </span>

            <div className="exercise__content">
              <h4>Mind & Movement</h4>
              <p>
                Gentle activities, stress relief techniques, and routines for
                better sleep and flexibility.
              </p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos-duration="1500"
            data-aos="zoom-in"
          >
            <span className="exercise__icon">
              <img src={ex} alt="err" />
            </span>

            <div className="exercise__content">
              <h4>Daily Life Support</h4>
              <p>
                Helpful resources for nutrition, safety, caregiving, and
                emotional well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercise;
