import React, { useState } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { LocationOn } from "@material-ui/icons";

import LeftBarAll from "./LeftBarAll";
import questionData from "../data/data.json";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const UserMarker = () => (
  <LocationOn style={{ color: "#e61e14", transform: "scale(1.5)" }} />
);

const Map = ({ setIsQuiz }) => {
  const [selectedQuestion, setSelectedQuestion] = useState({
    title: "Selecteer een locatie om te lezen wat er heeft plaatsgevonden",
  });

  const defaultProps = {
    center: {
      lat: 52.090735,
      lng: 5.12142,
    },
    zoom: 8,
    options: {
      styles: [
        {
          featureType: "landscape",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "poi",
          stylers: [{ visibility: "off" }],
        },
        {
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    },
  };

  const handleOnClick = (key, childProps) => {
    console.log("click");
    setSelectedQuestion(childProps);
  };

  return (
    <Container>
      <LeftBarAll setIsQuiz={setIsQuiz} selectedQuestion={selectedQuestion} />
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCJv6V543b8UX1weC67yJzZsJ3GBIbXJu8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={defaultProps.options}
        onChildClick={handleOnClick}
      >
        {questionData.map((question) => {
          return (
            <UserMarker lat={question.lat} lng={question.long} {...question} />
          );
        })}
      </GoogleMapReact>
    </Container>
  );
};

export default Map;
