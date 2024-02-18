import { useSelector } from 'react-redux';
import {
  HeaderBox,
  NavLinkStyled,
  NavList,
  PrivatNav,
} from './Navigation.styled';
import { selectAuthAuthenticated } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <>
      <HeaderBox>
        <div className="container">
          <nav>
            {authenticated ? (
              <PrivatNav>
                <NavLinkStyled to="contacts">Contacts</NavLinkStyled>
                <UserMenu />
              </PrivatNav>
            ) : (
              <NavList>
                <li>
                  <NavLinkStyled to="login">Log in</NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to="register">Register</NavLinkStyled>
                </li>
              </NavList>
            )}
          </nav>
        </div>
      </HeaderBox>
    </>
  );
};
