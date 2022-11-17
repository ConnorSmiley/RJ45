import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const HeaderContainer = styled.div`
  ${tw`
    absolute
    bg-gray-900
    h-14
    w-full
    `}
`;

const HeaderStyle = styled.div`
  ${tw`
    h-full
    w-full
    text-white
    font-extrabold
    flex
    items-center
    justify-center
    text-3xl
    
    `}
`;


export interface IHeaderProps {
  title: string | null;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {

  return (
    <>
      <HeaderContainer>
        <HeaderStyle>
          {title}
        </HeaderStyle>
      </HeaderContainer>
    </>
  );
};

export default Header;
