import React from "react";
import Nav from "./Navigation/Nav";
import CTA from "./CTA";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./Footer";

class LandingPage extends React.Component {
  render() {
    return (
      <body>
        <div>
          <Nav />
          <CTA />
          <WhyChooseUs />
          <Footer />
        </div>
      </body>
    );
  }
}
export default LandingPage;
