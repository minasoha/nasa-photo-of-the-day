import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";


const kf = keyframes`


`

const ArticleTitle = styled.div`
    

`
const Image = styled.div`

    display: flex;
    justify-content: left;
    background-color: ${pr => pr.theme.textBackground};

`


export default function Body(props){


    const { date, explanation, title, url} = props;


    return (
        <div>
            <div>
                <Image> 
                    <div>
                    <h3>{title}</h3>
                    <p>{date}</p>
                    <p>Explanation: {explanation}</p>
                    </div>
                
                 
                    <img src={url} height="700" width="500" alt="Astronomy pic of the day"/>
                </Image>
            </div>
        </div>
    )



}