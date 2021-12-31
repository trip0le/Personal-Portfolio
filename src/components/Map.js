import React from "react";
import styled from "styled-components";
import MapImg from "../assets/images/map.png";
import PText from "./PText";

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }

  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container"></div>
    </MapStyles>
  );
}
