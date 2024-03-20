const $ceiling = document.querySelector('.ceiling');
const $bulb = document.querySelector('.bulb');

if (!$ceiling || !$bulb) throw new Error("Query didn't succeed.");

let isOn = false;

$bulb.addEventListener('click', (e) => {
  isOn = !isOn;
  console.log(isOn);
  if (isOn) {
    $ceiling.classList.add('is-lit');
    $bulb.classList.add('is-on');
  } else {
    $ceiling.classList.remove('is-lit');
    $bulb.classList.remove('is-on');
  }
});
