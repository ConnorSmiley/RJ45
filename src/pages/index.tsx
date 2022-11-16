import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "@/components/Header";
import Link from "next/link";


const HomeContainer = styled.div`
  ${tw`
    w-screen
    h-screen
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
    
    `}
`;

const Body = styled.div`
    ${tw`
    w-full
    h-full
    mt-14
    flex
    flex-col
    justify-center
    items-center
    text-7xl
    font-bold

    
    `}
`


const IndexPage: NextPage = () => {

  return (
    <>
      <HomeContainer>
        <HomeStyles>
          <HeaderContainer>
            <Header title={null}/>
          </HeaderContainer>
          <Body>
          <Link href="T568A">
            T568A
          </Link>

          <Link href="T568B">
            T568B
          </Link>
          </Body>

        </HomeStyles>
      </HomeContainer>
    </>
  );
};

export default IndexPage;
