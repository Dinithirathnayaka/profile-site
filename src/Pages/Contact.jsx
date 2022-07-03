import React from "react";
import image from "../images/mountain.jpg";
import emailjs from "emailjs-com";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import LeftGrid from "../component/Grid Section/LeftGrid";
import "../component/Contact.css";
import { IconContext } from "react-icons";
import LeftGridNew from "../component/Grid Section/LeftGridNew";

function Contact() {
 

    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('service_vft0m9x', 'template_lk73kot',   
      e.target, 'ftEJaWAOJijuRDJon')
          .then((result) => {
              alert('email sent successfully');
          }, (error) => {
              alert('error sending email');
          });
          //clears the form after sending the email
          e.target.reset();
      }
    

   
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
                  <p style={{ color: "#fff" }}> Street:</p>
                
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
                  <p style={{ color: "#fff" }}>Whatsapp:</p>
                
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
                backgroundColor: "#2d2f33",
                marginTop: "5vh",
                padding: "8vh",
              }}
            >
                <IconContext.Provider value={{ fontsize: "5px" }}>

<form onSubmit={sendEmail}>
<div className="form-group">
                    <FaUserAlt className="iconc" />
            <input type='hidden' name='contact_number' />
           
            <input id='name' type='text' name='name'  className="form-control"
                      backgroundColor="#2d2f33"
            placeholder='Your name'/>
             </div>

             <div className="form-group">
                    <FaAt className="iconc" />
           
            <input id='email' type='email' name='email'  className="form-control"
            placeholder='Your email' />

            </div>

            <div className="form-group">
                    <FaEnvelope className="iconc" style={{ height: "25vh" }} />
           
           <textarea id='message' name='message' className="form-control"
           placeholder="Message..."/>
           </div>
           <button type="submit" className="btnc ">
                    Send Message
                  </button>

       </form>
       </IconContext.Provider>
            </div>

     

         
            <br/><br/>

     
            {/*---------------------------------
             -----Footer Section-------- 
             -----------------------------------*/}

<div className="main-footer" style={{ color: "darkgrey ", paddingTop:"2.5vh" }}>
              <p style={{paddingLeft:"3vh"}} className="text-muted">© 2022 All rights reserved.Template author: Dinithi Rathnayake  </p>
              
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
