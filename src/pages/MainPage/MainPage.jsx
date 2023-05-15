import GameName from 'components/GameName/GameName';
import MainContainer from 'components/MainContainer/MainContainer';

import { StyledText, StyledLink } from './MainPage.styled';
const MainPage = () => {
  return (
    <MainContainer>
      <GameName />
      <StyledText>
        Welcome to Logic Warriors!
        <br />
        Click to <StyledLink to={'/game'}>BATTLE</StyledLink> !
      </StyledText>
    </MainContainer>
  );
};

export default MainPage;
