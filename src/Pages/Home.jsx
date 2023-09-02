import React from "react";
import image from "../images/mountain.jpg";
import facemain from "../images/face-2.png";
import { Link } from "react-router-dom";
import LeftGrid from "../component/Grid Section/LeftGrid";
import LeftGridNew from "../component/Grid Section/LeftGridNew";
import "../component/History.css";

function Home() {
  return (
    <div>
      <div className="header-bar">
        <nav className="headernav">
          <ul>
            <li style={{ color: "#fff" }}>
              <Link
                to="/"
                style={{ textDecoration: "none", color: " #FFC107" }}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: " #FFC107" }}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                style={{ textDecoration: "none", color: " #FFC107" }}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="  main-bar">
        <div className="row grid-container">
          {/*---------------------------------
             -----Left Grid Section-------- 
             -----------------------------------*/}

          <div className=" col-lg-3 col-1">
            <div className="left ">
              <LeftGrid />
            </div>
            <div className="leftnew">
              <LeftGridNew />
            </div>
          </div>

          <div className="middle col-lg-9 col-10">
            <div className="main-image">
              <img src={image} style={{ height: "65vh", width: "100%" }} />
            </div>

            <div className="middle-top">
              <div className="top-image">
                <img
                  src={image}
                  alt=""
                  style={{ height: "53vh", width: "100%" }}
                />
              </div>
              <img
                src={facemain}
                alt=""
                className="main-topimage"
                style={{ height: "65vh", width: "" }}
              />
              <h1>
                Hello !!
                <br />
                I'm Supun Nilakshana,
              </h1>

              {/*---------------------------------
             -----Perform Section-------- 
             -----------------------------------*/}

              <div
                className=" row perform "
                style={{ marginTop: "35vh" }}
              ></div>

              {/*---------------------------------
             -----Education Section-------- 
             -----------------------------------*/}

              <h5 className="maintopic">Education</h5>

              <div className="row">
                <div
                  className=" mx-auto d-block history"
                  style={{
                    width: "65vh",
                    padding: "30px",
                    marginBottom: "2vh",
                  }}
                >
                  <h6 className="tit">
                    Sabaragamuwa University Of Sri Lanka-Computing And
                    Information Systems(CIS)
                  </h6>
                  <p className="small-text text-muted">Undergraduate</p>

                  <p className="pr">
                    I am an undergraduate from the Department of Computing and
                    Information Systems at the Faculty of Computing,
                    Sabaragamuwa University of Sri Lanka.
                  </p>
                  {/* <a href="#" class="linkh">
                  MORE
                </a> */}
                </div>

                <div
                  className=" mx-auto d-block history"
                  style={{
                    width: "65vh",
                    padding: "30px",
                    marginBottom: "2vh",
                  }}
                >
                  <h6 className="tit mb-3">
                    ESOFT Metro Campus-Diploma in Software Engineering (DiSE)
                  </h6>
                  <p
                    className="small-text text-center mt-1"
                    style={{
                      backgroundColor: "#e3882d",
                      width: "100px",
                      borderRadius: "20px",
                    }}
                  >
                    Completed
                  </p>
                  {/* <button className="btnh text-muted">jan 2020-jan 2021</button> */}
                  <p className="pr">
                    This Diploma will provide the student with hands-on
                    knowledge in software engineering concepts, analysis,
                    designing, project management, testing, and development with
                    practical programming environments including java and C#.
                  </p>
                </div>
              </div>

              {/*---------------------------------
             -----MyService Section-------- 
             -----------------------------------*/}

              <h5 className="maintopic">My Services</h5>
              <div className="row" style={{ marginBottom: "3vh" }}>
                <div
                  className="   mx-auto d-block hi"
                  style={{ marginBottom: "2vh" }}
                >
                  <h6 className="subtopic">Mobile Development</h6>
                  <p className="content text-muted">
                    I can develop the mobile application with best performance
                    and very smoothly for your organization.
                  </p>
                </div>

                <div
                  className="  mx-auto d-block hi "
                  style={{ marginBottom: "2vh" }}
                >
                  <h6 className="subtopic">Web Development</h6>
                  <p className="content text-muted">
                    I can develop the web application with best performance and
                    very smoothly for your organization.
                  </p>
                </div>
                <div
                  className=" mx-auto d-block hi "
                  style={{ marginBottom: "2vh" }}
                >
                  <h6 className="subtopic">Desktop Development</h6>
                  <p className="content text-muted">
                    I can develop the desktop application with best performance
                    and very smoothly for your organization.
                  </p>
                </div>
              </div>

              {/*---------------------------------
             -----Footer Section-------- 
             -----------------------------------*/}

              <div
                className="main-footer"
                style={{ color: "darkgrey ", paddingTop: "2.5vh" }}
              >
                <p className="dini text-muted text-center mx-auto d-block">
                  © 2023 All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
