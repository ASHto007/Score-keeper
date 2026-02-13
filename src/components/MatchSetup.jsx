import { useState } from "react";

export default function MatchSetup({ dispatch }) {
  const [teamA, setA] = useState("Team A");
  const [teamB, setB] = useState("Team B");
  const [overs, setOvers] = useState(20);

  return (
    <div className="glass card">
      <h2>Match Setup</h2>
      <input value={teamA} onChange={e => setA(e.target.value)} />
      <input value={teamB} onChange={e => setB(e.target.value)} />
      <input
        type="number"
        value={overs}
        onChange={e => setOvers(+e.target.value)}
      />
      <button
        onClick={() =>
          dispatch({
            type: "SETUP",
            teams: {
              A: { name: teamA, runs: 0, wickets: 0 },
              B: { name: teamB, runs: 0, wickets: 0 }
            },
            overs
          })
        }
      >
        Start Match
      </button>
    </div>
  );
}
