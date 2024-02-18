import styled from 'styled-components';

export const LogoutBox = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  & p {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 24px;
    -webkit-background-clip: text;
    background-clip: text;
    color: #1035ac;
  }
  & button {
    text-transform: uppercase;
    font-size: 18px;
    padding: 7px;
    border-radius: 5px;
    background-color: #1035ac;
    color: white;
    font-weight: 600;
    &:is(:focus, :hover) {
      color: white;
      background-color: #042285;
    }
  }
`;
