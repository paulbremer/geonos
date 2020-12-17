import { useState } from "react";
import styled, { css } from "styled-components";
import CountUp from "react-countup";
import { EmojiObjectsOutlined, LibraryBooksOutlined } from "@material-ui/icons";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 380px;
  padding: 12px;
  color: #333;
  z-index: 10;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: white;
  padding: 0em 1em 0 1em;
  border-radius: 3px;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);
`;

const PreLogoLabel = styled.div`
  font-size: 12px;
  background-color: #e61e14;
  border-radius: 20px;
  padding: 2px 5px 4px;
  color: white;
  font-weight: bold;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;

  > svg {
    height: 20px;
  }
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 5em;
`;

const ListItem = styled.li`
  font-size: 18px;
  font-weight: 700;
  color: #949494;
  cursor: pointer;
  padding: 0.5em 0 0.5em;

  ${({ active }) => {
    return (
      active &&
      css`
        color: red;
        border-bottom: solid 3px #e61e14;
      `
    );
  }};

  &:first-child {
    margin-right: 1em;
  }
`;

const QuestionContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: white;
  padding: 0em;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);
`;

const QuestionContent = styled.div`
  width: 100%;
  padding: 1em;
  border-bottom: solid 1px #ccc;
  box-sizing: border-box;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

const Heading = styled.h1`
  font-size: 1.5em;
  margin-bottom: 1em;
  margin-top: 0;
  font-size: 20px;
`;

const SubContent = styled.p`
  font-family: "Helvetica Neue";
  font-size: 14px;
`;

const DistanceAnswer = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const NextButton = styled.button`
  font-size: 16px;
  background-color: #e61e14;
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  font-weight: bold;
  border: none;
  margin: 0 auto;
  display: block;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0;
  padding: 1rem 0 0;
  border-top: 1px solid #ececec;
`;

const ActionButtonIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
  background: #f3f3f0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const ActionButton = styled.button`
  background: none;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Helvetica Neue";
  font-size: 15px;
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &:hover ${ActionButtonIcon} {
    background-color: #e8e8e4;
  }
`;

const Hint = styled.div`
  padding: 0.5rem;
  margin: 1rem 0 0;
  font-family: "Helvetica Neue";
  font-size: 14px;
  background-color: #7affaf;
`;

const QuizEndContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: white;
  padding: 0em;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);

  img {
    max-width: 100%;
  }

  div {
    margin: 1rem 0;
    text-align: center;
  }

  h4 {
    font-size: 1.4rem;
    margin: 1rem auto 0;
  }

  ${CountUp} {
    font-size: 1.1rem;
  }
`;

export default function LeftBar({
  image,
  title,
  ankeiler,
  link,
  distance,
  showAnswer,
  setIsQuiz,
  quizEnd,
  score,
  setNextQuestion,
}) {
  const [showHint, setShowHint] = useState(false);

  return (
    <Container>
      <Header>
        <PreLogoLabel>geo</PreLogoLabel>
        <StyledLogoContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="28"
            viewBox="0 0 79 28"
          >
            <g fill="none" fillRule="evenodd">
              <path
                fill="#949494"
                d="M78.94 18.93c0-5.31-2.57-6.91-9.32-8.54-3.46-.8-4.41-1.27-4.41-2.28 0-.96.53-1.66 2.76-1.66 2.72 0 5.1.93 7.48 2.55 0 0 3.15-5.01 3.49-5.87C76.2 1.12 72.92 0 68.35 0c-6.48 0-10.58 3.44-10.58 8.54 0 5.4 3.1 7.19 9.58 8.7 3.6.84 4.57 1.46 4.57 2.47 0 1.27-.85 1.74-3.5 1.74-2.49 0-5.9-1.36-7.85-2.71l-3.6 5.87a21.29 21.29 0 0011.3 3.29c6.45 0 10.67-2.33 10.67-8.73"
              />
              <path
                fill="#E61E14"
                d="M27 13.95C27 6.25 33.32 0 41.12 0c7.8 0 14.13 6.25 14.13 13.95S48.92 27.9 41.12 27.9C33.32 27.9 27 21.65 27 13.95m7.2 0c0-3.78 3.1-6.84 6.92-6.84 3.83 0 6.93 3.06 6.93 6.84s-3.1 6.84-6.93 6.84a6.89 6.89 0 01-6.93-6.84"
              />
              <path
                fill="#949494"
                d="M23.67 27.9V0h-7.33v14.35S6.88 0 6.82 0H.36v27.9h7.32V13.55l9.63 14.35h6.36z"
              />
            </g>
          </svg>
        </StyledLogoContainer>
        <Navigation>
          <ListItem active onClick={() => setIsQuiz(true)}>
            Quiz
          </ListItem>
          <ListItem onClick={() => setIsQuiz(false)}>Nieuwskaart</ListItem>
        </Navigation>
      </Header>

      {!quizEnd && (
        <QuestionContainer>
          <Photo src={image} />
          <QuestionContent>
            <Heading>{title}</Heading>
            <SubContent>
              {showAnswer ? ankeiler : "Waar speelt de volgende nieuwskop af?"}
            </SubContent>
            {showAnswer && (
              <>
                <DistanceAnswer>
                  Je zat {distance} km naast de juiste plek.
                </DistanceAnswer>
                <NextButton
                  onClick={() => {
                    setNextQuestion();
                    setShowHint(false);
                  }}
                >
                  Volgende vraag
                </NextButton>
              </>
            )}

            <ActionButtons>
              <ActionButton onClick={() => setShowHint(!showHint)}>
                <ActionButtonIcon>
                  <EmojiObjectsOutlined />
                </ActionButtonIcon>
                <span>Hint</span>
              </ActionButton>

              {showAnswer && (
                <ActionButton
                  as={link ? "a" : "button"}
                  href={link}
                  target="_blank"
                  noopener
                  noreferrer
                >
                  <ActionButtonIcon>
                    <LibraryBooksOutlined />
                  </ActionButtonIcon>
                  <span>Lees artikel</span>
                </ActionButton>
              )}
            </ActionButtons>

            {showHint && (
              <Hint>
                <div>In dit dorp is Nederlands de tweede taal. </div>
              </Hint>
            )}
          </QuestionContent>
        </QuestionContainer>
      )}

      {quizEnd && (
        <QuizEndContainer>
          <img
            src="https://media.giphy.com/media/QaN6eYS5k4nja/giphy-downsized.gif"
            alt="WINNING"
          />
          <div>
            <h4>EINDE VAN DE QUIZ! 🎉</h4>
            <div>
              Je eindscore is <CountUp end={score} duration={2} /> punten!
            </div>
          </div>
        </QuizEndContainer>
      )}
    </Container>
  );
}
