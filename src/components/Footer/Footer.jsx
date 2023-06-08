import MiniLogo from '../Logo/MiniLogo';
import GitHub from './GitHub';

import {
  StyledFooter,
  StyledChildContainer,
  StyledCopyrightText,
  StyledSubContainer,
  DevLinkItem,
  DevLinkList,
  DevLink,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSubContainer>
        <StyledChildContainer>
          Logic Warriors
          <hr></hr>
          <MiniLogo />
        </StyledChildContainer>
        <StyledChildContainer>
          Our GitHub Repo!
          <hr></hr>
          <GitHub />
        </StyledChildContainer>
        <StyledChildContainer>
          Links
          <hr></hr>
          <DevLinkList>
            <DevLinkItem>
              <DevLink
                to={'https://github.com/olhazamlynska'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Olya Zamlynska
              </DevLink>
            </DevLinkItem>
            <DevLinkItem>
              <DevLink
                to={'https://github.com/wayungi'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Francis Wayungi
              </DevLink>
            </DevLinkItem>
            <DevLinkItem>
              <DevLink
                to={'https://github.com/hakanurtimur'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hakan Urtimur
              </DevLink>
            </DevLinkItem>
          </DevLinkList>
        </StyledChildContainer>
      </StyledSubContainer>
      <StyledCopyrightText>
        &copy; 2023 Chingu Voyage 44 Team 15. All rights reserved.
      </StyledCopyrightText>
    </StyledFooter>
  );
};

export default Footer;
