import { Container, StyledLink } from './HomePageContainer.styled';
import { useState } from 'react';

import Hero from 'images/hero/Hero';

export default function HomaPageContainer({ children }) {
  const [isHover, setIsHover] = useState(false);

  const mauseEnterHandler = () => {
    setIsHover(true);
  };
  const mauseLeaveHandler = () => {
    setIsHover(false);
  };

  return (
    <Container>
        <Hero isHover={isHover} />
      <div>
        <h1>Logic Warriors</h1>
        <p>
          Welcome to Logic Warriors! Click to{' '}
          <StyledLink
            onMouseLeave={mauseLeaveHandler}
            onMouseEnter={mauseEnterHandler}
          >
            BATTLE
          </StyledLink>
        </p>
      </div>
    </Container>
  );
}
