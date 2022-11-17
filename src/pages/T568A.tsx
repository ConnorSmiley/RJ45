import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "@/components/Header";
import GreenWhite from "@/Cables/GreenWhite";
import Green from "@/Cables/Green";
import Orange from "@/Cables/Orange";
import OrangeWhite from "@/Cables/OrangeWhite";
import Blue from "@/Cables/Blue";
import BlueWhite from "@/Cables/BlueWhite";
import Brown from "@/Cables/Brown";
import BrownWhite from "@/Cables/BrownWhite";
import Link from "next/link";


const T568AContainer = styled.div`
  ${tw`
    h-screen
    w-screen

    `}
`;

const T568AStyle = styled.div`
  ${tw`
    bg-black
    w-full
    h-full 
    pt-[20%]
    
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
  number: string | number;
}

const T568B: React.FC<IT568BProps> = () => {

  return (
    <>
      <Header title="I-T568A"/>
        <Link href="T568B">
          <SwitchArrow>
            ⬌
          </SwitchArrow>
        </Link>

      <T568AContainer>
        <T568AStyle>
          <GreenWhite number="1" />
          <Green number="2" />
          <OrangeWhite number="3" />
          <Blue number="4" />
          <BlueWhite number="5" />
          <Orange number="6" />
          <BrownWhite number="7" />
          <Brown number="8" />
        </T568AStyle>
      </T568AContainer>
    </>
  );
};

export default T568B;
