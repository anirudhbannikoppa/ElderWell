import React from "react";
import trainer from "../assets/img/start.png";
import { useNavigate } from "react-router-dom";
import "../styles/start.css";

const Start = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/records");
  };

  return (
    <section>
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={trainer}
              alt="err"
              data-aos-duration="1500"
              data-aos="fade-left"
            />
          </div>

          <div
            className="start__content"
            data-aos-duration="1100"
            data-aos="fade-right"
          >
            <h2 className="section__title">
              Ready to Take a Step Toward{" "}
              <span className="highlights"> Wellness?</span>
            </h2>
            <p>
              Making small, steady steps in managing your health starts with
              staying organized. With ElderWell, you can safely store and access
              your medical reports, prescriptions, and health records all in one
              place. Whether you're preparing for a doctor visit or keeping
              track of long-term health, we're here to support you every step of
              the way. Stay informed, stay secure—and take control of your
              wellness journey today.
            </p>
            <button onClick={handleGetStarted} className="register__btn">
              Track My Health
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
