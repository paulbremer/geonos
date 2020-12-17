import React, { useState } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { LocationOn } from "@material-ui/icons";

import LeftBarAll from "./LeftBarAll";
import questionData from "../data/data.json";
import styles from "../data/styles.json";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const UserMarker = () => (
  <LocationOn style={{ color: "#e61e14", transform: "scale(1.5)" }} />
);

const ActiveUserMarker = () => (
  <LocationOn style={{ color: "#6A1E1B", transform: "scale(1.5)" }} />
);

const Map = ({ setIsQuiz }) => {
  const [selectedQuestion, setSelectedQuestion] = useState({
    title: "Selecteer een locatie om te lezen wat er heeft plaatsgevonden",
  });

  const defaultProps = {
    center: { lat: 52.1746414, lng: 3.9265093 },
    zoom: 8,
    options: {
      styles: styles,
      zoomControl: false,
      scaleControl: false,
      fullscreenControl: false,
    },
  };

  const handleOnClick = (key, childProps) => {
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
          return question.id === selectedQuestion.id ? (
            <ActiveUserMarker
              lat={question.lat}
              lng={question.long}
              {...question}
            />
          ) : (
            <UserMarker lat={question.lat} lng={question.long} {...question} />
          );
        })}
      </GoogleMapReact>
    </Container>
  );
};

export default Map;
