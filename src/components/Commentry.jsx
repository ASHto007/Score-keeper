export default function Commentary({ log }) {
  return (
    <div className="glass card">
      <h3>Ball by Ball</h3>
      {log.map((b, i) => (
        <p key={i}>{b.label}</p>
      ))}
    </div>
  );
}
