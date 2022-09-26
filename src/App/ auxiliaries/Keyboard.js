import styled from 'styled-components';

export default function Keyboard (props) {

    return (
        <KeyboardDiv div>
                {props.alfabets}
        </KeyboardDiv>
    )
    
}


const KeyboardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 60%;
    gap: 1vh;


    keyboard-key {
        border-radius: 5px;
        width: 3.5vw;
        height: 3.5vw;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, -17px 22px 25px 2px rgba(0, 0, 0, 0.42);
        box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, -17px 22px 25px 2px rgba(0, 0, 0, 0.42);
    }

    keyboard-key-selected{
        border-radius: 5px;
        width: 4vw;
        height: 4vw;
        background-color: black;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, -17px 22px 25px 2px rgba(0, 0, 0, 0.42);
        box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, -17px 22px 25px 2px rgba(0, 0, 0, 0.42);
    }

    keyboard-key:hover {
        width: 4vw;
        height: 4vw;
    }

    @media (max-width: 650px) { 
        width: 80%;
        gap: 1.5vh;
        
        keyboard-key {
            width: 7vw;
            height: 7vw;
            font-size: 7vw;
        }
        keyboard-key-selected{
            background-color: black;
            width: 7.5vw!important;
            height: 7.5vw!important;
        }

        keyboard-key:hover {
            width: 8vw;
            height: 8vw;
        }
    }
`

    /*background-color: black;
    width: ;
    height: 5vw; */