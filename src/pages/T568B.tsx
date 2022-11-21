import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "@/components/Header";
import Orange from "@/Cables/Orange";
import Green from "@/Cables/Green";
import Blue from "@/Cables/Blue";
import Brown from "@/Cables/Brown";
import OrangeWhite from "@/Cables/OrangeWhite";
import BlueWhite from "@/Cables/BlueWhite";
import GreenWhite from "@/Cables/GreenWhite";
import BrownWhite from "@/Cables/BrownWhite";
import Link from "next/link";

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
    flex
    flex-col
    justify-center
    `}

`;

const SwitchArrow = styled.div`
  ${tw`
    absolute
    h-10
    w-12
    right-4
    bg-green-400
    px-6
    pb-1
    my-2
    flex
    justify-center
    items-center
    rounded-xl
    text-3xl
    
    cursor-pointer
    hover:bg-pink-500
    
    `}
`;

export interface IT568BProps {
  number:number

}

const T568B: React.FC<IT568BProps> = () => {

  return (
    <>
      <Header title="I-T568B"/>
      <Link href="T568A">
        <SwitchArrow>
          ⬌
        </SwitchArrow>
      </Link>
      <T568BContainer>
        <T568BStyle>
          <OrangeWhite number="1"/>
          <Orange number="2"/>
          <GreenWhite number="3"/>
          <Blue number="4"/>
          <BlueWhite number="5"/>
          <Green number="6"/>
          <BrownWhite number="7"/>
          <Brown number="8"/>

        </ T568BStyle>
      </T568BContainer>
    </>
  );
};

export default T568B;
