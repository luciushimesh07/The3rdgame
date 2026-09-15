const answer=document.getElementById("answer");
const submit=document.getElementById("submit");
const feedback=document.getElementById("feedback");
const success=document.getElementById("success");
const cont=document.getElementById("continue");

function verify(){
  const value=answer.value.trim();
  if(!/^\d+$/.test(value)){
    feedback.textContent="ENTER THE NUMBER OF PEOPLE.";
    return;
  }
  if(Number(value)===22){
    feedback.textContent="";
    success.classList.add("show");
    return;
  }
  feedback.textContent="NOT QUITE — COUNT ONLY PEOPLE OUTSIDE YOUR SOT BATCH.";
  answer.select();
}
submit.addEventListener("click",verify);
answer.addEventListener("keydown",e=>{if(e.key==="Enter")verify();});
cont.addEventListener("click",()=>{ window.location.href="next-mission.html"; });
