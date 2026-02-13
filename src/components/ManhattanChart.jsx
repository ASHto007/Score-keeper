import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ManhattanChart({ overs }) {
  return (
    <div className="glass card">
      <h3>Manhattan Chart</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={overs}>
          <XAxis dataKey="over" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="runs" fill="#ffd166" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
