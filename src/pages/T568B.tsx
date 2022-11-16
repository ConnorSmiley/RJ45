import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "@/components/Header";
import Orange from "@/Cables/Orange";

const T568BContainer = styled.div`
  ${tw`
       h-screen
    w-screen 
    `}
`;

const T568BStyle = styled.div`
  ${tw`
    bg-black
    w-full
    h-full 
    pt-14
    `}

`;


export interface IT568BProps {

}

const T568B: React.FC<IT568BProps> = () => {

  return (
    <>
      <Header title="I-T568B" />
      <T568BContainer>
        <T568BStyle>
         <Orange />

        </ T568BStyle>
      </T568BContainer>
    </>
  );
};

export default T568B;
