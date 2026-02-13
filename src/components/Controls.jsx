export default function Controls({ dispatch }) {
  return (
    <div className="controls">
      <button onClick={() => dispatch({ type: "SCORE", team: "teamA", value: 1 })}>
        + Team A
      </button>
      <button onClick={() => dispatch({ type: "SCORE", team: "teamB", value: 1 })}>
        + Team B
      </button>
    </div>
  );
}
