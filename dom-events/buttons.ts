const $clickButton = document.querySelector(
  '.click-button'
) as HTMLButtonElement;

if (!$clickButton) throw new Error('The clickButton query failed');

function handleClick(event: MouseEvent): void {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

$clickButton.addEventListener('click', handleClick);

const $hoverButton = document.querySelector(
  '.hover-button'
) as HTMLButtonElement;

if (!$hoverButton) throw new Error('The $handleClick query failed');

function handleMouseover(event: MouseEvent): void {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

$hoverButton.addEventListener('mouseover', handleMouseover);

const $doubleClickButton = document.querySelector(
  '.double-click-button'
) as HTMLButtonElement;

if (!$doubleClickButton) throw new Error('The $doubleClickButton query failed');

function handleDoubleClick(event: MouseEvent): void {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
