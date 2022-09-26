import styled from "styled-components"

export default function Game(props) {
    return (
        <GameVisual>
                {props.gibbet}
                {props.buttonUnderline} 
        </GameVisual>
    )
}

const GameVisual = styled.div`
    font-size: 3vw;
    width: 100%;
    height: 40%;
    display: flex;
    gap: 10%;
    justify-content: center;

    button:hover{
        font-size: 2.5vh;
        width: 20vw;
        height: 7vh;
    }

    img:hover{
        width: 22vw;
        height: 37vh;
    }

    img {
        width: 20vw;
        height: 35vh;
        filter: drop-shadow(-18px 27px 63px #000);
        transition: 1000ms;
    }

    button {
        font-size: 2vh;
        width: 18vw;
        height: 6vh;
        margin-top: 2.3vh;
        border-radius: 20px;
        background-color: rgb(253, 253, 253);
        -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, -17px 22px 25px 2px rgba(0, 0, 0, 0.42);
        box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, -17px 22px 25px 2px rgba(0, 0, 0, 0.42);
    }

    .buttom-underline{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
    }

    .buttom-underline div{
        transition: 1000ms;
        font-family: 'Rubik Dirt';
        font-size: 5.5vh;
    }

    .buttom-underline div:hover{
        font-size: 6vh;
    }

    .green {
        color: green;
        font-family: 'Rubik Dirt';
        font-size: 6vh !important;
    }

    .red {
        color: red;
        font-family: 'Rubik Dirt';
        font-size: 6vh !important;
    }

    @media (max-width: 650px) { 
        width: 100%;
        height: 30%;
        display: flex;
        gap: 10%;
        justify-content: center;
        
        button:hover{
            font-size: inherit;
            width: 35vw;
            height: 8vh;
        }
        
        img:hover{
            width: 50%;
            height: 50%;
        }
        
        img {
            width: 40vw;
            height: 30vh;
            filter: drop-shadow(-18px 27px 63px #000);
            transition: 1000ms;
        }
        
        button {
            font-size: 3.7vw;
            width: 30vw;
            height: 12vw;
            margin-top: 1vh;
        }
        
        .buttom-underline{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        
        .buttom-underline div{
            transition: 1000ms;
            font-family: 'Rubik Dirt';
            font-size: 6vw;
        }
        
        .buttom-underline div:hover{
            font-size: 7vw;
        }
        
        .green {
            color: green;
            font-family: 'Rubik Dirt';
            font-size: 8vw !important;
        }
        
        .red {
            color: red;
            font-family: 'Rubik Dirt';
            font-size: 8vw !important;
        }
    }
`