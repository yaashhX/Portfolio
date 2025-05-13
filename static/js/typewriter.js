const phrases = ["Create Repeat...", "Solve Evolve...", "Build Innovate..."];
const textEl = document.getElementById("dynamic-text");

let phraseIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (typing) {
    if (charIndex < currentPhrase.length) {
      textEl.textContent += currentPhrase.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(() => {
        typing = false;
        setTimeout(typeEffect, 1000);
      }, 1000);
    }
  } else {
    if (charIndex > 0) {
      textEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 500);
    }
  }
}

typeEffect();
