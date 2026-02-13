import { useReducer } from "react";
import { cricketReducer, initialState } from "../hooks/useCricketReducer";
import MatchSetup from "../components/MatchSetup";
import Toss from "../components/Toss";
import ScoreBoard from "../components/ScoreBoard";
import ResultModal from "../components/ResultModel";

export default function App() {
  const [state, dispatch] = useReducer(cricketReducer, initialState);

  return (
    <div className="app">
      <h1 className="logo">🏏 ScoreFlow Cricket</h1>

      {state.step === "SETUP" && <MatchSetup dispatch={dispatch} />}
      {state.step === "TOSS" && <Toss dispatch={dispatch} />}
      {state.step === "LIVE" && (
        <ScoreBoard state={state} dispatch={dispatch} />
      )}
      {state.result && <ResultModal result={state.result} />}
    </div>
  );
}
