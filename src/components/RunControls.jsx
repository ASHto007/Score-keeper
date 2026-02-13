export default function RunControls({ dispatch }) {
  return (
    <div className="controls">
      {[0,1,2,3,4,6].map(r => (
        <button key={r} onClick={() =>
          dispatch({ type: "BALL", runs: r, label: `${r} run` })
        }>
          {r}
        </button>
      ))}
    </div>
  );
}
