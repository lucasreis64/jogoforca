import { useState } from "react"
import words from "./ auxiliaries/Words"
import alfabet from "./ auxiliaries/Alfabet"
import forca0 from "../images/forca0.png"
import "./style.css"
import "./reset.css"

export default function App () {
    const wordsMap = alfabet.map((w)=><div class = "keyboard-key">{w}</div>)
    return(
        <div className="content">
            <div className="game-visual">
                <img src = {forca0} alt = ""/>
                <button>Escolher palavra!</button>
            </div>
            <div className="keyboard">
                {wordsMap}
            </div>
            <div className="guess">
                <label>Já sei a palavra!</label>
                <input type = "text"/>
                <button>Chutar</button>
            </div>
        </div>
    )
}