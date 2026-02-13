export const initialState = {
  step: "SETUP",
  innings: 1,
  oversLimit: 20,
  balls: 0,
  batting: "A",

  teams: {
    A: { name: "", runs: 0, wickets: 0 },
    B: { name: "", runs: 0, wickets: 0 }
  },

  players: {
    striker: batsman("Batsman 1"),
    nonStriker: batsman("Batsman 2"),
    bowler: bowler("Bowler 1")
  },

  overBalls: [],
  oversHistory: [],
  partnerships: [],

  pendingWicket: false,
  awaitingBowlerChange: false
};

function batsman(name) {
  return { name, runs: 0, balls: 0, fours: 0, sixes: 0 };
}

function bowler(name) {
  return { name, overs: 0, balls: 0, runs: 0, wickets: 0 };
}

export function cricketReducer(state, action) {
  switch (action.type) {
    case "SETUP":
      return {
        ...initialState,
        step: "TOSS",
        oversLimit: action.overs,
        teams: action.teams
      };

    case "TOSS":
      return { ...state, batting: action.batting, step: "LIVE" };

    case "BALL":
      if (state.pendingWicket || state.awaitingBowlerChange) return state;
      return playBall(state, action);

    case "WICKET_REQUEST":
      return { ...state, pendingWicket: true };

    case "CONFIRM_WICKET":
      return {
        ...state,
        pendingWicket: false,
        players: {
          ...state.players,
          striker: batsman(action.newBatsman)
        },
        teams: {
          ...state.teams,
          [state.batting]: {
            ...state.teams[state.batting],
            wickets: state.teams[state.batting].wickets + 1
          }
        }
      };

    case "CHANGE_BOWLER":
      return {
        ...state,
        awaitingBowlerChange: false,
        players: {
          ...state.players,
          bowler: bowler(action.name)
        }
      };

    default:
      return state;
  }
}

/* ---------------- BALL ENGINE ---------------- */

function playBall(state, action) {
  const isWD = action.extra === "WD";
  const isNB = action.extra === "NB";
  const legal = !isWD && !isNB;

  let { striker, nonStriker, bowler } = state.players;
  striker = { ...striker };
  nonStriker = { ...nonStriker };
  bowler = { ...bowler };

  let balls = legal ? state.balls + 1 : state.balls;

  // batsman
  if (legal) striker.balls++;
  striker.runs += action.runs;

  if (action.runs === 4) striker.fours++;
  if (action.runs === 6) striker.sixes++;

  // bowler
  bowler.runs += action.runs + (isWD || isNB ? 1 : 0);

  if (legal) {
    bowler.balls++;
    if (bowler.balls === 6) {
      bowler.overs++;
      bowler.balls = 0;
    }
  }

  // strike
  if (action.runs % 2 === 1) {
    [striker, nonStriker] = [nonStriker, striker];
  }

  let awaitingBowlerChange = false;
  let oversHistory = [...state.oversHistory];

  if (legal && bowler.balls === 0) {
    awaitingBowlerChange = true;
    oversHistory.push({
      over: bowler.overs,
      runs: state.overBalls.reduce((s, b) => s + b, 0)
    });
    [striker, nonStriker] = [nonStriker, striker];
  }

  return {
    ...state,
    balls,
    awaitingBowlerChange,
    overBalls: legal ? [...state.overBalls, action.runs] : state.overBalls,
    oversHistory,
    players: { striker, nonStriker, bowler },
    teams: {
      ...state.teams,
      [state.batting]: {
        ...state.teams[state.batting],
        runs:
          state.teams[state.batting].runs +
          action.runs +
          (isWD || isNB ? 1 : 0)
      }
    }
  };
}
