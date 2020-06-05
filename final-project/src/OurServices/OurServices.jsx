import React from "react";
import Nav from "../LandingPage/Navigation/Nav";
import Footer from "../LandingPage/Footer";
import LandeenPhoto1 from "../imgs/LandeenPhoto1.jpg";

const OurServices = () => {
  return (
    <div className="services-main">
      <Nav />
      <h1 className="Services-header">
        QUALIFIED Simi Valley AIR CONDITIONING SERVICES
      </h1>
      <img className="landeen-img" src={LandeenPhoto1} alt="Porter Img" />
      <p>
        {" "}
        When the heat of summer is at its highest, you'll be glad you called
        Landeen Heating to make sure your air conditioning is at peak
        performance. Local to the Simi Valley market, we know that having a
        working AC is almost a necessity to survive and our staff is ready to
        respond quickly so you don't suffer needlessly. Our capable team will
        quickly right the wrong and help you beat the heat. We offer the
        following air conditioning services:
      </p>
      <ul className="services-list">
        <li className="service">
          Air Conditioning Installation <br />
        </li>
        <li className="service">
          Air Conditioning Repair <br />
        </li>
        <li className="service">
          Air Conditioning Maintenance <br />
        </li>
        <li className="service">Coil and Blower Cleaning </li>
        <li className="service">Duct and Vent Cleaning </li>
        <li className="service">Filter Replacement </li>
        <li className="service">Programmable Thermostats</li>
        <li className="service">Emergency Response </li>
      </ul>
      <p className="services-cont">
        For proper air conditioning function, we advise our Simi Valley
        customers to call at the earliest signs of trouble. In many cases, your
        AC's performance will slowly deteriorate, delivering less and less cold
        air. Our professional AC technicians have a knack for spotting the
        problem and fixing it before you're covered in sweat. In addition,
        scheduling regular air conditioning maintenance can prevent many
        problems from happening.
      </p>
      <p className="services-cont">
        If you're looking to upgrade to a new, more powerful air conditioner or
        just need to service the one you have, let Landeen Heating know and
        we'll be on the way. Our services are affordable, speedy, and designed
        to give you the most bang for your buck. Keep our number handy,
        805-522-8848, and call us for all your air conditioning needs.
      </p>
      <Footer />
    </div>
  );
};

export default OurServices;
