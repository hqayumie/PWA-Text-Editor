import React from 'react';
import { Col } from 'react-bootstrap';
import myImage from '../../images/IMG_1838.jpg';
function About() {
    return(
    <section className="title">
      <p class="job">Future Full Stack Web Developer</p>
      <div className="row justify-content-center" id="about-container">       
      <Col lg={6} md={12}>
      <center><img src={myImage} className="my-image" alt="Heela-profile"/></center>
      <p class="name">Heela Qayumie</p>
      
      <h2 class="education"> About Me</h2>
      <p>
      Hello, I'm Heela!A future Full Stack Web developer with a background in finance, communications and political
                    science. Eager to learn new skills and looking for future oppurtinties to gain additional
                    experience.

      </p>
      </Col>

</div>
</section> 
)}

export default About;