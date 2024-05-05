import React from "react";
import mechanic1 from "../Images/mechanic1.jpeg";
import mechanic2 from "../Images/mechanic2.jpeg";
import mechanic3 from "../Images/mechanic3.jpeg";
import mechanic4 from "../Images/mechanic4.jpeg";
import mechanic5 from "../Images/mechanic5.jpeg";
import mechanic6 from "../Images/mechanic6.jpeg";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function Gallery() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3 ">
        <div className="mb-2">
          <img
            src={mechanic1}
            className="w-full h-auto max-w-xs shadow-2xl rounded mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src={mechanic2}
            className="w-full h-auto max-w-xs shadow-2xl rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>
        <div className="mb-2">
          <img
            src={mechanic3}
            className="w-full h-auto max-w-xs shadow-2xl rounded mb-4"
            alt="Mountains in the Clouds"
          />
          <img
            src={mechanic4}
            className="w-full h-auto max-w-xs shadow-2xl rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>
        <div className="mb-2">
          <img
            src={mechanic5}
            className="w-full h-auto max-w-xs shadow-2xl rounded mb-4"
            alt="Waves at Sea"
          />
          <img
            src={mechanic6}
            className="w-full h-auto max-w-xs shadow-2xl rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </>
  );
}

export default Gallery;
