import React from 'react';
import { Row, Col } from 'react-bootstrap';
//import github from '../../images/github.jpg';
//import email from '../../images/email.jpg';
//import linkedin from '../../images/linkedin.jpg';
//import IMG_1837 from '../../images/IMG_1837';
function ContactForm() {
    return (
        <section>
            <h1 data-h1tag='h1tag' className='contact'>Contact Me</h1>
            <div className="contact-icons">
                <Row>
                    <Col lg={3} md={12}>
                        <a href="https://github.com/hqayumie"><img src="https://img.icons8.com/doodle/100/000000/github--v1.png" alt="github-logo" class="icon"/></a><p class="icon-text">github</p>
                        </Col>

                        <Col lg={3} md={12}>
                        <a href="mailto:heelaqayumie@gmail.com"><img src="https://img.icons8.com/doodle/120/000000/new-post.png" alt="mail-log" class="icon"/></a><p class="icon-text">email</p>
                        </Col>

                        <Col lg={3} md={12}>
                        <a href="www.linkedin.com/in/heela-qayumie-8604b6226"><img src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png" alt="linkedin-logo" class="icon"/></a><p class="icon-text">linkedin</p>
                    </Col>
                </Row>
            </div>

            <div class="resume-container">
            <Row>
                <Col lg={4} md={12}>
                <h2 class="resume">Front-End Technologies</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        React.js
                    </li>
                    <li>
                        Framework (Bootstrap)
                    </li>
                    <li>
                        Responsive Web Design
                    </li>
                </ul>
                </Col>
        
            <Col lg={4} md={12}>
            <h2 class="resume">Back-End Technologies</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL 
                    </li>
                    <li>
                        NoSQL (MongoDB, Mongoose)
                    </li>
                    <li>
                        API's (web, third-party, RESTful, server-side)
                    </li>
                    <li>
                        Templating language (Handlebars)
                    </li>
                </ul>
                
            </Col>
            </Row>
            </div>

        </section>
    );
}


export default ContactForm;