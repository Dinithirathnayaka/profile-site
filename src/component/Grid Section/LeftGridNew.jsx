import React from "react";
import faceimg from "../../images/face-1.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import html from "../../images/html-5.png";
import css from "../../images/css-3.png";
import Boostrap from "../../images/boostrap.png";
import javascript from "../../images/java-script.png";
import react from "../../images/library.png";
import laravel from "../../images/laravel.png";
import sharpe from "../../images/c-sharp.png";
import dart from "../../images/icons8-dart-240.png";
import flutter from "../../images/icons8-flutter-240.png";
import java from "../../images/icons8-java-240.png";
import php from "../../images/icons8-php-logo-80.png";
import python from "../../images/icons8-python-240.png";
import typescript from "../../images/icons8-typescript-240.png";

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
              </div>
              <div
                className="col-6 text-muted text-end"
                style={{ color: "darkgrey" }}
              >
                <p>Sri Lanka</p>
                <p>Kurunegala</p>
              </div>
            </div>
            <hr style={{ color: "darkgrey" }} />

            <div>
              <div class="flex-wrapper">
                <div class="single-chart">
                  <img src={sharpe} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginLeft: "" }}
                    className="text-center"
                  >
                    C#
                  </p>
                </div>

                <div class="single-chart">
                  <img src={dart} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Dart
                  </p>
                </div>

                <div class="single-chart">
                  <img src={javascript} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Java script
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div class="flex-wrapper">
                <div class="single-chart">
                  <img src={typescript} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginLeft: "" }}
                    className="text-center"
                  >
                    Type Script
                  </p>
                </div>

                <div class="single-chart">
                  <img src={java} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Java
                  </p>
                </div>

                <div class="single-chart">
                  <img src={php} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    PHP
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div class="flex-wrapper">
                <div class="single-chart">
                  <img src={python} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginLeft: "" }}
                    className="text-center"
                  >
                    Python
                  </p>
                </div>

                <div class="single-chart">
                  <img src={html} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    HTML
                  </p>
                </div>

                <div class="single-chart">
                  <img src={css} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    CSS
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div class="flex-wrapper">
                <div class="single-chart">
                  <img src={flutter} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginLeft: "" }}
                    className="text-center"
                  >
                    Flutter
                  </p>
                </div>

                <div class="single-chart">
                  <img src={html} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    ASP.NET Core
                  </p>
                </div>

                <div class="single-chart">
                  <img src={laravel} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Laravel
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div class="flex-wrapper">
                <div class="single-chart">
                  <img src={flutter} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginLeft: "" }}
                    className="text-center"
                  >
                    Express .js
                  </p>
                </div>

                <div class="single-chart">
                  <img src={html} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Nest.js
                  </p>
                </div>

                <div class="single-chart">
                  <img src={laravel} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Flask
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div class="flex-wrapper">
                <div class="single-chart">
                  <img src={Boostrap} alt="" style={{ width: "90px" }} />
                  <p
                    style={{ color: "#fff", marginLeft: "" }}
                    className="text-center"
                  >
                    Bootstrap
                  </p>
                </div>

                <div class="single-chart">
                  <img src={html} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Nest.js
                  </p>
                </div>

                <div class="single-chart">
                  <img src={laravel} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Flask
                  </p>
                </div>
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
