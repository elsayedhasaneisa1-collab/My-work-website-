const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const terminal = document.getElementById("terminal");
const terminalText = document.getElementById("terminalText");
const enterBtn = document.getElementById("enterBtn");
const closeTerminal = document.getElementById("closeTerminal");
const terminalDone = document.getElementById("terminalDone");

const lines = [
  "> Initializing SAYODA...",
  "> Loading digital identity...",
  "> Checking creative modules...",
  "> Identity: EL-SAYED HASAN",
  "> Status: ONLINE",
  "> Signature: VERIFIED",
  "> Access granted.",
  "",
  "WELCOME TO MY SYSTEM."
];

function openTerminal(){
  terminal.classList.add("show");
  terminal.setAttribute("aria-hidden","false");
  terminalText.innerHTML = "";
  let i = 0;
  function next(){
    if(i >= lines.length) return;
    const div = document.createElement("div");
    div.textContent = lines[i++];
    div.style.color = i === lines.length ? "#63d7ff" : "#a6c0d7";
    terminalText.appendChild(div);
    setTimeout(next, 180);
  }
  next();
}
function closeT(){
  terminal.classList.remove("show");
  terminal.setAttribute("aria-hidden","true");
}
enterBtn.addEventListener("click", openTerminal);
closeTerminal.addEventListener("click", closeT);
terminalDone.addEventListener("click", closeT);
terminal.addEventListener("click", e => { if(e.target === terminal) closeT(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeT(); });
