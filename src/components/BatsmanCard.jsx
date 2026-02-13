export default function BatsmanCard({ player, active }) {
  return (
    <div className={`glass batsman ${active ? "active" : ""}`}>
      <h4>{player.name} {active && "⭐"}</h4>
      <p>{player.runs} ({player.balls})</p>
      <small>4s: {player.fours} | 6s: {player.sixes}</small>
    </div>
  );
}
