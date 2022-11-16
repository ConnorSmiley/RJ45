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

const SwitchArrow = styled.div`
  ${tw`
    absolute
    right-4
    bg-gray-400
    px-2
    my-2
    items-center
    justify-center
    inset-y-0
    rounded-xl
    
    `}
`;

export interface IHeaderProps {
  title:string | null
}

const Header: React.FC<IHeaderProps> = ({title}) => {

  return (
    <>
      <HeaderContainer >
        <HeaderStyle >
          {title}
          <SwitchArrow>
            ⬌
          </SwitchArrow>
        </HeaderStyle>
      </HeaderContainer>
    </>
  );
};

export default Header;
