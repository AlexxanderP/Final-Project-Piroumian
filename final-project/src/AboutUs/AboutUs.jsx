import React from "react";
import Nav from "../LandingPage/Navigation/Nav";
import Footer from "../LandingPage/Footer";

const AboutUs = () => {
  return (
    <div className="about-main">
      <Nav />
      <section className="about-content">
        <h1 className="about-header"> Simi Valley HVAC Specialists</h1>
        <img
          className="Landeen-img"
          href="../imgs/Landeen.jpg"
          alt="Landeen Img"
        />
        <p>
          As a full service HVAC provider, Landeen Heating has been assisting
          the local Simi Valley community consistently and effectively
          throughout the years. At the heart of our unmatched service is a core
          team that deeply understands the concepts involved in heating,
          cooling, and ventilation. With Landeen Heating , you have an able
          partner to make sure your property is functional and efficient.{" "}
        </p>
        <h2>WHO WE SERVE</h2>
        <p>
          What our time in Simi Valley has taught us is that no property is
          immune to HVAC problems and that there's always room for improvement.
          Locally owned and operated, Landeen Heating is committed to excellent
          HVAC solutions that suit the needs of our customers. For most of our
          clients, they expect their HVAC systems to simply work and that's the
          assurance we bring to the table. With us, you'll always know that your
          heating and cooling are in good hands and that we're never more than a
          phone call away should you need our help.
        </p>
        <h2>WHY WE STAND OUT </h2>
        <p>
          With plenty of options on the Simi Valley HVAC market, making an
          informed decision can seem like the luck of the draw. For Landeen
          Heating , we provide expert service involving skill, not luck.
        </p>
      </section>
      <Footer />
    </div>
  );
};
export default AboutUs;
