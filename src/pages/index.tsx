import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";


const HomeContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    bg-black
    `}
`;

const HomeStyles = styled.div`
  ${tw`
  w-full
  h-full
  flex
    
    `}
`;

const HeaderContainer = styled.div`
  ${tw`
  h-16
  bg-gray-900
  flex
  items-center
  justify-center
  w-full
  text-3xl
  uppercase
  font-bold
  
    
    `}
`;

const Body = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    text-7xl
    font-bold
    text-white
    space-y-20
    `}
`;

const ButtonBody = styled.div`
  ${tw`
  bg-gray-500
  p-8
  rounded-3xl
  cursor-pointer
  hover:bg-pink-500  
    
    `}
`;

const IndexPage: NextPage = () => {

  return (
    <>
      <HeaderContainer>
        Select One
      </HeaderContainer>
      <HomeContainer>
        <HomeStyles>
          <Body>
            <ButtonBody>
              <Link href="T568A">
                T568A
              </Link>
            </ButtonBody>
            <ButtonBody>
              <Link href="T568B">
                T568B
              </Link>
            </ButtonBody>
          </Body>

        </HomeStyles>
      </HomeContainer>
    </>
  );
};

export default IndexPage;
