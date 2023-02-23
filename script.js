const crashRide = document.querySelector("#crash-ride");
const hiHatTop = document.querySelector("#hihat-top");
const animateCrashOrRide = () => {
  crashRide.style.transform = "rotate(0deg) scale(1.5)";
};

const animateHiHatClosed = () => (hiHatTop.style.top = "171px");
window.addEventListener("keydown", (event) => {
  const code = event.keyCode;
  const keyElement = document.querySelector(`div[data-key="${code}"]`);

  if (!keyElement) return;
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  audio.currentTime = 0;
  audio.play();

  switch (code) {
    case 69:
    case 82:
      animateCrashOrRide();
      break;
    case 75:
    case 73:
      animateHiHatClosed();
      break;
  }
  keyElement.classList.add("playing");
});

const removeCrashRideTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.style.transform = "rotate(-7.2deg) scale(1.5)";
};
const removeKeyTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};
const removeHiHatTopTransition = (e) => {
  if (e.propertyName !== "top") return;
  e.target.style.top = "166px";
};
let drumKeys = document.querySelectorAll(".key");
drumKeys.forEach((key) => {
  key.addEventListener("transitionend", removeKeyTransition);
});
crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition);
