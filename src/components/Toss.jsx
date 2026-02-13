export default function Toss({ dispatch }) {
  return (
    <div className="glass card">
      <h2>Toss</h2>
      <button onClick={() => dispatch({ type: "TOSS", batting: "A" })}>
        Team A Bats
      </button>
      <button onClick={() => dispatch({ type: "TOSS", batting: "B" })}>
        Team B Bats
      </button>
    </div>
  );
}
