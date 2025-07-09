import React from "react";
import './theme.css';

const Theme = ({bgChangeM, bgChangeL, bgChangeP, swtchColor, swtchBgColor, fontColor}) => {
    return(
        <div className="head">
            <h1 className={`${fontColor}`}>calc</h1>


            <div className="theme">
                <h4 className={`${fontColor}`}>THEME</h4>
                <div className="switch">
                    <p className={`${fontColor}`}>1 2 3</p>
                    <div className={`switch-theme ${swtchBgColor}`}>
                        <input type="radio" onChange={bgChangeM} id="switch-left" name="switch" value="left"/>
                        <input type="radio" onChange={bgChangeL} id="switch-center" name="switch" value="center"/>
                        <input type="radio" onChange={bgChangeP} id="switch-right" name="switch" value="right"/>
                        
                        <div class="switch-labels">
                            <label for="switch-left"></label>
                            <label for="switch-center"></label>
                            <label for="switch-right"></label>
                        </div>

                        <div class={`switch-slider ${swtchColor}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theme;