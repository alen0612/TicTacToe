import './App.css';
import { useState, useEffect } from 'react';
import Square from "./Components/Square"
import { Patterns } from './Patterns';

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]); // total 9 squares in the board
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({winner: "none", state: "none"});
  const [score, setScore] = useState({playerO: 0, playerX: 0});

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
      //restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    if(result.state == "Won")  return;
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
      if(result.state == "Won")  return;
      
      // assume found a winning pattern
      let foundWinningPattern = true;
      
      currPattern.forEach((index) => {
        if(board[index] != firstPlayer){
          foundWinningPattern = false;
        }
      })

      if(foundWinningPattern){
        setResult({winner: player, state: "Won"})
        if(player == "X")
          setScore({playerO: score.playerO, playerX: score.playerX + 1});
        else
          setScore({playerO: score.playerO + 1, playerX: score.playerX});
      }
    })
  };

  const checkIfTie = () => {
    if(result.state == "Won" || result.state == "Tie")  return;
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
    setPlayer("O");
    setResult({winner: "none", state: "none"});
  }

  const resetGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]); 
    setPlayer("O");
    setResult({winner: "none", state: "none"});
    setScore({playerO: 0, playerX: 0});
  }

  return (
    <div className="App">
      <div className="io">
        <div className="button" onClick={restartGame}>
          Restart
        </div>
        <div className="button" onClick={resetGame}>
          Reset
        </div>
        <div className="score">
          <div className="Oscore">
          Player O: {score.playerO}
          </div>  
          <div className="Xscore">
          Player X: {score.playerX}
          </div>
        </div>
      </div>

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
