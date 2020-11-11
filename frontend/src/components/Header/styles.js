import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  background: #7353ba;
  color: #fff;
  font-family: 'nunito';


  & a {
    font-weight: 400;
    color: #fff;
    text-decoration: none;
    font-size: 28px;
    box-sizing: border-box;
  }

  input {
    width: 320px;
    padding: 16px;
    border-radius: 26px;
    border: none;
    font-family: 'nunito';
    color: #0f1020;
  }

`;


export const HeaderLinks = styled.div`


  & a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding: 16px;
    border-radius: 12px;
    background: #2f195f;
    transition: all 200ms ease-in-out;
  }

  a:hover {
    opacity: 0.9;
  }
`;