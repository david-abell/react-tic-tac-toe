import "../styles/Square.css";

function Square(props) {
  return (
    <button
      className={
        Number.isInteger(props.value) ? "square" : "square played-square"
      }
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;
