import React, { useState } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import { LocationOn } from "@material-ui/icons";
import { computeDistanceBetween, LatLng } from "spherical-geometry-js";

import LeftBar from "./LeftBar";
import ScoreBox from "./ScoreBox";
import questionData from "../data/data.json";
import styles from "../data/styles.json";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const UserIcon = styled.div`
  font-size: 2rem;
  transform: translate3d(-15px, -20px, 0);
`;

const UserMarker = () => <UserIcon>📍</UserIcon>;

const AnswerMarker = () => (
  <LocationOn style={{ color: "blue", transform: "scale(1.5)" }} />
);

const Map = ({ setIsQuiz }) => {
  const [currentMarker, setCurrentMarker] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [distance, setDistance] = useState(0);

  const [score, setScore] = useState(0);

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

  const handleOnClick = ({ x, y, lat, lng, event }) => {
    if (!showAnswer) {
      setShowAnswer(!showAnswer);
      setCurrentMarker({ lat, lng });
      const distanceBetween = computeDistanceBetween(
        new LatLng(
          questionData[currentQuestion].lat,
          questionData[currentQuestion].long
        ),
        new LatLng(lat, lng)
      );
      const distanceInKm = distanceBetween / 1000;
      setDistance(
        distanceBetween < 1000
          ? distanceInKm.toFixed(2)
          : distanceInKm.toFixed(0)
      );
      const distanceScore = 500 - distanceInKm;
      setScore(score + (distanceScore > 0 ? distanceScore : 0));
    }
  };

  const setNewQuestion = () => {
    setShowAnswer(!showAnswer);
    setCurrentMarker(null);
    if (currentQuestion === questionData.length - 1) {
      setQuizEnd(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <Container>
      <LeftBar
        {...questionData[currentQuestion]}
        distance={distance}
        showAnswer={showAnswer}
        setIsQuiz={setIsQuiz}
        score={score}
        quizEnd={quizEnd}
        setNextQuestion={setNewQuestion}
      />
      <ScoreBox score={score} />
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCJv6V543b8UX1weC67yJzZsJ3GBIbXJu8",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        {...defaultProps}
        onClick={handleOnClick}
      >
        {showAnswer && currentMarker && <UserMarker {...currentMarker} />}
        {showAnswer && currentMarker && (
          <AnswerMarker
            lat={questionData[currentQuestion].lat}
            lng={questionData[currentQuestion].long}
          />
        )}
      </GoogleMapReact>
    </Container>
  );
};

export default Map;
