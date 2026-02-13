export default function EventLog({ events }) {
  return (
    <div className="card log">
      <h4>Match Events</h4>
      {events.map((e, i) => (
        <p key={i}>
          {e.time} — {e.team} +{e.value}
        </p>
      ))}
    </div>
  );
}
