import styled from 'styled-components';

export const CardContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 16px 0;
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
