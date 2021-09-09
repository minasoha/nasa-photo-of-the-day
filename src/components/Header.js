import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";



const kf = keyframes`
    0% {

        padding-left: 700px;
    }
    100% {
        opacity: 1;
        padding-left: 0px;
        justify-content: left;
    }
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }

`;

const Rotate = styled.div`

  display: flex;
  animation: ${kf} 2.5s linear ;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Wrapper = styled.div`

  display: flex;
  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.white};
  justify-content: center;
  text-align: center; 
  align-items: center;
`

const Title = styled.h1`

    display: flex;
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};
    font-size: 1rem;
    justify-content: center;
    

`


export default function Header(){

    
    


    return(

        <div>
            <Wrapper>
            <div >
                <Title>
                <h1>Astronomy Photo Of The Day</h1>
                </Title>
            </div>
            
            <div>
            <Rotate>
                <img src="nasa-logo-web-rgb.png" height="150" width= "300" alt="nasa logo"/>
            </Rotate>
            </div>
            </Wrapper>
            
         </div>
         
    )   
}