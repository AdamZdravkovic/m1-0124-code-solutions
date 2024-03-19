'use strict';
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('The clickButton query failed');
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$clickButton.addEventListener('click', handleClick);
const $hoverButton = document.querySelector('.hover-button');
if (!$hoverButton) throw new Error('The $handleClick query failed');
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$hoverButton.addEventListener('mouseover', handleMouseover);
const $doubleClickButton = document.querySelector('.double-click-button');
if (!$doubleClickButton) throw new Error('The $doubleClickButton query failed');
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
