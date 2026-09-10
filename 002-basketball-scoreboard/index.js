let scoreHomeEl = document.getElementById("score-home");
let scoreGuestEl = document.getElementById("score-guest");

let resultHome = 0;
let resultGuest = 0;

function incrementHomePlayerByOne() {
  resultHome++;
  scoreHomeEl.textContent = resultHome;
}

function incrementHomePlayerByTwo() {
  resultHome += 2;
  scoreHomeEl.textContent = resultHome;
}

function incrementHomePlayerByThree() {
  resultHome += 3;
  scoreHomeEl.textContent = resultHome;
}

function incrementGuestPlayerByOne() {
  resultGuest++;
  scoreGuestEl.textContent = resultGuest;
}

function incrementGuestPlayerByTwo() {
  resultGuest += 2;
  scoreGuestEl.textContent = resultGuest;
}

function incrementGuestPlayerByThree() {
  resultGuest += 3;
  scoreGuestEl.textContent = resultGuest;
}
