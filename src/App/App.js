/* eslint-disable no-unused-vars */
import { useState } from "react"
import words from "./ auxiliaries/Words"
import alfabet from "./ auxiliaries/Alfabet"
import forca0 from "../images/forca0.png"
import forca1 from "../images/forca1.png"
import forca2 from "../images/forca2.png"
import forca3 from "../images/forca3.png"
import forca4 from "../images/forca4.png"
import forca5 from "../images/forca5.png"
import forca6 from "../images/forca6.png"

import "./style.css"
import "./reset.css"

export default function App () {
/*     const inicialKey = <div key={index} className = "keyboard-key">{a}</div>
    const functionalKey = <div key={index} onClick={()=>selectedKey(index, randomArr,underlineArr, randomStr)} className = "keyboard-key">{a}</div> */
    const [alfabets, setAlfabets] = useState(alfabet.map((a, index)=><div key={index} className = "keyboard-key">{a}</div>))
    const [answer,setAnswer] = useState ('')
    const [buttonUnderline, setButtonUnderline] = useState(<button onClick={()=>GameStart()}>Escolher palavra!</button>)
    const [gibbet, setGibbet] = useState(<img src = {forca0} alt = ""/>)
    const gibbetArr = [forca0,forca1,forca2,forca3,forca4,forca5,forca6]
    const [inputButtom, setInputButtom] = useState(<button>Chutar</button>)
    let victory = 0;
    let error = 0,trueError=0;
    let chosenOne;
    
    function randomValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function replaceAccent (text)
    {       
        text = text.toLowerCase();                                                         
        text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        text = text.replace(new RegExp('[Ç]','gi'), 'c');
        return text;                 
    }

    function verifyEqual(arrOne, arrTwo){
        arrTwo.map((a,index)=>(a===arrOne[index])?victory++:true)
        if(victory===arrTwo.length){
            console.log('parabens')
            setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>GameStart()}>Escolher palavra!</button><div className="green">{arrTwo}</div></div>)
            setAlfabets(alfabet.map((a, index)=><div key={index} className = "keyboard-key">{a}</div>))
        }
    }

    function verifyEqualInput(inputs, arrOne) {
        console.log("inputs: ",inputs)
        console.log("arrOne",arrOne)
        const inputArr = inputs.split('')
        console.log("inputArr",inputArr)
        inputArr.map((a,index)=>(a===arrOne[index])?victory++:true)
        if(victory===inputArr.length && inputs!==''){
            console.log('parabens')
            setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>GameStart()}>Escolher palavra!</button><div className="green">{inputArr}</div></div>)
            setAlfabets(alfabet.map((a, index)=><div key={index} className = "keyboard-key">{a}</div>))
        }
        if (inputs===''){return}
        else{
            console.log('wasted')
            setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>GameStart()}>Escolher palavra!</button><div className="red">{arrOne}</div></div>)
            setAlfabets(alfabet.map((a, index)=><div key={index} className = "keyboard-key">{a}</div>))
        }
    }

    function selectedKey (idx, arr, arr2, str) {
        victory = 0
        error = 0
        console.log(alfabet[idx])
        const randomArrCopy = replaceAccent(str)
        console.log(randomArrCopy)
        const randomArr = randomArrCopy.split('')
        randomArr.map((a, index)=>(a===alfabet[idx])?arr2[index]=arr[index]:error++)
        if (error<randomArr.length){error = 0} else {trueError++}
        setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>GameStart()}>Escolher palavra!</button><div>{arr2}</div></div>)
        setGibbet(<img src = {gibbetArr[trueError]} alt = ""/>)
        setAlfabets(alfabet.map((a,index)=>(a===alfabet[idx])?<div key={index} className = "keyboard-key">{a}</div>:<div key={index} onClick={()=>selectedKey(index, arr, arr2, str)} className = "keyboard-key">{a}</div>))
        console.log(arr2)
        console.log(randomArr)
        verifyEqual(arr2,arr)
        console.log(victory,arr2.length)
        console.log("error",trueError)

        if(trueError===6){
            console.log('wasted')
            setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>GameStart()}>Escolher palavra!</button><div className="red">{arr}</div></div>)
            setAlfabets(alfabet.map((a, index)=><div key={index} className = "keyboard-key">{a}</div>))
        }
    }
    
    function wordChooser () {
        trueError=0
        setGibbet(<img src = {gibbetArr[trueError]} alt = ""/>)
        const random = randomValue (0, words.length)
        console.log(random)
        const randomStr = words[random]
        chosenOne = randomStr.split('')
        console.log("chosenOne",chosenOne)
        const underlineArr = chosenOne.map((u)=>u='_')
        
        setButtonUnderline(<div className = "buttom-underline"><button onClick={()=>GameStart()}>Escolher palavra!</button><div>{underlineArr}</div></div>)
        setAlfabets(alfabet.map((a, index)=><div key={index} onClick={()=>selectedKey(index, chosenOne,underlineArr, randomStr)} className = "keyboard-key">{a}</div>))
        setInputButtom(<button onClick={verifyEqualInput(answer, chosenOne)}>Chutar</button>)
    }

    function GameStart () {
        wordChooser();
    }

    return(
        <div className="content">
            <div className="game-visual">
                {gibbet}
                {buttonUnderline} 
            </div>
            <div className="keyboard">
                {alfabets}
            </div>
            <div className="guess">
                <label>Já sei a palavra!</label>
                <input type = "text" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
                {inputButtom}
            </div>
        </div>
    )
}

