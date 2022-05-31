import { useState, useEffect } from "react";
import Board from "./components/Board";

function App() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      xIsNext: true,
      nextPlayer: "X",
      winner: false,
    },
  ]);
  const [current, setCurrent] = useState(history.at(-1));

  useEffect(() => {
    if (current.winner) return;
    if (isWinner(current.squares)) {
      console.log("winner");
      let data = { ...current };
      data.xIsNext ? (data.winner = "O") : (data.winner = "X");
      data.winner = true;
      setCurrent(data);
    }
  }, [current]);

  function handleClick(i) {
    if (current.winner) return;
    let data = { ...current };
    data.squares[i] = data.nextPlayer;
    data.xIsNext ? (data.nextPlayer = "O") : (data.nextPlayer = "X");
    data.xIsNext = !data.xIsNext;
    setCurrent(data);
    setHistory([...history].concat(data));
  }

  function isWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  }

  const gameStatus = current.winner
    ? `Player ${current.winner} has Won`
    : `The next player is: ${current.nextPlayer}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
          status={gameStatus}
        />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
