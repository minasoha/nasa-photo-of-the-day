import React, { useEffect, useState } from "react";


export default function Body(props){


    const { date, explanation, title, url} = props;


    return (
        <div>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>Explanation: {explanation}</p>
            <img src={url} alt="Astronomy pic of the day"/>

        </div>
    )



}