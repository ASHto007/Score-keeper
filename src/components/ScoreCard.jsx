export default function ScoreCard({ team }) {
  return (
    <div className="card score-card">
      <h3>{team.name}</h3>
      <div className="score">{team.score}</div>
    </div>
  );
}
