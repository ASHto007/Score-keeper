import ScoreSummary from "./ScoreSummary";
import PlayersPanel from "./PlayersPanel";
import RunControls from "./RunControls";
import ExtraControls from "./ExtraControls";
import WicketControl from "./WicketControls";
import WicketModal from "./WinnerModal";
import PartnershipPanel from "./PartnershipPanel";
import ManhattanChart from "./ManhattanChart";

export default function ScoreBoard({ state, dispatch }) {
  return (
    <>
      <ScoreSummary state={state} />
      <PlayersPanel players={state.players} />

      <PartnershipPanel
        striker={state.players.striker}
        nonStriker={state.players.nonStriker}
      />

      <RunControls dispatch={dispatch} />
      <ExtraControls dispatch={dispatch} />

      <WicketControl
        onClick={() => dispatch({ type: "WICKET_REQUEST" })}
      />

      {state.pendingWicket && (
        <WicketModal dispatch={dispatch} />
      )}

      <ManhattanChart overs={state.oversHistory} />
    </>
  );
}
