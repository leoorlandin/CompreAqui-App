import styled from 'styled-components';

export const MainHeader = styled.header`
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

  a button {
    display: flex;
    align-items: center;

    & svg{
      margin-left: 5px;
    }
  }
`

export const FilterForm = styled.form`
  input {
    width: 320px;
    padding: 16px;
    border-radius: 26px;
    border: none;
    font-family: 'nunito';
    color: #0f1020;
  }
`;

export const CardContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 32px 0;
  font-size: 16px;

  h2 {
    font-size: 24px;
  }
`;

export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableRow = styled.div`
  display: flex;
  padding: 25px 0;

  & a {
    text-decoration: none;
    font-weight: bold;
    color: #7353ba;
  }
`;
