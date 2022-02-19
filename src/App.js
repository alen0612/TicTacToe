import './App.css';
import { useState, useEffect } from 'react';
import Square from "./Components/Square"
import { Patterns } from './Patterns';

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]); // total 9 squares in the board
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({winner: "none", state: "none"});

  useEffect(() => {
    checkIfTie();
    checkWin();    

    if(player == "X")
      setPlayer("O");
    else
      setPlayer("X");

  }, [board]);

  useEffect(() => {
    if(result.state != "none"){
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(board.map((val, index) => {
      if(index == square && val == "")
        return player;
      return val;
    }))
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      
      // if we don't do this
      // game will end in the beginning
      // since the squares were all set to empty
      if(firstPlayer == "") return;      
      
      // assume found a winning pattern
      let foundWinningPattern = true;
      
      currPattern.forEach((index) => {
        if(board[index] != firstPlayer){
          foundWinningPattern = false;
        }
      })

      if(foundWinningPattern){
        setResult({winner: player, state: "Won"})
      }
    })
  };

  const checkIfTie = () => {
    // assume the board was all filled
    let filled = true;
    board.forEach((square) => {
      if(square == ""){
        filled = false;
      }
    })

    if(filled)
    setResult({winner: "No One", state: "Tie"});
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]); 
    setPlayer("X");
  }

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square 
            val={board[0]} 
            chooseSquare = {() => {chooseSquare(0)}}
          />
          <Square 
            val={board[1]} 
            chooseSquare = {() => {chooseSquare(1)}}
          />
          <Square 
            val={board[2]} 
            chooseSquare = {() => {chooseSquare(2)}}
          />
        </div>
        <div className="row">
          <Square 
            val={board[3]} 
            chooseSquare = {() => {chooseSquare(3)}}
          />
          <Square 
            val={board[4]} 
            chooseSquare = {() => {chooseSquare(4)}}
          />
          <Square 
            val={board[5]} 
            chooseSquare = {() => {chooseSquare(5)}}
          />
        </div>
        <div className="row">
          <Square 
            val={board[6]} 
            chooseSquare = {() => {chooseSquare(6)}}
          />
          <Square 
            val={board[7]} 
            chooseSquare = {() => {chooseSquare(7)}}
          />
          <Square 
            val={board[8]} 
            chooseSquare = {() => {chooseSquare(8)}}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
