# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

We log things to the console for debugging, monitoring program flow, and displaying information to the developer.

- What is the purpose of events and event handling?

Events and event handling allow JavaScript to respond to user actions or system events, enabling interactivity in web applications.

- Are all possible parameters required to use a JavaScript method or function?

Not all parameters are required to use a JavaScript method or function. Some parameters may have default values or may be optional.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

"addEventListener" method of element objects lets you set up a function to be called when a specific type of event occurs.

- What is a callback function?

A callback function is a function passed as an argument to another function, to be executed later when a specific condition is met or an event occurs.

- What object is passed into an event listener callback when the event fires?

The event object is passed into an event listener callback.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

The event.target refers to the element that triggered the event, we can check its properties using console.log(event.target) or by inspecting the event object.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

First example "handleClick" assigns the function as an event listener for the 'click' event, while the second one calls the function handleClick immediately and assigns its return value as an event listener for the 'click' event.

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
