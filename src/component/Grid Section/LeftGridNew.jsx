import React from "react";
import faceimg from "../../images/face-1.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import html from "../../images/icons8-html-240.png";
import css from "../../images/icons8-css-240.png";
import Boostrap from "../../images/icons8-bootstrap-240.png";
import javascript from "../../images/icons8-javascript-240.png";
import laravel from "../../images/icons8-laravel-96.png";
import sharpe from "../../images/c-sharp.png";
import dart from "../../images/icons8-dart-240.png";
import flutter from "../../images/icons8-flutter-240.png";
import java from "../../images/icons8-java-240.png";
import php from "../../images/icons8-php-logo-80.png";
import python from "../../images/icons8-python-240.png";
import typescript from "../../images/icons8-typescript-240.png";
import ASP from "../../images/aspdotnet.png";
import express from "../../images/express.png";
import nest from "../../images/nestjs-icon.png";
import next from "../../images/nextjs.256x256.png";
import flask from "../../images/flask.png";
import docker from "../../images/docker.png";
import grapql from "../../images/grapgql.png";

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
          <div className="middle-pro" style={{ padding: "2.5vh" }}>
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
                  <img src={flutter} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginLeft: "" }}
                    className="text-center"
                  >
                    Flutter
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div class="flex-wrapper">
                <div class="single-chart">
                  <img src={ASP} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    ASP.NET Core
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
                  <img src={javascript} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Java script
                  </p>
                </div>

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
                  <img src={express} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginLeft: "" }}
                    className="text-center"
                  >
                    Express .js
                  </p>
                </div>

                <div class="single-chart">
                  <img src={nest} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Nest.js
                  </p>
                </div>

                <div class="single-chart">
                  <img src={flask} alt="" style={{ width: "70px" }} />
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
                  <img src={Boostrap} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginLeft: "" }}
                    className="text-center"
                  >
                    Bootstrap
                  </p>
                </div>

                <div class="single-chart">
                  <img src={next} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Next.js
                  </p>
                </div>

                <div class="single-chart">
                  <img src={docker} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Docker
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div class="flex-wrapper">
                <div class="single-chart">
                  <img src={grapql} alt="" style={{ width: "70px" }} />
                  <p
                    style={{ color: "#fff", marginRight: "" }}
                    className="text-center"
                  >
                    Grapgql
                  </p>
                </div>
              </div>
            </div>

            <hr style={{ color: "darkgrey" }} />
            <div className="listpro " style={{ color: "darkgrey" }}>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Proficient in Firebase for real-time databases, authentication,
                and cloud functions.
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Experienced with Supabase for building scalable, real-time
                applications.
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Skilled in working with GraphQL for efficient API development
                and data querying.
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Competent in Hasura for instant GraphQL APIs over databases.
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Proficient in using Linux for server administration and
                development tasks.
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Expertise in Git for version control and collaborative software
                development.
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Familiar with Postman for API testing and documentation.
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Proficient in Figma for UI/UX design and collaboration.
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Skilled in Power BI for data visualization and business
                intelligence.
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Competent in Cisco Packet Tracer for network simulation and
                configuration.
              </p>
              <p>
                {" "}
                <FaCheck style={{ color: "#e3882d", marginRight: "4px" }} />
                Proficient in using Sentry for error tracking and debugging in
                Flutter applications.
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
