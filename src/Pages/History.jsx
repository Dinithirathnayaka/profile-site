import React from "react";
import image from "../images/mountain.jpg";
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
import "../component/History.css";

function History() {
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
             -----History Section-------- 
             -----------------------------------*/}

            <div className="row">
              <div className="col-6">
                <h5
                  className="maintopic"
                  style={{
                    marginTop: "3vh",
                  }}
                >
                  Education
                </h5>
              </div>

              <div className="col-6">
                <h5
                  className="maintopic"
                  style={{
                    marginTop: "3vh",
                  }}
                >
                  Work History
                </h5>
              </div>

              <div className="col-6 history">
                <h6 className="tit">University of toronto</h6>
                <p className="small-text text-muted">Student</p>
                <button className="btnh text-muted">jan 2020-jan 2021</button>
                <p className="pr">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maiores consequuntur iure delectus, sit repellendus
                  voluptatibus fugiat minus neque, obcaecati nemo rerum cum
                  blanditiis ipsam itaque magnam nam tempora magni. Nostrum.
                </p>
                <a href="#" class="linkh">
                  DIPLOME
                </a>
              </div>

              <div
                className="col-6 history"
                style={{
                  Height: "100vh",
                }}
              >
                <h6 className="tit"></h6>
                <p className="small-text text-muted"></p>
                <button className="btnh text-muted"> jan 2020-jan 2021</button>
                <p className="pr">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus, sunt?
                </p>
                <a href="#" class="linkh">
                  CERTIFICATE
                </a>
              </div>

              <div className="col-6 history">
                <h6 className="tit">Arter design school</h6>
                <p className="small-text text-muted">Student</p>
                <button className="btnh text-muted"> jan 2020-jan 2021</button>
                <p className="pr">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                  adipisci itaque repudiandae magni cumque hic, et eveniet quos
                  maiores minima!
                </p>
                <a href="#" class="linkh"></a>
              </div>

              <div className="col-6 history">
                <h6 className="tit"></h6>
                <p className="small-text text-muted"></p>
                <button className="btnh text-muted"> jan 2020-jan 2021</button>
                <p className="pr"></p>
                <a href="#" class="linkh"></a>
              </div>

              <div className="col-6 history">
                <h6 className="tit">Web developer courses</h6>
                <p className="small-text text-muted">Student</p>
                <button className="btnh text-muted">jan 2020-jan 2021</button>
                <p className="pr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  repellendus sequi nesciunt placeat iure quod aperiam. Sint
                  facilis quae velit cum molestias eius commodi cumque!
                </p>
                <a href="#" class="linkh">
                  CERTIFICATE
                </a>
              </div>

              <div className="col-6 history">
                <h6 className="tit"></h6>
                <p className="small-text text-muted"></p>
                <button className="btnh text-muted"> jan 2020-jan 2021</button>
                <p className="pr"></p>
                <a href="#" class="linkh"></a>
              </div>

              <div className="col-6 history">
                <h6 className="tit">Academy of Art University</h6>
                <p className="small-text text-muted">Student</p>
                <button className="btnh text-muted">jan 2020-jan 2021</button>
                <p className="pr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, facilis?
                </p>
                <a href="#" class="linkh">
                  LICENCE
                </a>
              </div>

              <div className="col-6 history">
                <h6 className="tit"></h6>
                <p className="small-text text-muted"></p>
                <button className="btnh text-muted"> jan 2020-jan 2021</button>
                <p className="pr"></p>
                <a href="#" class="linkh"></a>
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

            <div
              className="main-footer text-center mx-auto d-block"
              style={{ color: "darkgrey " }}
            >
              <p> © 2023 All rights reserved.</p>
            </div>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}

export default History;
