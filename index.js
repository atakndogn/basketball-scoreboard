// Build it from "scratch"
// Follow the design
// Make all six buttons work

// Stretch goals
// Add a "new game" button
// Highlight the leader
// Add a few more counters (e.g. period, fouls, timer)
// Change the design

let homePoint = 0;
let guestPoint = 0;

let labelHomeScore = document.getElementById("home-score");
let labelGuestScore = document.getElementById("guest-score");

function recordScore(team, point) {
  if (team === "home") {
    homePoint += +point;
    labelHomeScore.textContent = homePoint;
  } else if (team === "guest") {
    guestPoint += +point;
    labelGuestScore.textContent = guestPoint;
  }

  if (homePoint > guestPoint) {
    labelHomeScore.classList.add("leader");
    labelGuestScore.classList.remove("leader");
  } else if (homePoint < guestPoint) {
    labelGuestScore.classList.add("leader");
    labelHomeScore.classList.remove("leader");
  } else {
    labelHomeScore.classList.remove("leader");
    labelGuestScore.classList.remove("leader");
  }
}

function newGame() {
  homePoint = guestPoint = 0;

  recordScore("home", 0);
  recordScore("guest", 0);
}
