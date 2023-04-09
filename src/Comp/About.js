import React from 'react'
import './About.css';
const About = () => {
  return (
    <div className="about-container">
      <h2>About Our Data Security Application</h2>
      <p>Our application is a cutting-edge solution for data security, designed to protect your sensitive information using efficient algorithms. Our solution is built with React, a powerful and popular JavaScript library for building user interfaces.</p>
      <ol style={{listStyle: 'decimal'}}>
      <li>With the increasing amount of data breaches and cyber threats, data security has become a crucial concern for businesses and individuals alike.</li> 
      <li>Our application addresses this concern by providing a secure and reliable platform for storing and transmitting data.</li>
      <li>One of the key features of our application is the efficient algorithm we have integrated into our system. </li>
      <li>This algorithm has been carefully designed to ensure maximum security while minimizing processing time and resource usage.</li> 
      <li>This means that your data is kept safe without compromising performance.</li>
      </ol>
      <p className="about-text">Our application is easy to use, with a simple and intuitive interface that makes it accessible to users of all skill levels. Whether you're a business owner, a freelancer, or an individual looking to protect your personal information, our application is the perfect solution for your data security needs.</p>
      <p className="about-text">At its core, our application is committed to providing the highest level of security for your data. We understand the importance of data privacy, and we have made it our mission to create a secure and reliable platform that you can trust. With our efficient algorithm and user-friendly interface, you can rest assured that your data is safe with us.</p>
    </div>
  )
}

export default About