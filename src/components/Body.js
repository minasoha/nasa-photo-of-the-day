import React from "react";
import axios from "axios";


export default function (props){

    const { date, explanation, hdurl, title } = props;

    return (

        <div className="bodyContainer">
            <div className="leftContent">
                <h3>{title}</h3>
                <p>{date}</p>
                <p>Explanation: {explanation}</p>
            </div>
            <div className="rightContent">
                <img src={hdurl} alt="Astronomy pic of the day"/>
            </div>


        </div>
    )








}