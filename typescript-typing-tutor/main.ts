const $char = document.querySelectorAll('span');

let $currentIndex = 0;
let $characterAt = $char[$currentIndex];

document.addEventListener('keydown', (event: KeyboardEvent) => {
  console.log(event.key);

  if (event.key === $characterAt.textContent) {
    $characterAt.className = 'correct';
    $currentIndex++;
    $characterAt = $char[$currentIndex];
    $characterAt.className = 'first';
  } else {
    $characterAt.className = 'first incorrect';
  }
});
