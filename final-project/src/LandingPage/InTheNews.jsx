import React from "react";
import Space from "../imgs/Space.png";
import CleanAir from "../imgs/CleanAir.jpg";
import PorterRanch from "../imgs/PorterRanch.png";

const InTheNews = () => {
  return (
    <div className="news-container">
      <h1 className="news-header">Aerus in the News</h1>
      <div className="containers">
        <div className="news-container-1">
          <img className="porter-img" src={PorterRanch} alt="Porter Img" />
          <h2> As Featured on NASA's official website</h2>
          <p className="container-1-p">
            “In late 2015 and early 2016, while Southern California Gas workers
            struggled for months to stop a natural gas leak from a well at Aliso
            Canyon in Los Angeles, thousands of residents of the neighboring
            Porter Ranch community—and even two of its schools—were relocated. A
            device based on a NASA invention, however, allowed thousands more to
            stay in their homes. A nearby heating and air conditioning company
            happened to be a distributor of Aerus Holdings’ ActivePure products
            and introduced the gas company to the Aerus Air Scrubber Plus, a
            line of air- and surface-purifying devices. SoCalGas ended up
            ordering and installing more than 10,000 of the air purifiers in
            Porter Ranch homes.”
          </p>
        </div>
        <div className="news-container-2">
          <img className="quality-img" src={Space} alt="Quality Img" />
          <h2>
            {" "}
            Aerus Recognized at Space Symposium and 2018 Space Technology Hall
            of Fame Dinner:
          </h2>
          <p className="container-2-p">
            In 2017, Aerus saw its proprietary ActivePure Technology inducted
            into the Space Technology Hall of Fame, a Space Foundation program
            aiming to increase public awareness of the benefits of space
            exploration and encouraging further innovation of NASA-adapted
            technologies. Aerus joined a select group of fewer than 80 other
            innovative companies around the globe who have been honored by the
            Space Foundation for successfully transforming technology originally
            developed for space exploration into products that help improve the
            quality of life here on Earth.
          </p>
        </div>
        <div className="news-container-3">
          <img className="clean-air-img" src={CleanAir} alt="Clean Air Day" />
          <p className="container-3-p">
            ActivePure Technology found in Beyond by Aerus products help
            eliminate indoor air quality risks by reducing air pollutants, VOCs
            (chemical odors), cigarette smoke, dust, pollen, mold, odor-causing
            bacteria and odors caused by pets and cooking. It is particularly
            helpful for those who suffer from allergies, asthma, COPD and other
            respiratory illnesses. Also, those with compromised immune systems
            (such as premature babies, the elderly, and those suffering from
            diseases) can benefit greatly from cleaner air in the home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InTheNews;
