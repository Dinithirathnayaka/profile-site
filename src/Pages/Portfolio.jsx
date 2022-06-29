import React from "react";
import image from "../images/mountain.jpg";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import facemain from "../images/face-2.png";
import { BiChevronRight } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
//import { BiMenu } from "react-icons/bi";
import faceone from "../images/face-2.jpg";
import facetwo from "../images/face-3.jpg";
import spoone from "../images/1.png";
import spotwo from "../images/2.png";
import spothree from "../images/3.png";
import LeftGrid from "../component/Grid Section/LeftGrid";
import "../component/Portfolio.css";

function Portfolio() {
  return (
    <div>
      <div className="grid-container">
        {/*---------------------------------
             -----Left Grid Section-------- 
             -----------------------------------*/}
        <div className="left">
          <LeftGrid />
        </div>

        <div className="middle">
          <div className="main-image">
            <img src={image} style={{ height: "65vh", width: "100%" }} />
          </div>

          <div className="middle-top">
            {/*---------------------------------
             -----All Catogories-------- 
             -----------------------------------*/}

            <div className="row cato">
              <h5
                className="maintopic"
                style={{
                  marginTop: "3vh",
                }}
              >
                All Catogories
              </h5>
              <div className="col-4 example mx-auto d-block ">
                <figure>
                  <img
                    src={img1}
                    alt=""
                    style={{
                      height: "45vh",
                      width: "60vh",

                      marginBottom: " 5vh",
                    }}
                  />
                </figure>
                <div class="fadedbox">
                  <div class="title ">
                    <h5 className="maintopic">Project Title</h5>
                    <p className="text-muted para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolore, aliquid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 mx-auto d-block example">
                <figure>
                  <img
                    src={img2}
                    alt=""
                    style={{
                      height: "45vh",
                      width: "60vh",

                      marginBottom: " 5vh",
                    }}
                  />
                </figure>
                <div class="fadedbox">
                  <div class="title ">
                    <h5 className="maintopic">Project Title</h5>
                    <p className="text-muted para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolore, aliquid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 mx-auto d-block example">
                <figure>
                  <img
                    src={img3}
                    alt=""
                    style={{
                      height: "45vh",
                      width: "60vh",

                      marginBottom: " 5vh",
                    }}
                  />
                </figure>
                <div class="fadedbox">
                  <div class="title ">
                    <h5 className="maintopic">Project Title</h5>
                    <p className="text-muted para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolore, aliquid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 mx-auto d-block example">
                <figure>
                  <img
                    src={img4}
                    alt=""
                    style={{
                      height: "45vh",
                      width: "60vh",

                      marginBottom: " 5vh",
                    }}
                  />
                </figure>
                <div class="fadedbox">
                  <div class="title ">
                    <h5 className="maintopic">Project Title</h5>
                    <p className="text-muted para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolore, aliquid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 mx-auto d-block example">
                <figure>
                  <img
                    src={img5}
                    alt=""
                    style={{
                      height: "45vh",
                      width: "60vh",

                      marginBottom: " 5vh",
                    }}
                  />
                </figure>
                <div class="fadedbox">
                  <div class="title ">
                    <h5 className="maintopic">Project Title</h5>
                    <p className="text-muted para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolore, aliquid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 mx-auto d-block example">
                <figure>
                  <img
                    src={img6}
                    alt=""
                    style={{
                      height: "45vh",
                      width: "60vh",

                      marginBottom: " 5vh",
                    }}
                  />
                </figure>
                <div class="fadedbox">
                  <div class="title ">
                    <h5 className="maintopic">Project Title</h5>
                    <p className="text-muted para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolore, aliquid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 mx-auto d-block example">
                <figure>
                  <img
                    src={img7}
                    alt=""
                    style={{
                      height: "45vh",
                      width: "60vh",

                      marginBottom: " 5vh",
                    }}
                  />
                </figure>
                <div class="fadedbox">
                  <div class="title ">
                    <h5 className="maintopic">Project Title</h5>
                    <p className="text-muted para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolore, aliquid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 mx-auto d-block example">
                <figure>
                  <img
                    src={img8}
                    alt=""
                    style={{
                      height: "45vh",
                      width: "60vh",

                      marginBottom: " 5vh",
                    }}
                  />
                </figure>

                <div class="fadedbox">
                  <div class="title ">
                    <h5 className="maintopic">Project Title</h5>
                    <p className="text-muted para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolore, aliquid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4 mx-auto d-block example">
                <figure>
                  <img
                    src={img2}
                    alt=""
                    style={{
                      height: "45vh",
                      width: "60vh",

                      marginBottom: " 5vh",
                    }}
                  />
                </figure>
                <div class="fadedbox">
                  <div class="title ">
                    <h5 className="maintopic">Project Title</h5>
                    <p className="text-muted para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Dolore, aliquid.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*---------------------------------
             -----Sponcer Section-------- 
             -----------------------------------*/}

            <div className="row Sponcer">
              <div className="col-3">
                {" "}
                <img
                  src={spoone}
                  alt=""
                  style={{ height: "25vh", width: "25vh" }}
                />
              </div>
              <div className="col-3">
                {" "}
                <img
                  src={spotwo}
                  alt=""
                  style={{ height: "25vh", width: "25vh" }}
                />
              </div>
              <div className="col-3">
                {" "}
                <img
                  src={spothree}
                  alt=""
                  style={{ height: "25vh", width: "25vh" }}
                />
              </div>
              <div className="col-3">
                {" "}
                <img
                  src={spoone}
                  alt=""
                  style={{ height: "25vh", width: "25vh" }}
                />
              </div>
            </div>
            {/*---------------------------------
             -----Footer Section-------- 
             -----------------------------------*/}

            <div className="main-footer" style={{ color: "darkgrey " }}>
              <p>© 2021 Artur Carter</p>
              <p style={{ marginLeft: "75vh " }}>
                Template author: Dinithi Rathnayake
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

export default Portfolio;
