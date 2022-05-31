import Square from "./Square";

function Board(props) {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [xIsNext, setXisNext] = useState(true);
  // const [nextPlayer, setNextPlayer] = useState("X");
  // const [winner, setWinner] = useState(null);

  // useEffect(() => {
  //   if (checkWinner(squares)) {
  //     setWinner(xIsNext ? "O" : "X");
  //   }
  // }, [squares, xIsNext]);

  // function handleClick(i) {
  //   if (winner) return;
  //   const nextSquares = [...squares];
  //   nextSquares[i] = nextPlayer;
  //   setNextPlayer(xIsNext ? "O" : "X");
  //   setSquares(nextSquares);
  //   setXisNext(!xIsNext);
  // }

  function renderSquare(i) {
    return (
      <Square value={props.squares[i] || i} onClick={() => props.onClick(i)} />
    );
  }

  // function checkWinner(board) {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let line of lines) {
  //     const [a, b, c] = line;
  //     if (board[a] && board[a] === board[b] && board[a] === board[c]) {
  //       return board[a];
  //     }
  //   }
  //   return null;
  // }

  // const gameStatus = winner
  //   ? `Player ${winner} has Won`
  //   : `The next player is: ${nextPlayer}`;
  return (
    <div>
      <div className="status">{props.status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
