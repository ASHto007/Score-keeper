import BatsmanCard from "./BatsmanCard";
import BowlerCard from "./BowlerCard";

export default function PlayersPanel({ players }) {
  return (
    <div className="players">
      <div className="batsmen">
        <BatsmanCard player={players.striker} active />
        <BatsmanCard player={players.nonStriker} />
      </div>
      <BowlerCard bowler={players.bowler} />
    </div>
  );
}
