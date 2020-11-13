import styled from 'styled-components';

export const CardContent = styled.div`

  display: flex;
  flex-direction: column;

`;

export const ProductField = styled.div`
  /* margin: 20px 0; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px 0;

  &:last-child {
    border: none;
    margin-bottom: 16px;
  }

`;

export const FieldTitle = styled.div`
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: #777;
`;

export const FieldValue = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 18px;
`;
