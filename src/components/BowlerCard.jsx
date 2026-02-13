export default function BowlerCard({ bowler }) {
  return (
    <div className="glass bowler">
      <h4>{bowler.name}</h4>
      <p>{bowler.overs}.{bowler.balls} — {bowler.runs}/{bowler.wickets}</p>
    </div>
  );
}
