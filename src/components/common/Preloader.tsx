import React from 'react';
import preloader from "../../assets/images/preloader.gif";

export const Preloader = () => {
    return <>
        <img src={preloader} width={"262px"} height={"262px"} alt={"preloader"}/>
    </>
};