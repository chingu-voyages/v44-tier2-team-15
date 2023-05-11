import MainContainer from 'components/MainContainer';
import { StyledFotter, StyledText } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFotter>
      <MainContainer>
        <StyledText>Join us on our site </StyledText>
        <a href="https://chingu-voyages.github.io/v44-tier2-team-15/">
          Logic Warriors
        </a>
      </MainContainer>
    </StyledFotter>
  );
};

export default Footer;
