export default function ExtraControls({ dispatch }) {
  return (
    <div className="controls">
      <button onClick={() =>
        dispatch({ type: "BALL", runs: 1, extra: "WD", label: "Wide" })
      }>WD</button>
      <button onClick={() =>
        dispatch({ type: "BALL", runs: 1, extra: "NB", label: "No Ball" })
      }>NB</button>
    </div>
  );
}
