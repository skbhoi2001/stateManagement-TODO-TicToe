import { useEffect, useState } from "react";
import Square from "./Square";
import {Patterns} from './Patterns'

function Tictac(){
    const [board,setBoard] = useState(["","","","","","","","",""])
    const [player,setPlayer]=useState("X")
    const [result,setResult] = useState({winner:"none",state:"none"})

    useEffect(()=>{
        checkWin()
        checkIfTied()
        if(player == "X"){
            setPlayer("O")
        }
        else{
            setPlayer("X")
        }
    },[board])

    useEffect(()=>{
        if(result.state != "none"){
            alert(`Game finish Winner is ${result.winner}`)
            restartGame()
        }
        
    },[result])

    const chooseSquare=(square)=>{
            setBoard(board.map((value,index)=>{
                if(index ==square && value ==""){
                    return player
                }
                return value
            }))
           
    }

    const checkWin = ()=>{
        Patterns.forEach((currPattern)=>{
            const firstPlayer = board[currPattern[0]]
            if(firstPlayer == "") return;
            let foundWinningPatten = true
            currPattern.forEach((index)=>{
                if(board[index] != firstPlayer){
                    foundWinningPatten = false
                }
            })
            if(foundWinningPatten){
                setResult({winner:player, state:"Won"})
            }
        })
    }

    const checkIfTied = ()=>{
        let filled = true
        board.forEach((square)=>{
            if(square == ""){
                filled = false
            }
        })
        if(filled){
            setResult({winner:"No One",state:"TIe"})
        }
    }

    const restartGame = ()=>{
        setBoard(["","","","","","","","",""])
        setPlayer("X")
    }
    return(
        <div>
            <div className="board">
                <div className="row">
                    <Square value={board[0]} chooseSquare={()=>{chooseSquare(0)}}/>
                    <Square value={board[1]} chooseSquare={()=>{chooseSquare(1)}}/>
                    <Square value={board[2]} chooseSquare={()=>{chooseSquare(2)}}/>
                   
                </div>
                <div className="row">
                     <Square value={board[3]} chooseSquare={()=>{chooseSquare(3)}}/>
                    <Square value={board[4]} chooseSquare={()=>{chooseSquare(4)}}/>
                    <Square value={board[5]} chooseSquare={()=>{chooseSquare(5)}}/>
                </div>
                <div className="row">
                    <Square value={board[6]} chooseSquare={()=>{chooseSquare(6)}}/>
                    <Square value={board[7]} chooseSquare={()=>{chooseSquare(7)}}/>
                    <Square value={board[8]} chooseSquare={()=>{chooseSquare(8)}}/>
                </div>
            </div>
            <div className="btnArea">
            <button className="btnRestart" onClick={restartGame}>Restart</button>
            </div>
        </div>
    )
}

export default Tictac;