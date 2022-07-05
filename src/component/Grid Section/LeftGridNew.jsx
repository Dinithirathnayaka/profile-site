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
            <p>Full stack Developer </p>
            <p>
              {" "}
              Undergraduate in BSc Hons in Computing and Information Systems
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
                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                    <path
                      class="circle"
                      stroke-dasharray="85, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      85%
                    </text>
                  </svg>
                </div>

                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                    <path
                      class="circle"
                      stroke-dasharray="75, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      75%
                    </text>
                  </svg>
                </div>

                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart green">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray="70, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      70%
                    </text>
                  </svg>
                </div>
              </div>

              <div className="name">
                <p style={{ color: "#fff", marginLeft: "" }}>Flutter</p>
                <p style={{ color: "#fff", marginRight: "" }}>.Net Core</p>
                <p style={{ color: "#fff", marginRight: "" }}>React</p>

                {/* <p style={{ color: "#fff" }}>Spanish</p> */}
              </div>
            </div>
            <hr style={{ color: "darkgrey" }} />
            <div>
              <ProgressBar
                completed={85}
                className="wrapper1"
                barContainerClassName="container1"
                completedClassName="barCompleted1"
                labelClassName="label1 "
              />
              <p className="bottomN">Java</p>

              <ProgressBar
                completed={80}
                className="wrapper2"
                barContainerClassName="container2"
                completedClassName="barCompleted2"
                labelClassName="label2"
              />
              <p className="bottomN">Python</p>

              <ProgressBar
                completed={80}
                className="wrapper3"
                barContainerClassName="container3"
                completedClassName="barCompleted3"
                labelClassName="label3"
              />
              <p className="bottomN">Dart</p>

              <ProgressBar
                completed={75}
                className="wrapper4"
                barContainerClassName="container4"
                completedClassName="barCompleted4"
                labelClassName="label4"
              />
              <p className="bottomN">C#</p>

              <ProgressBar
                completed={90}
                className="wrapper4"
                barContainerClassName="container4"
                completedClassName="barCompleted4"
                labelClassName="label4"
              />
              <p className="bottomN">Html</p>

              <ProgressBar
                completed={80}
                className="wrapper4"
                barContainerClassName="container4"
                completedClassName="barCompleted4"
                labelClassName="label4"
              />
              <p className="bottomN">Css</p>

              <ProgressBar
                completed={75}
                className="wrapper4"
                barContainerClassName="container4"
                completedClassName="barCompleted4"
                labelClassName="label4"
              />
              <p className="bottomN">Java Script</p>
            </div>
            <hr style={{ color: "darkgrey" }} />
            <div className="listpro text-muted" style={{ color: "darkgrey" }}>
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
              <a href="http://www.linkedin.com/in/supun-nilakshana-916129202">
                <FaLinkedin className="iconf" />
              </a>
              <a href="https://www.facebook.com/supun.nilakshana.5">
                <FaFacebook className="iconf" />
              </a>
              <a href="https://github.com/supunnilakshana">
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
