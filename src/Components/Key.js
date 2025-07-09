import React from "react";
import './key.css';

const Key = ({Content, BtnBgColor, TypeContent}) => {
    return(
            <button onClick={TypeContent} className={BtnBgColor}>{Content}</button>
    )
}

export default Key;