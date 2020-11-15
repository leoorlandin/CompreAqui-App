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
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    font-size: 28px;
    box-sizing: border-box;

    & svg {
      margin-right: 5px;
    }
  }

  input {
    width: 320px;
    padding: 16px;
    border-radius: 26px;
    border: none;
    font-family: 'nunito';
    color: #0f1020;
  }

  a button {
    display: flex;
    align-items: center;

    & svg{
      margin-left: 5px;
    }
  }

`;
