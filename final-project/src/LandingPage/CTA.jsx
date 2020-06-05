import React from "react";
import Button from "react-bootstrap/Button";

const CTA = () => {
  return (
    <div>
      <section className="CTA">
        <div className="Real-CTA">
          <div className="CTA-Content">
            <h2 className="cta-pitch">
              Air Scrubber w/ <br /> ActivePure®! <br /> Technology
            </h2>
            <h4>
              Air Scrubber Plus is a renowned Air Purifier that utilizes <br />
              ActivePure® Technology to help create a cleaner, healthier and{" "}
              <br />
              more comfortable living environment at home, at work, and beyond.{" "}
              <br />
              Feel more at ease in your home knowing it is being purified of{" "}
              <br />
              harmful airborne contaminates, bacteria, viruses, dander, and{" "}
              <br />
              odors.
            </h4>
            <Button className="ctabtn" href="/ContactUs">
              {" "}
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
