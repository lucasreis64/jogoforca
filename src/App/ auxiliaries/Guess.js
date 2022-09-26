import styled from 'styled-components';

export default function Guess (props) {
    return (
        <GuessDiv>
                <label>Já sei a palavra!</label>
                <input value={props.inputGuess} onChange={props.atribuirValor}/>
                <button onClick={(props.gameStart===true)?()=>props.verifyEqualInput(props.inputGuess, props.chosenOne):()=>console.log(props.gameStart)}>Chutar</button>
        </GuessDiv>
    )
}

const GuessDiv = styled.div`
	margin: auto;
    display: flex;
    align-items: center;
    gap: 5vw;
    width: 80%;

    button {
        font-size: 3vh;
        width: 30%;
        height: 4vh;
        border-radius: 20px;
        background-color: rgb(253, 253, 253);
        -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, -17px 22px 25px 2px rgba(0, 0, 0, 0.42);
        box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, -17px 22px 25px 2px rgba(0, 0, 0, 0.42);
    }

    label {
        filter: drop-shadow(-18px 27px 63px #000);
        text-shadow: 0.1em 0.2em 0.5em black;
        width: 20vw
    }

    input {
        margin-left: 3%;
        font-family: "Bungee spice";
        text-shadow: -0.1em 0.18em 0.1em black;
        border: 0.3vh solid brown;
        border-radius: 20px;
        font-size: 3vw;
        height: 4.5vh;
        width: 30vw;
        -webkit-box-shadow: 0px 3px 0px 2px rgba(0, 0, 0, 0.1), 0px 6px 0px 4px rgba(0, 0, 0, 0.1), 0px 9px 0px 6px rgba(0, 0, 0, 0.1), 0px 12px 0px 8px rgba(0, 0, 0, 0.1), 0px 15px 0px 10px rgba(0, 0, 0, 0.1), 0px 18px 0px 12px rgba(0, 0, 0, 0.1), 0px 21px 0px 14px rgba(0, 0, 0, 0.1), 0px 24px 0px 16px rgba(0, 0, 0, 0.1), 0px 27px 0px 18px rgba(0, 0, 0, 0.1), 0px 30px 0px 20px rgba(0, 0, 0, 0.1), inset 5px 5px 15px 5px rgba(7, 7, 7, 0);
        box-shadow: 0px 3px 0px 2px rgba(0, 0, 0, 0.1), 0px 6px 0px 4px rgba(0, 0, 0, 0.1), 0px 9px 0px 6px rgba(0, 0, 0, 0.1), 0px 12px 0px 8px rgba(0, 0, 0, 0.1), 0px 15px 0px 10px rgba(0, 0, 0, 0.1), 0px 18px 0px 12px rgba(0, 0, 0, 0.1), 0px 21px 0px 14px rgba(0, 0, 0, 0.1), 0px 24px 0px 16px rgba(0, 0, 0, 0.1), 0px 27px 0px 18px rgba(0, 0, 0, 0.1), 0px 30px 0px 20px rgba(0, 0, 0, 0.1), inset 5px 5px 15px 5px rgba(7, 7, 7, 0);
        outline: none;
        padding: 0 1vw;
        box-sizing: border-box;
        background-color: rgb(226, 226, 226);
    }
    label:hover{
        font-size: 3.5vw;
    }

    input:hover{
        height: 6vh;
        font-size: 4vh;
    }

    button:hover{
        font-size: 3.3vh;
        width: 23%;
        height: 5vh;
    }

    @media (max-width: 650px) { 
    
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5vw;
        width: 100%;
    
    button {
        font-size: 4.5vw;
        width: 30%;
        height: 7vw;
        border-radius: 20px;
    }
    
    label {
        font-size: 4.3vw;
    }
    
    input {
        margin-left: 3%;
        font-size: 3vw;
        height: 3vh;
        width: 30vw;
        outline: none;
        padding: 0 1vw;
    }

    label:hover{
        font-size: 3.5vw;
    }
    
    input:hover{
        height: 4vh;
        width: 40%;
        font-size: 4vh;
    }
    
    button:hover{
        font-size: inherit;
        width: inherit;
        height: inherit;
    }

    }
`;
