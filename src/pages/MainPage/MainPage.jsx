import MainContainer from 'components/MainContainer/MainContainer';
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <MainContainer>
      <h1>Logic Warriors</h1>
      <p>
        Welcome to Logic Warriors! Click <Link to={'/game'}>GAME</Link> to
        battle!
      </p>
    </MainContainer>
  );
};

export default MainPage;
