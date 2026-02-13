import { useState } from "react";

export default function WicketModal({ dispatch }) {
  const [type, setType] = useState("Bowled");
  const [fielder, setFielder] = useState("");
  const [newBatsman, setNewBatsman] = useState("");

  return (
    <div className="modal">
      <div className="glass card">
        <h3>Wicket</h3>

        <select onChange={e => setType(e.target.value)}>
          <option>Bowled</option>
          <option>Caught</option>
          <option>LBW</option>
          <option>Run Out</option>
          <option>Stumped</option>
        </select>

        {type === "Caught" && (
          <input
            placeholder="Fielder name"
            onChange={e => setFielder(e.target.value)}
          />
        )}

        <input
          placeholder="New batsman name"
          onChange={e => setNewBatsman(e.target.value)}
        />

        <button
          className="danger"
          onClick={() =>
            dispatch({
              type: "CONFIRM_WICKET",
              wicketType: type,
              fielder,
              newBatsman
            })
          }
        >
          Confirm Wicket
        </button>
      </div>
    </div>
  );
}
