import { useState, useEffect } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Container = styled.div`
  position: absolute;
  right: 3rem;
  bottom: 3rem;
  min-width: 100px;
  z-index: 1;
  background: #7affaf;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.13);
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
`;

const StyledCountUp = styled(CountUp)`
  font-size: 40px;
`;

const ScoreBox = ({ score }) => {
  const [oldScore, setOldScore] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOldScore(score);
    }, 300);
  }, [score]);

  return (
    <Container>
      <div>Score</div>
      <StyledCountUp start={oldScore} end={score} duration={5} />
    </Container>
  );
};

export default ScoreBox;
