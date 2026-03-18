import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar..png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself...
            </h1>
            <p className="home-about-body">
              Motivated and detail-oriented B.Tech Computer Science and Engineering student <br/>(Batch 2023–2027) with a minor
              in Cloud Computing and a strong foundation in core programming and web development. 
              <br/>
              <br/>
              Proficient in 
              <b className="purple"><i> Python, C, C++, HTML & CSS, and well-versed in subjects such as Data Structures & Algorithms (DSA) and Database Management Systems (DBMS).
              Passionate about cloud technologies, problem-solving, and building scalable web applications. </i></b>
              <br/>
              <br/>
              Eager to apply technical skills and theoretical knowledge in real-world projects and internship opportunities.
              <br/>
              <br/>
              
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><u>Let's Connect</u></h1>

            
            <section id="contact" class="contact-section">

              <div class="contact-container">

                <h2 class="contact-title">Contact Me</h2>

                <p class="contact-subtext">
                  Have a project, internship opportunity, or collaboration in mind? Let's talk.
                </p>

                <form id="contact-form" class="contact-form">

                  <div class="input-group">
                    <input type="text" name="name" required/>
                    <label>Your Name</label>
                  </div>

                  <div class="input-group">
                    <input type="email" name="email" required/>
                    <label>Your Email</label>
                  </div>

                  <div class="input-group">
                    <textarea name="message" rows="5" required></textarea>
                    <label>Your Message</label>
                  </div>

                  <button type="submit" class="send-btn">
                    Send Message 🚀
                  </button>

                </form>

              </div>

            </section>
            
            
            <br/>
            <p>
              My Email : <span className="purple">Pratushraj875@gmail.com</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pratush-raj/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Raj20042122"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
