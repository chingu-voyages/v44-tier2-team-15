// import GameName from 'components/GameName/GameName';
import MainContainer from 'components/MainContainer/MainContainer';
// import { StyledText, StyledLink } from './MainPage.styled';
import Hero from 'images/hero/Hero';
import { Link } from 'react-router-dom';
import classes from './MainPage.module.css';
import { useState } from 'react';

const MainPage = () => {
  const [isHover, setIsHover] = useState(false);

  const mauseEnterHandler = () => {
    setIsHover(true);
  };
  const mauseLeaveHandler = () => {
    setIsHover(false);
  };
  return (
    <MainContainer>
      {/* <GameName />
      <StyledText>
        Welcome to Logic Warriors!
        <br />
        Click to <StyledLink to={'/game'}>BATTLE</StyledLink> !
      </StyledText> */}
      <div className={classes.container}>
        <Hero isHover={isHover} />
        <div>
          <h1>Logic Warriors</h1>
          <p>
            Welcome to Logic Warriors!{' '}
            <p>
              Click to{' '}
              <Link
                onMouseLeave={mauseLeaveHandler}
                onMouseEnter={mauseEnterHandler}
                style={{
                  color: `${isHover ? '#D26F49' : '#000'}`,
                  transition: 'all 0.55s ease',
                }}
                to={'/game'}
              >
                BATTLE
              </Link>
            </p>
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default MainPage;
