# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

Refers to the element that triggered the event.

- Why is it possible to listen for events on one element that actually happen its descendent elements?

Due to event bubbling and event delegation.

- What DOM element property tells you what type of element it is?

The tagName.

- What does the `element.closest()` method take as its argument and what does it return?

The element.closest() method takes a CSS selector as its argument and returns the closest ancestor of the current element that matches the selector.

- How can you remove an element from the DOM?

remove() method.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

By adding a single event listener to a parent element that contains all the clickable elements, and then determine which specific element was clicked within the event handler using event.target.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
