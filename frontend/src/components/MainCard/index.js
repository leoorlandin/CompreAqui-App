import React from 'react';

import * as S from './styles';

const MainCard = ({ children, sectionTitle }) => {
  return (
    <S.CardSection>
      <h1>{sectionTitle}</h1>
      {children}
    </S.CardSection>
  );
};

export default MainCard;