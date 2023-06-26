import React from "react";
import { Context } from "../App.jsx";
import {useContext} from "react";

const Form = () => {
    const theme = useContext(Context)
    
    return(
        <div>
            <h1>hi</h1>
            <button onClick={()=>console.log(theme)} >h</button>
        </div>
    )
}

export {Form}