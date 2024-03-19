const $taskList = document.querySelector('.task-list');

if (!$taskList) throw new Error("Couldn't find .task-list element");

$taskList.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLElement;
  console.log('event.target', $eventTarget);
  console.log(`event.target.tagName ${$eventTarget.tagName}`);

  if ($eventTarget.tagName === 'BUTTON') {
    const $closestItem = $eventTarget.closest('.task-list-item');
    console.log('closest .task-list-item', $closestItem);
    if (!$closestItem)
      throw new Error("Couldn't find .task-list-item ancestor");
    $closestItem.remove();
  }
});
