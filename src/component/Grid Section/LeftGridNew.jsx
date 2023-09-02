import React from "react";
import faceimg from "../../images/face-1.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

function LeftGridNew() {
  return (
    <div>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <div class="menu__box">
          <div className="profile text-center menu__item">
            <img
              src={faceimg}
              alt=""
              style={{ height: "15vh", width: "15vh" }}
            />

            <h6 className="text-cenetr">Supun Nilakshana Rajaguru</h6>
            <p style={{ color: "#fff" }}>Full stack Developer </p>
            <p className="">
              {" "}
              Undergraduate in BSc Hons <br />
              in Computing and Information Systems
            </p>
          </div>
          {/*---------------------------------
                    -----Left Grid Middle Section--------
                    -----------------------------------*/}
          <div className="middle-pro menu__item" style={{ padding: "2.5vh" }}>
            <div className="row" style={{ color: "#fff", fontWeight: "bold" }}>
              <div className="col-6">
                <p>Recidence:</p>
                <p>City:</p>
                <p>Age:</p>
              </div>
              <div
                className="col-6 text-muted text-end"
                style={{ color: "darkgrey" }}
              >
                <p>Sri Lanka</p>
                <p>Kurunegala</p>
                <p>23</p>
              </div>
            </div>
            <hr style={{ color: "darkgrey" }} />

            <div>
              <div class="flex-wrapper">
                <div class="single-chart"></div>

                <div class="single-chart"></div>

                <div class="single-chart"></div>
              </div>

              <div className="name">
                <p style={{ color: "#fff", marginLeft: "" }}>Flutter</p>
                <p style={{ color: "#fff", marginRight: "" }}>.Net Core</p>
                <p style={{ color: "#fff", marginRight: "" }}>React</p>

                {/* <p style={{ color: "#fff" }}>Spanish</p> */}
              </div>
            </div>
            <hr style={{ color: "darkgrey" }} />

            <hr style={{ color: "darkgrey" }} />
            <div className="listpro " style={{ color: "darkgrey" }}>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Backend Services(MS SQL, MYSQL) Knowlwdge
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Firebase Knowledge
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                GIT Knowledge
              </p>
            </div>

            <hr style={{ color: "darkgrey" }} />
            <div
              className="linkN text-muted"
              style={{
                color: "darkgrey",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            ></div>
          </div>

          {/*---------------------------------
                    -----Left Grid Footer Section--------
                    -----------------------------------*/}
          <div className="footer-pro menu__item">
            <div className="pro-icon">
              <a
                href="http://www.linkedin.com/in/supun-nilakshana-916129202"
                style={{ color: "darkgrey" }}
              >
                <FaLinkedin className="iconf" />
              </a>

              <a
                href="https://www.facebook.com/supun.nilakshana.5"
                style={{ color: "darkgrey" }}
              >
                <FaFacebook className="iconf" />
              </a>
              <a
                href="https://github.com/supunnilakshana"
                style={{ color: "darkgrey" }}
              >
                <FaGithub className="iconf" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftGridNew;
