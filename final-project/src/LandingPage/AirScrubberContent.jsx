import React from "react";
import AerusScrubber from "../imgs/AerusScrubber.png";
import Button from "react-bootstrap/Button";

const AirScrubberContent = () => {
  return (
    <section className="air-container">
      <h1 className="air-header"> The Aerus Air Scrubber Removes:</h1>
      <div className="air-btns">
        <Button className="btn-airborne">Airborne Viruses</Button>
        <Button className="btn-contaminants">Contaminants</Button>
        <Button className="btn-dust">Dust & Dirt</Button>
        <Button className="btn-pollutants">Pollutants</Button>
        <Button className="btn-pet">Pet Dander</Button>
        <Button className="btn-odors">Odors</Button>
      </div>
      <div className="activepure-container">
        <div className="line"></div>
        <div className="header">
          <h1 className="how-it-works-header"> What is ActivePure®?</h1>
        </div>
        <div className="works-inner-container">
          <div className="about-activepure">
            <img
              className="AerusScrubberImg"
              src={AerusScrubber}
              alt="AerusScrubber"
            />
            <h2 className="about-header">How it Works</h2>
            <ul>
              <li className="about-list">
                ActivePure® Technology attaches directly to your current HVAC
                system duct-work to remove air pollution, viruses, bacteria,
                surface contaminants, pet dander, odors, VOCs, and dust
                resulting in a cleaner, healthier and more efficient home.
              </li>
              <li className="about-list">
                Uses light waves alongside a catalytic process to produce
                scrubber ions that remove dust particles from the air.
              </li>
              <li className="about-list">
                The only Air Purifier with Certified Space Technology
                continuously protects and purifies the air, and attacks
                contaminants on all surfaces
              </li>
              <li className="about-list">
                Proven effective in University studies on various contaminants
                in the air and on surfaces.
              </li>
              <li className="about-list">Installed by a professional</li>
            </ul>
            <h2 className="call-header">About ActivePure®</h2>
            <p className="call-p">
              ActivePure® is created in the USA, by a leading technology company
              with over 95 years of history and innovative products that have
              been recognized by the Smithsonian and trusted by millions of
              families. ActivePure® is the only Air Purifier with air cleaning
              technology awarded the prestigious Certified Space Technology seal
              by the Space Foundation. We own worldwide rights to this
              proprietary ActivePure® Technology and it is the only Certified
              Space Technology that works to continuously clean and protect air
              and surfaces 24 hours a day.
            </p>
          </div>
          <img
            className="AerusScrubber-img"
            src={AerusScrubber}
            alt="Aerus Scrubber"
          />
        </div>
      </div>
    </section>
  );
};

export default AirScrubberContent;
