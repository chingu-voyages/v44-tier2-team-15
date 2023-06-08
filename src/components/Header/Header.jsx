import Logo from 'components/Logo';
import {
  HeaderListStyled,
  HeaderStyled,
  ListItemStyled,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <HeaderListStyled>
        <li>
          <ListItemStyled to="/">About</ListItemStyled>
        </li>
        <li>
          <ListItemStyled to="game">Game</ListItemStyled>
        </li>
      </HeaderListStyled>
    </HeaderStyled>
  );
};

export default Header;
