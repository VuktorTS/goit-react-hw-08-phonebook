import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBox = styled.header`
  margin-bottom: 30px;
  border-bottom: 1px solid #ffbd33;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  & nav {
    width: 100%;
    margin: auto;
  }
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  justify-content: space-around;
`;
export const NavLinkStyled = styled(NavLink)`
  font-size: 24px;
  color: #1035ac;
  -webkit-background-clip: text;
  background-clip: text;
  padding: 24px 0;
  display: inline-block;
  font-weight: 700;
`;

export const PrivatNav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;
