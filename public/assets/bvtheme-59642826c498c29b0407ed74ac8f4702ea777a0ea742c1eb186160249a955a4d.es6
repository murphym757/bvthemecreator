const details = document.querySelector('p.explanation');
const links = document.getElementsByTagName('a');

const mintButton = document.querySelector('img.generator1');
const keyLimeButton = document.querySelector('img.generator2');
const kingButton = document.querySelector('img.generator3');
const sugarButton = document.querySelector('img.generator4');
const strawberryButton = document.querySelector('img.generator5');
const cherryButton = document.querySelector('img.generator6');


mintButton.addEventListener('click', () => {
  document.body.style.backgroundColor = "#b1d7c8";
  document.querySelector("img.logo-image").src = "/assets/BV logo.svg";
  document.querySelector("img.logo-heading").src = "/assets/Thin Mint.svg";
});

keyLimeButton.addEventListener('click', () => {
  document.body.style.backgroundColor = "#c1aa65";
  document.querySelector("img.logo-image").src = "/assets/BV logoKLP.svg";
  document.querySelector("img.logo-heading").src = "/assets/Key Lime Pie.svg";
});
kingButton.addEventListener('click', () => {
  document.body.style.backgroundColor = "#91c7c6";
  document.querySelector("img.logo-image").src = "/assets/BV logoKC.svg";
  document.querySelector("img.logo-heading").src = "/assets/King Cake.svg";
});

sugarButton.addEventListener('click', () => {
  document.body.style.backgroundColor = "#ffbdba";
  document.querySelector("img.logo-image").src = "/assets/BV logoSCookie.svg";
  document.querySelector("img.logo-heading").src = "/assets/sugar cookie.svg";
});

strawberryButton.addEventListener('click', () => {
  document.body.style.backgroundColor = "#fbffc1";
  document.querySelector("img.logo-image").src = "/assets/BV logoSCake.svg";
  document.querySelector("img.logo-heading").src = "/assets/strawberry cheesecake.svg";
});

cherryButton.addEventListener('click', () => {
  document.body.style.backgroundColor = "#9c6969";
  document.querySelector("img.logo-image").src = "/assets/BV logoCP.svg";
  document.querySelector("img.logo-heading").src = "/assets/cherry pie.svg";
});
