/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styled from 'styled-components'
import words from "./ auxiliaries/Words"
import alfabet from "./ auxiliaries/Alfabet"
import Guess from './ auxiliaries/Guess'
import Game from './ auxiliaries/Game'
import Keyboard from './ auxiliaries/Keyboard'
import forca0 from "../images/forca0.png"
import forca1 from "../images/forca1.png"
import forca2 from "../images/forca2.png"
import forca3 from "../images/forca3.png"
import forca4 from "../images/forca4.png"
import forca5 from "../images/forca5.png"
import forca6 from "../images/forca6.png"

import "./style.css"
import "./reset.css"

let gameStart=false;
let chosenOne;
let selected=[];
alfabet.map((s, index)=>selected[index]='')

function App () {
    const [alfabets, setAlfabets] = useState(alfabet.map((a, index)=><keyboard-key key={index}>{a}</keyboard-key>))
    const [buttonUnderline, setButtonUnderline] = useState(<button onClick={()=>wordChooser()}>Escolher palavra!</button>)
    const [gibbet, setGibbet] = useState(<img src = {forca0} alt = ""/>)
    const gibbetArr = [forca0,forca1,forca2,forca3,forca4,forca5,forca6]
    const [inputGuess, setinputGuess] = useState("");

    let victory = 0;
    let error = 0,trueError=0;
    const [selectedClass, setSelectedClass] = useState(false)
    
    function randomValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function replaceAccent (text) {       
        text = text.toLowerCase();                                                         
        text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        text = text.replace(new RegExp('[Ç]','gi'), 'c');
        return text;                 
    }

    function verifyEqual(arrOne, arrTwo) {
        arrTwo.map((a,index)=>(a===arrOne[index])?victory++:true)
        if(victory===arrTwo.length){
            console.log('parabens')
            setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>wordChooser()}>Escolher palavra!</button><div className="green">{arrTwo}</div></div>)
            setAlfabets(alfabet.map((a, index)=><keyboard-key key={index}>{a}</keyboard-key>))
            setinputGuess('');
        }
    }

    function verifyEqualInput(inputs, arrOne) {
        const inputArr = inputs.split('')
        let inputStr = arrOne.join('')
        let inputArrFormated = replaceAccent(inputStr)

        inputArrFormated = inputArrFormated.split('')

        inputArr.map((a,index)=>(a===arrOne[index]||a===inputArrFormated[index])?victory++:true)

        if(victory===inputArr.length && inputs!==''){
            setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>wordChooser()}>Escolher palavra!</button><div className="green">{arrOne}</div></div>)
            setAlfabets(alfabet.map((a, index)=><keyboard-key key={index}>{a}</keyboard-key>))
            setinputGuess('');
        }
        else if (inputs===''){return}
        else{
            setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>wordChooser()}>Escolher palavra!</button><div className="red">{arrOne}</div></div>)
            setAlfabets(alfabet.map((a, index)=><keyboard-key key={index}>{a}</keyboard-key>))
            setGibbet(<img src = {gibbetArr[6]} alt = ""/>)
            setinputGuess('');
        }
    }

    function selectedKey (idx, arr, arr2, str) {
        selected[idx]=alfabet[idx]
        victory = 0
        error = 0

        const randomArrCopy = replaceAccent(str)
        const randomArr = randomArrCopy.split('')

        randomArr.map((a, index)=>(a===alfabet[idx])?arr2[index]=arr[index]:error++)

        if (error<randomArr.length){error = 0} else {trueError++}
        setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>wordChooser()}>Escolher palavra!</button><div>{arr2}</div></div>)
        setGibbet(<img src = {gibbetArr[trueError]} alt = ""/>)
        setAlfabets(alfabet.map((a,index)=>(a===alfabet[idx]||a===selected[index])?<keyboard-key-selected key={index}>{a}</keyboard-key-selected>:<keyboard-key key={index} onClick={()=>selectedKey(index, arr, arr2, str)}>{a}</keyboard-key>))
        verifyEqual(arr2,arr)

        if(trueError===6){
            setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>wordChooser()}>Escolher palavra!</button><div className="red">{arr}</div></div>)
            setAlfabets(alfabet.map((a, index)=><keyboard-key key={index}>{a}</keyboard-key>))
            setinputGuess('');
        }
    }
    
    function wordChooser () {
        selected = selected.map((s)=>s='')
        gameStart=true;
        trueError=0

        setGibbet(<img src = {gibbetArr[trueError]} alt = ""/>)
        const random = randomValue (0, words.length)

        const randomStr = words[random]
        chosenOne = randomStr.split('')
        console.log(chosenOne)
        const underlineArr = chosenOne.map((u)=>u='_')

        setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>wordChooser()}>Escolher palavra!</button><div>{underlineArr}</div></div>)
        setAlfabets(alfabet.map((a, index)=><keyboard-key key={index} onClick={()=>selectedKey(index, chosenOne,underlineArr, randomStr)}>{a}</keyboard-key>))
    }

    function atribuirValor(e) {
        setinputGuess(e.target.value)
    }

    return(
        <Content>
            <Game gibbet={gibbet} buttonUnderline={buttonUnderline}/>
            <Keyboard alfabets = {alfabets}/>
            <Guess verifyEqualInput={verifyEqualInput} atribuirValor={atribuirValor} inputGuess={inputGuess} chosenOne={chosenOne} gameStart={gameStart}/>
        </Content>
    )
}

export default App

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5vh;
    padding: 5%;
    font-family: 'Bungee Spice';
    font-size: 3vw;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;

    button {
    font-family: 'Bungee Spice';
    transition: 400ms;
    }
`