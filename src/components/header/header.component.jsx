import React from "react";
import * as S from "./header.styles";

const Header = ({ onLocalStorage, onGnews }) => {
  return (
    <S.HeaderWrapper>
      <S.PageTitle>CODE CHALLENGE</S.PageTitle>
      <S.MenuWrapper onLocalStorage={onLocalStorage} onGnews={onGnews}>
        <S.CustomLink id="local-storage" to="/">
          LOCAL STORAGE
        </S.CustomLink>
        <S.CustomLink id="gnews" to="/gnews">
          GNEWS
        </S.CustomLink>
      </S.MenuWrapper>
    </S.HeaderWrapper>
  );
};
export default Header;
