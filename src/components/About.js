import React from "react";
import { useParams } from "react-router-dom";

function About() {
  const { slug } = useParams();

  return (
    <div>
      <h2>About {slug}</h2>
    </div>
  );
}

export default About;
