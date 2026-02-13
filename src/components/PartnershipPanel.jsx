export default function PartnershipPanel({ striker, nonStriker }) {
  const runs = striker.runs + nonStriker.runs;
  const balls = striker.balls + nonStriker.balls;

  return (
    <div className="glass card">
      <h3>Partnership</h3>
      <p>
        {striker.name} & {nonStriker.name}
      </p>
      <strong>{runs} runs ({balls} balls)</strong>
    </div>
  );
}
