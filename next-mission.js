const statusEl = document.getElementById("status");
const feedback = document.getElementById("feedback");

// Stage Elements
const stageMall = document.getElementById("stageMall");
const stageInstitute = document.getElementById("stageInstitute");

// Inputs & Buttons
const ansStage1 = document.getElementById("ansStage1");
const btnStage1 = document.getElementById("btnStage1");
const ansStage2 = document.getElementById("ansStage2");
const btnStage2 = document.getElementById("btnStage2");
const success = document.getElementById("success");
const continueBtn = document.getElementById("continueBtn");

// Logic Constants
const CAPITAL_NAME = "LUCKNOW";
const CAPITAL_LETTERS = CAPITAL_NAME.length; // 7
const FLOOR_NUM = 2;
const EXPECTED_STAGE_1 = CAPITAL_LETTERS * FLOOR_NUM; // 7 * 2 = 14

const PERIODS_BEFORE_LUNCH = 3;
const EXPECTED_STAGE_2 = EXPECTED_STAGE_1 * PERIODS_BEFORE_LUNCH; // 14 * 3 = 42

function feedbackMsg(text) {
  feedback.textContent = text;
  feedback.classList.add("show");
  clearTimeout(feedbackMsg._t);
  feedbackMsg._t = setTimeout(() => feedback.classList.remove("show"), 1300);
}

function scrollToElement(el) {
  setTimeout(() => {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 400);
}

// STAGE 1: City Map Click Listener
document.querySelectorAll(".city-pin").forEach(pin => {
  pin.addEventListener("click", (e) => {
    const city = e.currentTarget.dataset.city;

    if (city === "Lucknow") {
      feedbackMsg("CAPITAL CONFIRMED: LUCKNOW");
      statusEl.textContent = "● PLATINUM MALL DECRYPTION";
      
      // Unlock Stage 2 & Scroll Down
      stageMall.classList.remove("locked");
      scrollToElement(stageMall);
    } else {
      feedbackMsg(`INCORRECT: ${city.toUpperCase()} IS NOT THE CAPITAL`);
    }
  });
});

// STAGE 2: Platinum Mall Math Validation
btnStage1.addEventListener("click", () => {
  const val = Number(ansStage1.value.trim());

  if (val === EXPECTED_STAGE_1) {
    feedbackMsg("STAGE 1 DECRYPTED — PROCEEDING");
    statusEl.textContent = "● FINAL INSTITUTE CIPHER";
    
    // Unlock Stage 3 & Scroll Down
    stageInstitute.classList.remove("locked");
    scrollToElement(stageInstitute);
  } else {
    feedbackMsg("CALCULATION ERROR — CHECK LUCKNOW LETTERS × FLOOR");
  }
});

ansStage1.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnStage1.click();
});

// STAGE 3: Final Institute Cipher Validation
btnStage2.addEventListener("click", () => {
  const val = Number(ansStage2.value.trim());

  if (val === EXPECTED_STAGE_2) {
    statusEl.textContent = "● MISSION PASSED";
    document.getElementById("finalNumber").textContent = EXPECTED_STAGE_2;
    success.classList.remove("hidden");
  } else {
    feedbackMsg("FINAL CIPHER INVALID — CHECK PREVIOUS RESULT × PERIODS");
  }
});

ansStage2.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnStage2.click();
});

// REDIRECT TO FINAL MISSION
if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    window.location.href = "final-mission.html";
  });
}