const statusEl = document.getElementById("status");
const feedback = document.getElementById("feedback");
const inputEl = document.getElementById("timeCipherInput");
const submitBtn = document.getElementById("submitTimeBtn");
const victoryOverlay = document.getElementById("victory");

const CORRECT_ANSWER = 67;

function feedbackMsg(text) {
  feedback.textContent = text;
  feedback.classList.add("show");
  clearTimeout(feedbackMsg._t);
  feedbackMsg._t = setTimeout(() => feedback.classList.remove("show"), 1300);
}

function validateCode() {
  const val = Number(inputEl.value.trim());

  if (val === CORRECT_ANSWER) {
    statusEl.textContent = "● OVERRIDE COMPLETE";
    victoryOverlay.classList.remove("hidden");
  } else {
    feedbackMsg("ACCESS DENIED — RE-CALCULATE ALL 8 HOUR HANDS");
  }
}

submitBtn.addEventListener("click", validateCode);

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") validateCode();
});