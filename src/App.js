import { useState, useEffect } from "react";
import Board from "./components/Board";
import "./styles/App.css";
import { cloneDeep } from "lodash";

function App() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(false);
  const [moveNumber, setMoveNumber] = useState(0);

  useEffect(() => {
    let data = history.at(moveNumber);
    if (isWinner(data.squares)) {
      setWinner(xIsNext ? "O" : "X");
    }
  }, [history, xIsNext, moveNumber]);

  function handleClick(ev) {
    if (winner || history[moveNumber].squares[ev]) return;
    let data = cloneDeep(history[moveNumber]);
    data.squares[ev] = xIsNext ? "X" : "O";
    let newHistory = [...history];
    newHistory.push(data);
    setHistory(newHistory);
    setXIsNext(!xIsNext);
    setMoveNumber(moveNumber + 1);
  }

  function goToMove(move) {
    if (winner) return;
    setMoveNumber(move);
    setHistory(history.slice(0, move + 1));
    setXIsNext(move % 2 === 0);
  }

  const moves = history.map((move, index) => {
    const moveDescription = index ? `Go to move #${index}` : "Go to game start";
    return (
      <li key={`move${index}`}>
        <button className="move-button" onClick={() => goToMove(index)}>
          {moveDescription}
        </button>
      </li>
    );
  });

  const status = winner
    ? `Player ${winner} has Won`
    : `The next player is: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="game">
      <h1 className="game-title">Tic-Tac-Toe</h1>
      <div className="game-board">
        <Board
          squares={history[moveNumber].squares}
          onClick={handleClick}
          // status={status}
        />
      </div>
      <div>
        <h2 className="status-title">{status}</h2>
        <ol className="game-moves">{moves}</ol>
      </div>
    </div>
  );
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

export default App;
