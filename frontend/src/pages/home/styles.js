import styled from 'styled-components';

export const Container = styled.section`
  background: #fff;
  padding: 32px;
  margin: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  & table {
    border-spacing: 0;
  }

  & table thead tr th{
    font-size: 32px;
    text-align: center;
  }

  td, th {
    padding: 16px;
    border-bottom: 1px solid #d9d9d9; 
  }
`