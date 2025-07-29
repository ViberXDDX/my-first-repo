import React, { useState } from "react";
import {UseState} from "react";
import Child from "../child/child";
const Parent = () => {

    let [num, setNum] = useState(0);

    function increaseNum(){
        setNum(num+1);
    }

    return <>
        <div>
            <h1>Number of clicks:</h1>
            <p onClick={increaseNum}> <Child number ={num}/></p>
        </div>
    </>;
};

export default Parent;
