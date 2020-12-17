import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  padding: 12px;
  color: #333;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  padding-top: 2em;
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 1em;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const QuestionContainer = styled.div`
  margin-top: 3em;
`;

const Intro = styled.p`
  margin: 1em 0;
  font-size: 1.2em;
  font-weight: bold;
`;

const Photo = styled.img`
  margin-bottom: 1em;
  width: 100%;
  height: auto;
`;

const Heading = styled.h1`
  font-size: 1.5em;
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-bottom: solid 1px #ccc;
`;

const DistanceAnswer = styled.p`
  font-size: 18px;
`;

export default function LeftBar({
  image,
  title,
  distance,
  showAnswer,
  setIsQuiz,
}) {
  return (
    <Container>
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
        <ListItem onClick={() => setIsQuiz(true)}>Quiz</ListItem>
        <ListItem onClick={() => setIsQuiz(false)}>Laatste nieuws</ListItem>
      </Navigation>
      <QuestionContainer>
        <Intro>
          Klik op de kaart waar onderstaand bericht heeft plaatsgevonden:
        </Intro>
        <Photo src={image} />
        <Heading>{title}</Heading>
        {showAnswer && (
          <DistanceAnswer>
            Je zat {distance} km naast de juiste plek.
          </DistanceAnswer>
        )}
      </QuestionContainer>
    </Container>
  );
}
