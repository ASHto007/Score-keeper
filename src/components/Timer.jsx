import useTimer from "../hooks/useTimer";

export default function Timer() {
  const seconds = useTimer();
  return <div className="timer">⏱ {seconds}s</div>;
}
