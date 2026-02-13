export function saveMatch(match) {
  const history = JSON.parse(localStorage.getItem("scoreflow")) || [];
  history.unshift({
    teamA: match.teamA,
    teamB: match.teamB,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("scoreflow", JSON.stringify(history));
}
