import styled from 'styled-components';
export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  margin: 0 auto;
  padding: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  border-radius: 7px;
  box-shadow: rgb(16, 53, 172) 0px 0px 7px inset;
  background-color: rgba(135, 206, 250, 0.3);

  & p {
    font-weight: 700;
    font-size: 56px;
    line-height: 1.07;
    letter-spacing: 0.02em;
    text-align: center;
    max-width: 1000px;
  }

  & span {
    background-image: linear-gradient(to bottom, #00bfff, #000080);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;
