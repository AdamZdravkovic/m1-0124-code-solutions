'use strict';
let $clickCount = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCountDisplay = document.querySelector('.click-count');
if (!$hotButton || !$clickCountDisplay) {
  throw new Error('The query for DOM elements failed');
}
$hotButton.addEventListener('click', () => {
  $clickCount++;
  console.log($clickCount);
  if (!$hotButton || !$clickCountDisplay) {
    throw new Error('The hotButton or clickCountDisplay query failed');
  }
  $clickCountDisplay.textContent = `Clicks: ${$clickCount}`;
  if ($clickCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if ($clickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if ($clickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if ($clickCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if ($clickCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
