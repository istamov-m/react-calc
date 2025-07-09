import React from "react";
import './inputSpace.css'

const InputSpace = ({inptBgColor, numContent}) => {
    return(
        <div>
            <p className={`input-space ${inptBgColor}`}>{numContent}</p>
        </div>
    )
}

export default InputSpace;