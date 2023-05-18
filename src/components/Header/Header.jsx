import LogoSvg from 'images/logo/LogoSvg';
import { NavLink } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';
import classes from './Header.module.css';




const Header = () => {


  return (
    <HeaderStyled>
      <LogoSvg></LogoSvg>
      <ul className={classes.list}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="game"
            end
          >
            Game
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      
      
    </HeaderStyled>
  );
};

export default Header;
