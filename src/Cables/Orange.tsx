import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const OrangeContainer = styled.div`
  ${tw`

    
    `}
`;

const OrangeStyle = styled.div`
  ${tw`
    flex
    items-center
 
    `}
`;

const OrangeBar = styled.div`
  ${tw`
    bg-[#f97316]
    h-14
    w-[30%]
       mt-1
 
    `}
`;

const WhiteBar = styled.div`
  ${tw`
    bg-gray-100
    h-14
    w-[30%]
    mt-1
    `}
`;

const Button = styled.div`
  margin-left: 15%;
  ${tw`
    h-14
    w-[40%]
    mt-1
    bg-gray-500
    rounded-xl
    items-center
    justify-center
    flex
    font-extrabold
    text-5xl
    
    `}
`;

const Text = styled.div`
  margin-left: 15%;
  ${tw`
    h-14
    w-[40%]
    mt-1
    bg-gray-500
    rounded-xl
    items-center
    justify-center
    flex
    font-extrabold
    text-2xl
    uppercase
    
    `}
`


export interface IProps {
  number: string | number;
}

const Orange: React.FC<IProps> = (props) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <OrangeContainer>
        <OrangeStyle>

          {show ? <OrangeBar /> : <WhiteBar />}
          {show ?
            <Text onClick={toggleShow}>
             Orange
            </Text> :
            <Button onClick={toggleShow}>
              {props.number}
            </Button>
          }

        </OrangeStyle>
      </OrangeContainer>
    </>
)
}

export default Orange
