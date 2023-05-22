import classes from './Footer.module.css';
import MiniLogo from 'images/logo/MiniLogo';
// import { StyledFotter, StyledText } from './Footer.styled';
// import githublogo from '../../images/icons/github-logo-white.png'
import GitHubLogo from 'images/icons/GitHub';

const Footer = () => {
  return (
    // <StyledFotter>
    //   <MainContainer>
    //     <StyledText>Join us on our site </StyledText>
    //     <a href="https://chingu-voyages.github.io/v44-tier2-team-15/">
    //       Logic Warriors
    //     </a>
    //   </MainContainer>
    // </StyledFotter>
    <footer className={classes['main-container']}>
      <div className={classes.subcontainer}>
        <div className={classes.child}>
          Logic Warriors
          <hr></hr>
          <MiniLogo />
        </div>
        <div className={classes.child}>
          Our GitHub Repo!
          <hr></hr>
          <GitHubLogo />
        </div>
        <div className={classes.child}>
          Links
          <hr></hr>
          {/* <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a> */}
        </div>
      </div>
      <p className={classes.copyright}>
        &copy; 2023 Chingu Voyage 44 Team 15. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
