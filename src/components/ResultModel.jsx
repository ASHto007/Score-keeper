export default function ResultModal({ result }) {
  return (
    <div className="modal">
      <div className="glass card">
        <h2>{result}</h2>
        <button onClick={() => window.location.reload()}>
          New Match
        </button>
      </div>
    </div>
  );
}
