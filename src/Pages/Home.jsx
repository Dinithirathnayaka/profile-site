import React from "react";
import image from "../images/mountain.jpg";
import facemain from "../images/face-2.jpg";
import { BiChevronRight } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import LeftGrid from "../component/Grid Section/LeftGrid";
import LeftGridNew from "../component/Grid Section/LeftGridNew";
import "../component/History.css";

function Home() {
  return (
    <div >
      <div className=" row main-bar">
        {/*---------------------------------
             -----Left Grid Section-------- 
             -----------------------------------*/}
             
             <div className=" col-lg-3 col-1">
              <div className="left ">
              <LeftGrid  />
              </div>
              <div className="leftnew">
                <LeftGridNew/>
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
                style={{ height: "63vh", width: "100%" }}
              />
            </div>
            {/* <img
              src={facemain}
              alt=""
              className="main-topimage"
              style={{ height: "65vh", width: "55vh" }}
            /> */}
            <h1>
              Discover my Amazing <br />
              Art Space!{" "}
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
            <button type="button" className="btnm">
              WELCOME
            </button>

            {/*---------------------------------
             -----Perform Section-------- 
             -----------------------------------*/}

            <div className=" row perform " style={{ marginTop: "35vh" }}>
              <div className="col-3 percol">
                <div className="num">10 +</div>
                <p>Years Experience</p>
              </div>
              <div className="col-3 percol">
                <div className="num">143</div>
                <p>
                  Completed <br />
                  Projects
                </p>
              </div>
              {/* <div className="col-3 percol">
                <div className="num">114</div>
                <p>Happy Customers</p>
              </div>
              <div className="col-3 percol">
                <div className="num">20 +</div>
                <p>
                  Honers and <br />
                  Awards
                </p>
              </div> */}
            </div>


               {/*---------------------------------
             -----Education Section-------- 
             -----------------------------------*/}

<h5 className="maintopic">Education</h5>

<div className="row">
<div className="col-6 history">
                <h6 className="tit">Sabaragamuwa University Of Sri Lanka</h6>
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

              <div className="col-6 history">
                <h6 className="tit">Sabaragamuwa University Of Sri Lanka</h6>
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

</div>

            {/*---------------------------------
             -----MyService Section-------- 
             -----------------------------------*/}

            <h5 className="maintopic">My Services</h5>
            <div className="row" style={{ marginBottom: "3vh" }}>
              <div className="col-4 hi mx-auto d-block">
                <h6 className="subtopic">Mobile Development</h6>
                <p className="content text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </p>

                <div className="openicon">
                  {" "}
                  <p>
                    Order Now <BiChevronRight />
                  </p>
                </div>
              </div>

              <div className="col-4 hi mx-auto d-block">
                <h6 className="subtopic">Web Development</h6>
                <p className="content text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </p>

                <div className="openicon">
                  {" "}
                  <p>
                    Order Now <BiChevronRight />
                  </p>
                </div>
              </div>
              <div className="col-4 hi mx-auto d-block">
                <h6 className="subtopic">Destop Development</h6>
                <p className="content text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus esse commodi deserunt vitae, vero quasi! Veniam
                  quaerat tenetur pariatur doloribus.
                </p>
                <div className="openicon">
                  {" "}
                  <p>
                    Order Now <BiChevronRight />
                  </p>
                </div>
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

export default Home;
