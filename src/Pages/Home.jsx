import React from "react";
import image from "../images/mountain.jpg";
import facemain from "../images/face-2.png";

import LeftGrid from "../component/Grid Section/LeftGrid";
import LeftGridNew from "../component/Grid Section/LeftGridNew";
import "../component/History.css";

function Home() {
  return (
    <div>
      <div className=" row main-bar">
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

        <div className="middle col-lg-9 col-11">
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

            {/* <div className="profile-details-role">
              <span className="primary-text">
                <h1>
                  <code>
                    {" "}
                    I build
                    <typical>
                      loop={Infinity}
                      steps=
                      {[
                        "ios and android applications.",
                        1000,
                        "design mocups.",
                        1000,
                        "web interfaces.",
                        1000,
                        "automation tools.",
                        1000,
                      ]}
                    </typical>
                  </code>
                </h1>
              </span>
            </div> */}
            {/* <button type="button" className="btnm">
              WELCOME
            </button> */}

            {/*---------------------------------
             -----Perform Section-------- 
             -----------------------------------*/}

            <div className=" row perform " style={{ marginTop: "35vh" }}>
              {/* <div className="col-4 percol">
                <div className="num">10 +</div>
                <p>Years Experience</p>
              </div> */}
              {/* <div className="col-4 percol">
                <div className="num">143</div>
                <p>
                  Completed <br />
                  Projects
                </p>
              </div> */}
            </div>

            {/*---------------------------------
             -----Education Section-------- 
             -----------------------------------*/}

            <h5 className="maintopic">Education</h5>

            <div className="row">
              <div
                className=" mx-auto d-block history"
                style={{ width: "65vh", padding: "30px", marginBottom: "2vh" }}
              >
                <h6 className="tit">
                  Sabaragamuwa University Of Sri Lanka-Computing And Information
                  Systems(CIS)
                </h6>
                <p className="small-text text-muted">Undergraduate</p>
                <button className="btnh text-muted">oct 2019-oct 2024</button>
                <p className="pr">
                  The Department of Computing and Information Systems (DCIS) at
                  the Faculty of Applied Sciences, Sabaragamuwa University of
                  Sri Lanka was established in 2011 while the BScHons Degree
                  Programme in Computing and Information Systems was initiated
                  back in 2008.
                </p>
                {/* <a href="#" class="linkh">
                  MORE
                </a> */}
              </div>

              <div
                className=" mx-auto d-block history"
                style={{ width: "65vh", padding: "30px", marginBottom: "2vh" }}
              >
                <h6 className="tit">
                  ESOFT Metro Campus-Diploma in Software Engineering (DiSE)
                </h6>
                <p className="small-text text-muted">Student</p>
                {/* <button className="btnh text-muted">jan 2020-jan 2021</button> */}
                <p className="pr">
                  This Diploma will provide the student with hands-on knowledge
                  in software engineering concepts, analysis, designing, project
                  management, testing, and development with practical
                  programming environments including java and C#.
                </p>
                <a href="#" class="linkh">
                  MORE
                </a>
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
                  I can develop the mobile application with best performance and
                  very smoothly for your organization.
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
              <p style={{ paddingLeft: "5%" }} className="dini text-muted">
                © 2022 All rights reserved.
              </p>
            </div>
          </div>
        </div>
        {/*---------------------------------
             -----Right Grid Section-------- 
             -----------------------------------*/}

        <div className="right">
          {/* <div className="tog-icon">
            <BiMenu className="iconm" />
          </div>
          <div className="main-menu"></div>
          <div className="div-lang">
            <div className="fr">FR</div>
            <div className="en">EN</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
