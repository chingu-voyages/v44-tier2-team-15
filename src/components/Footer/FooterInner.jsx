import MiniLogo from 'images/logo/MiniLogo';

import GitHubLogo from 'images/icons/GitHub';

import {
  StyledChildContainer,
  StyledCopyrightText,
  StyledSubContainer,
} from './Footer.styled';

export default function FooterInner() {
  return (
    <>
      <StyledSubContainer>
        <StyledChildContainer>
          Logic Warriors
          <hr></hr>
          <MiniLogo />
        </StyledChildContainer>
        <StyledChildContainer>
          Our GitHub Repo!
          <hr></hr>
          <GitHubLogo />
        </StyledChildContainer>
        <StyledChildContainer>
          Links
          <hr></hr>
        </StyledChildContainer>
      </StyledSubContainer>
      <StyledCopyrightText>
        &copy; 2023 Chingu Voyage 44 Team 15. All rights reserved.
      </StyledCopyrightText>
    </>
  );
}
