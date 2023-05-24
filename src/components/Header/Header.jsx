import LogoSvg from 'images/logo/LogoSvg';

import {
  HeaderListStyled,
  HeaderStyled,
  ListItemStyled,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <LogoSvg />
      <HeaderListStyled>
        <li>
          <ListItemStyled to="game">Game</ListItemStyled>
        </li>
        <li>
          <ListItemStyled to="/">About</ListItemStyled>
        </li>
      </HeaderListStyled>
    </HeaderStyled>
  );
};

export default Header;
