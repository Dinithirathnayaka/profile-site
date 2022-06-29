import React from "react";
import image from "../images/mountain.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.jpg";
import img13 from "../images/13.jpg";
import img14 from "../images/14.jpg";
import img15 from "../images/15.jpg";
import img16 from "../images/16.jpg";
import img17 from "../images/17.jpg";
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
import "../component/Blog.css";

function Blog() {
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
             -----Newsletter-------- 
             -----------------------------------*/}

            <div className="blog">
              <h5
                className="maintopic"
                style={{
                  marginTop: "3vh",
                }}
              >
                Newsletter
              </h5>

              <div className="row news">
                <div className="col-4  mx-auto d-block w-40">
                  <div className="card">
                    <figure>
                      <img
                        src={img9}
                        alt=""
                        style={{
                          height: "35vh",
                        }}
                      />
                    </figure>

                    <div class="card-body">
                      <h5 className="maintopic">Blog Tittle</h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, reprehenderit?
                      </p>
                      <a href="#" class="link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-4  mx-auto d-block">
                  <div className="card">
                    <figure>
                      <img
                        src={img10}
                        alt=""
                        style={{
                          height: "35vh",
                        }}
                      />
                    </figure>

                    <div class="card-body">
                      <h5 className="maintopic">Blog Tittle</h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, reprehenderit?
                      </p>
                      <a href="#" class="link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-4  mx-auto d-block">
                  <div className="card">
                    <figure>
                      <img
                        src={img11}
                        alt=""
                        style={{
                          height: "35vh",
                        }}
                      />
                    </figure>

                    <div class="card-body">
                      <h5 className="maintopic">Blog Tittle</h5>
                      <p class="card-text  text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, reprehenderit?
                      </p>
                      <a href="#" class="link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-4  mx-auto d-block">
                  <div className="card">
                    <figure>
                      <img
                        src={img12}
                        alt=""
                        style={{
                          height: "35vh",
                        }}
                      />
                    </figure>

                    <div class="card-body">
                      <h5 className="maintopic">Blog Tittle</h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, reprehenderit?
                      </p>
                      <a href="#" class="link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-4  mx-auto d-block">
                  <div className="card">
                    <figure>
                      <img
                        src={img13}
                        alt=""
                        style={{
                          height: "35vh",
                        }}
                      />
                    </figure>

                    <div class="card-body">
                      <h5 className="maintopic">Blog Tittle</h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, reprehenderit?
                      </p>
                      <a href="#" class="link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-4  mx-auto d-block">
                  <div className="card">
                    <figure>
                      <img
                        src={img14}
                        alt=""
                        style={{
                          height: "35vh",
                        }}
                      />
                    </figure>

                    <div class="card-body">
                      <h5 className="maintopic">Blog Tittle</h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, reprehenderit?
                      </p>
                      <a href="#" class="link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4  mx-auto d-block">
                  <div className="card">
                    <figure>
                      <img
                        src={img15}
                        alt=""
                        style={{
                          height: "35vh",
                        }}
                      />
                    </figure>

                    <div class="card-body">
                      <h5 className="maintopic">Blog Tittle</h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, reprehenderit?
                      </p>
                      <a href="#" class="link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-4  mx-auto d-block">
                  <div className="card">
                    <figure>
                      <img
                        src={img16}
                        alt=""
                        style={{
                          height: "35vh",
                        }}
                      />
                    </figure>

                    <div class="card-body">
                      <h5 className="maintopic">Blog Tittle</h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, reprehenderit?
                      </p>
                      <a href="#" class="link">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4  mx-auto d-block">
                  <div className="card">
                    <figure>
                      <img
                        src={img17}
                        alt=""
                        style={{
                          height: "35vh",
                        }}
                      />
                    </figure>

                    <div class="card-body">
                      <h5 className="maintopic">Blog Tittle</h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit, reprehenderit?
                      </p>
                      <a href="#" class="link">
                        Read More
                      </a>
                    </div>
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

export default Blog;
