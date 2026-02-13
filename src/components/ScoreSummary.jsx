export default function ScoreSummary({ state }) {
  const team = state.teams[state.batting];
  const overs = `${Math.floor(state.balls / 6)}.${state.balls % 6}`;

  return (
    <div className="glass score-summary">
      <h2 className="team-name">{team.name}</h2>

      <div className="main-score">
        <span>{team.runs}</span>
        <small>/{team.wickets}</small>
      </div>

      <div className="meta">
        <div>Overs: {overs}</div>
        {state.target && <div>Target: {state.target}</div>}
      </div>
    </div>
  );
}
