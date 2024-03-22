const $ceiling = document.querySelector('.ceiling');
const $bulb = document.querySelector('.bulb');

if (!$ceiling || !$bulb) throw new Error("Query didn't succeed.");

let $isOn = false;

$bulb.addEventListener('click', () => {
  $isOn = !$isOn;
  console.log($isOn);
  if ($isOn) {
    $ceiling.className = 'is-lit';
    $bulb.className = 'is-on';
  } else {
    $ceiling.className = 'ceiling';
    $bulb.className = 'bulb';
  }
});
