import styled from 'styled-components';

export const CardContent = styled.section`
  display: flex;
  text-align: center;
  justify-content: space-around;

   button {
    max-width: 80%;
    /* margin: 8px 0; */
    padding: 6px 0;
    font-size: 14px;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 300px;

  & :last-child{
    border: none;
  }
`;

export const StyledLi = styled.li`
  font-size: 16px;
`;
