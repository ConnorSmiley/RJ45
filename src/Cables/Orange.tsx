import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro"

const OrangeContainer = styled.div`
    ${tw`

    
    `}
`

const OrangeStyle = styled.div`
    ${tw`
    flex
    items-center
 
    `}
`

const OrangeBar = styled.div`
    ${tw`
    bg-[#f97316]
    h-14
    w-[30%]
    mt-10
    
    `}
`

const WhiteBar = styled.div`
    ${tw`
    bg-gray-100
    h-14
    w-[30%]
    mt-10
    `}
`

const Button = styled.div`
    margin-left: 15%;
    ${tw`
    h-14
    w-[40%]
    mt-10
    bg-gray-500
    rounded-xl
    
    `}
`

export interface IOrangeProps {

}

const Orange: React.FC<IOrangeProps> = () => {
    const [show, setShow] = useState(false)
    const toggleShow = () => {
        setShow(!show);
    };

    return(
       <>
        <OrangeContainer>
            <OrangeStyle>

                {show ? <OrangeBar /> : <WhiteBar/>}

                <Button onClick={toggleShow}/>
            </OrangeStyle>
        </OrangeContainer>
       </>
    )
}

export default Orange
