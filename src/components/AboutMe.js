import React from "react";
import profileImage from "../images";

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2 className="about-me">About Me</h2>
      <div className="profilePic">
        <img
          src={profileImage}
          alt="Super good picture of Hunter Wilson"
          className="profile"
        ></img>
      </div>
      <p>
        I am Hunter Wilson and I am currently a student at Georgia Tech Coding
        Bootcamp. I have always had a passion for technology and problem-solving
        and decided to pursue a career in web development. Through the bootcamp,
        I have gained a strong foundation in modern technologies such as HTML,
        CSS, and JavaScript.
      </p>
      <p>
        Aside from my technical skills, I am a strong team player and have
        excellent communication and time management skills. I am constantly
        looking for ways to improve and expand my knowledge and am excited to
        start my career in the tech industry.
      </p>
      <p>
        In my free time, I enjoy staying up-to-date with the latest trends in
        technology and participating in online coding challenges. I am also an
        avid reader and enjoy spending time outdoors. Thank you for taking the
        time to read about me. I look forward to the opportunity to contribute
        my skills and learn from others in a professional setting.
      </p>
    </section>
  );
};

export default AboutMe;
