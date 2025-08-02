import React, { useCallback, useState } from "react";
import "./CalcStyles.css";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaDivide } from "react-icons/fa6";
import { FaPlusMinus } from "react-icons/fa6";

const Calculator = () => {
    const numbers1 = ['9', '8', '7'];
    const numbers2 = ['6', '5', '4'];
    const numbers3 = ['3', '2', '1'];

    const [ input ,setInput]= useState('0');

    function the_input (index) {

        if(input === '0' && index != '0'){
            setInput(index)
        }
        else {
            setInput(input +index)
        }


    }

    function reslut (index) {
        if( index ==='=')
        {
        const evaled =   eval(input);
        setInput(String(evaled))
        }
    }

    function deletetNum (index){
        if(index ==="C"){
            setInput('0')
        }
    }

    function deleteLasttNum (index){
        if(index ==='CE')
            {if(input.length >= 2){
            setInput(input.slice(0,-1))
        }
        else{setInput("0")}}
    }

    function addMinus (index){
        if(index === '+-' && input[0] != '-' && input[0] != '0'){
            setInput('-' +input)
        }
        else if(input ==='0'){
            setInput(input)
        }
        else{ setInput(input.slice(1,input.length))}
    }


    return (
        <div className="main_project">
            <div className="Container3">
                <header className="screen"><div className="screen_input">{input}</div>
                    </header>
                <main className="buttons1">
                    <div onClick={() => deleteLasttNum('CE')} className="buttonBig"><button className="button margin">CE</button></div>
                    <div onClick={() => deletetNum('C')} className="buttonBig"><button className="button">C</button></div>
                    <div className="buttonBig"><button className="button margin"><FaDeleteLeft /></button></div>
                    <div onClick={() => the_input('/')} className="buttonBig"><button className="button div"><FaDivide /></button></div>

                    {numbers1.map((num, index) => (
                        <div onClick={() => the_input(num)} className="buttonBig" key={index}><button className="button">{num}</button></div>
                    ))}
                    <div onClick={() => the_input('*')} className="buttonBig"><button className="button">x</button></div>

                    {numbers2.map((num, index) => (
                        <div onClick={() => the_input(num)} className="buttonBig" key={index}><button className="button">{num}</button></div>
                    ))}
                    <div onClick={() => the_input('-')} className="buttonBig"><button className="button">-</button></div>

                    {numbers3.map((num, index) => (
                        <div onClick={() => the_input(num)} className="buttonBig" key={index}><button className="button">{num}</button></div>
                    ))}
                    <div onClick={() => the_input('+')} className="buttonBig"><button className="button">+</button></div>
                    <div onClick={() => addMinus('+-')} className="buttonBig"><button className="button"><FaPlusMinus /></button></div>
                    <div onClick={() => the_input(0)} className="buttonBig"><button className="button">0</button></div>
                    <div className="buttonBig"><button className="button">.</button></div>
                    <div onClick={ () =>reslut('=')} className="buttonBig"><button className="button">=</button></div>
                </main>
            </div>
        </div>
    );
};

export default Calculator;
