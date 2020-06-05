import React from "react";
import Nav from "./Navigation/Nav";
import CTA from "./CTA";
import AirScrubberContent from "./AirScrubberContent";
import InTheNews from "./InTheNews";
import Footer from "./Footer";

class LandingPage extends React.Component {
  render() {
    return (
      <body>
        <div>
          <Nav />
          <CTA />
          <AirScrubberContent />
          <InTheNews />
          <Footer />
        </div>
      </body>
    );
  }
}
export default LandingPage;
