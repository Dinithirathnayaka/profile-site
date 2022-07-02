import React, { useState } from "react";
import { useFormik } from "formik";
import image from "../images/mountain.jpg";

import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaAt } from "react-icons/fa";

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
    <div className="main-bar">
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
                className="col-6 mx-auto d-block"
                style={{
                  backgroundColor: "#2d2f33",
                  width: "60vh",
                  padding: "30px",
                  marginBottom: "2vh"
                }}
              >
                <div className="row">
                  <div className="col-6" >
                  <p style={{ color: "#fff" }}>Country:</p>
                  <p style={{ color: "#fff" }}>City:</p>
                  <p style={{ color: "#fff" }}> Steat:</p>
                
                  </div>
                  <div className="col-6" >
                    <p className="text-muted" style={{ marginLeft: "11vh" }}>Sri Lanka</p>
                    <p className="text-muted" style={{ marginLeft: "11vh" }}>Kurunegala</p>
                    <p className="text-muted" style={{ marginLeft: "11vh" }}>Kurunegala</p>
                  </div>
                </div>
     
              </div>
              <div
                className="col-6 mx-auto d-block"
                style={{
                  backgroundColor: "#2d2f33",
                  width: "60vh",
                  padding: "30px",
                   marginBottom: "2vh"
                }}
              >
                <div className="row">
                  <div className="col-6">
                  <p style={{ color: "#fff" }}>Email:</p>
                  <p style={{ color: "#fff" }}>Contact number:</p>
                  <p style={{ color: "#fff" }}>Whapp:</p>
                
                  </div>
                  <div className="col-6">
                    <p className="text-muted" style={{ marginLeft: "-5.5vh" }}>supunnilakshana@gmail.com</p>
                    <p className="text-muted" style={{ marginLeft: "11vh" }}>0770000000</p>
                    <p className="text-muted" style={{ marginLeft: "11vh" }}>0770000000</p>
                  </div>
                </div>
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
             -----Footer Section-------- 
             -----------------------------------*/}

<div className="main-footer" style={{ color: "darkgrey ", paddingTop:"2.5vh" }}>
              <p style={{paddingLeft:"3vh"}}>© 2022 </p>
              <p style={{ marginLeft: "100vh " }}>
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
