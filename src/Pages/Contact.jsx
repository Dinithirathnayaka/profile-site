import React, { useState } from "react";
import { useFormik } from "formik";
import image from "../images/mountain.jpg";

import { BiChevronRight } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import faceone from "../images/face-2.jpg";
import facetwo from "../images/face-3.jpg";
import spoone from "../images/1.png";
import spotwo from "../images/2.png";
import spothree from "../images/3.png";
import LeftGrid from "../component/Grid Section/LeftGrid";
import "../component/Contact.css";
import { IconContext } from "react-icons";
import addform from "../component/repositiories/contactrepo";
import LeftGridNew from "../component/Grid Section/LeftGridNew";

function Contact() {
  const [message, setMessage] = useState("");

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [isupload, setLoading] = useState(false);

  const onSubmit = (values, { resetForm }) => {
    console.log(values);

    addform(values).then((response) => {
      console.log(response);
      setLoading(true);
      console.log(response);
      console.log("added");
      setMessage("Data have been saved");
      resetForm({ values: "" });
    });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name cannont be empty";
    }

    if (!values.email) {
      errors.email = "Email cannont be empty";
    } else if (
      !/(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/.test(
        values.email
      )
    ) {
      errors.email = "Email must be in correct format";
    }

    if (!values.message) {
      errors.message = "Message cannont be empty";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div>
      <div className="row grid-container">
        {/*---------------------------------
             -----Left Grid Section-------- 
             -----------------------------------*/}
             <div className="col-lg-3 col-1">
             <div className="left ">
          <LeftGrid />
        </div>
        <div className="leftnew">
                <LeftGridNew/>
              </div>
             </div>
       

        <div className="middle col-lg-9 col-10">
          <div className="main-image">
            <img src={image} style={{ height: "65vh", width: "100%" }} />
          </div>

          <div className="middle-top">
            {/*---------------------------------
             -----Contact Information-------- 
             -----------------------------------*/}

            <div className="row contact">
              <h5 className="maintopic">Contact Information</h5>
              <div
                className="col-4 mx-auto d-block"
                style={{
                  backgroundColor: "#2d2f33",
                  width: "40vh",
                  padding: "30px",
                }}
              >
                <p style={{ color: "#fff" }}>
                  Country:
                  <span className="text-muted" style={{ marginLeft: "7vh" }}>
                    Sri Lanka
                  </span>
                </p>
                <p style={{ color: "#fff" }}>
                  City:
                  <span className="text-muted" style={{ marginLeft: "8vh" }}>
                    Kurunegala
                  </span>
                </p>
                <p style={{ color: "#fff" }}>
                  Steat:
                  <span className="text-muted" style={{ marginLeft: "11vh" }}>
                    Kurunegala
                  </span>
                </p>
              </div>
              <div
                className="col-4 mx-auto d-block"
                style={{
                  backgroundColor: "#2d2f33",
                  width: "40vh",
                  padding: "30px",
                }}
              >
                <p style={{ color: "#fff" }}>
                  Email:
                  <span className="text-muted" style={{ marginLeft: "3vh" }}>
                    supunnilakshana1999@gmail.com
                  </span>
                </p>
                <p style={{ color: "#fff" }}>
                  Telegram:
                  <span className="text-muted" style={{ marginLeft: "6vh" }}>
                    @supun
                  </span>
                </p>
                <p style={{ color: "#fff" }}>
                  Instagram:
                  <span className="text-muted" style={{ marginLeft: "6vh" }}>
                    @supun
                  </span>
                </p>
              </div>
              <div
                className="col-4 mx-auto d-block"
                style={{
                  backgroundColor: "#2d2f33",
                  width: "40vh",
                  padding: "30px",
                }}
              >
                <p style={{ color: "#fff" }}>
                  Support
                  <br />
                  Service:
                  <span className="text-muted" style={{ marginLeft: "5vh" }}>
                    05700000000
                  </span>
                </p>
                <p style={{ color: "#fff" }}>
                  Office:
                  <span className="text-muted" style={{ marginLeft: "5vh" }}>
                    0000000000
                  </span>
                </p>
                <p style={{ color: "#fff" }}>
                  Personal:
                  <span className="text-muted" style={{ marginLeft: "5vh" }}>
                    000000000
                  </span>
                </p>
              </div>
            </div>

            {/*---------------------------------
             -----Getin Touch-------- 
             -----------------------------------*/}

            <h5
              className="maintopic"
              style={{
                marginTop: "5vh",
              }}
            >
              Get In Touch
            </h5>

            <div
              className="form"
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "#39393b",
                marginTop: "5vh",
                padding: "8vh",
              }}
            >
              <IconContext.Provider value={{ fontsize: "5px" }}>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <FaUserAlt className="iconc" />
                    <input
                      type="text"
                      className="form-control"
                      backgroundColor="#2d2f33"
                      id="name"
                      name="name"
                      placeholder="Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <div className="small text-danger">
                      {formik.errors.name}
                    </div>
                  ) : null}
                  <div className="form-group">
                    <FaAt className="iconc" />

                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="small text-danger">
                      {formik.errors.email}
                    </div>
                  ) : null}

                  <div className="form-group">
                    <FaEnvelope className="iconc" style={{ height: "25vh" }} />

                    <textarea
                      type="text"
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Message"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                    />
                  </div>
                  {formik.touched.message && formik.errors.message ? (
                    <div className="small text-danger">
                      {formik.errors.message}
                    </div>
                  ) : null}

                  <button type="submit" className="btnc ">
                    Send Message
                  </button>
                </form>

                {message ? (
                  <div className="text-primary text-end">{message}</div>
                ) : null}
              </IconContext.Provider>
            </div>
            <br/><br/>

            {/*---------------------------------
             -----Sponcer Section-------- 
             -----------------------------------*/}
{/* 
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
            </div> */}
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

export default Contact;
