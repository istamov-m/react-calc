import React from "react";
import Key from './Key';
import { values } from "../values";
import './keys.css'

const Keys = ({KeyPad, Color, TypeOne, TypeTwo, TypeThree, TypeFour, TypeFive, TypeSix, TypeSeven, TypeEight, TypeNine, TypeZero, TypePlus, TypeMinus, TypeTimes, TypeDivision, TypeDel, TypeDot, TypeReset, TypeEqual}) => {
    // const keyComponent = values.map((user, i) => {
    //     return(
    //         <Key
    //             TypeContent={InputContent}
    //             BtnBgColor={Color}
    //             Content={values[i].key} 
    //         />
    //     )
    // })

    return (
        <div className={`keypad-bg ${KeyPad}`}>
            <Key
             BtnBgColor={Color}
             Content={"7"} 
             TypeContent={TypeSeven}
             />
             <Key
             BtnBgColor={Color}
             Content={"8"} 
             TypeContent={TypeEight}
             />
             <Key
             BtnBgColor={Color}
             Content={"9"} 
             TypeContent={TypeNine}
             />
             <Key
             BtnBgColor={Color}
             Content={"DEL"} 
             TypeContent={TypeDel}
             />
             <Key
             BtnBgColor={Color}
             Content={"4"} 
             TypeContent={TypeFour}
             />
             <Key
             BtnBgColor={Color}
             Content={"5"} 
             TypeContent={TypeFive}
             />
             <Key
             BtnBgColor={Color}
             Content={"6"} 
             TypeContent={TypeSix}
             />
             <Key
             BtnBgColor={Color}
             Content={"+"} 
             TypeContent={TypePlus}
             />
             <Key
             BtnBgColor={Color}
             Content={"1"} 
             TypeContent={TypeOne}
             />
             <Key
             BtnBgColor={Color}
             Content={"2"} 
             TypeContent={TypeTwo}
             />
             <Key
             BtnBgColor={Color}
             Content={"3"} 
             TypeContent={TypeThree}
             />
             <Key
             BtnBgColor={Color}
             Content={"-"} 
             TypeContent={TypeMinus}
             />
             <Key
             BtnBgColor={Color}
             Content={"."} 
             TypeContent={TypeDot}
             />
             <Key
             BtnBgColor={Color}
             Content={"0"} 
             TypeContent={TypeZero}
             />
             <Key
             BtnBgColor={Color}
             Content={"/"} 
             TypeContent={TypeDivision}
             />
             <Key
             BtnBgColor={Color}
             Content={"x"} 
             TypeContent={TypeTimes}
             />
             <Key
             BtnBgColor={Color}
             Content={"RESET"} 
             TypeContent={TypeReset}
             />
             <Key
             BtnBgColor={Color}
             Content={"="} 
             TypeContent={TypeEqual}
             />
        </div>
    )
}

export default Keys;