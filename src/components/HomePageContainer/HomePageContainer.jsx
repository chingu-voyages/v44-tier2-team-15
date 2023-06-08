import { useState } from 'react';
import Hero from 'components/Hero';
import MainContainer from 'components/MainContainer';
import { Container, StyledLink, HeroTitle } from './HomePageContainer.styled';

const HomaPageContainer = ({ children }) => {
  const [isHover, setIsHover] = useState(false);

  const mauseEnterHandler = () => {
    setIsHover(true);
  };
  const mauseLeaveHandler = () => {
    setIsHover(false);
  };

  return (
    <MainContainer>
      <Container>
        <Hero isHover={isHover} />
        <div>
          <HeroTitle>Logic Warriors</HeroTitle>
          <p>
            Welcome to Logic Warriors!
            <br></br>
            Click to{' '}
            <StyledLink
              to={'/game'}
              onMouseLeave={mauseLeaveHandler}
              onMouseEnter={mauseEnterHandler}
            >
              BATTLE
            </StyledLink>
          </p>
        </div>
      </Container>
    </MainContainer>
  );
};

export default HomaPageContainer;
