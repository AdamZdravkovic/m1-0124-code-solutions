# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?

The default value for the `position` property of HTML elements is `static`.

- How does setting `position: relative` on an element affect document flow?

It changes the positioning context for its absolutely positioned children.

- How does setting `position: relative` on an element affect where it appears on the page?

Setting position: relative on an element allows you to adjust its position using offset properties but doesn't change its default position on the page.

- How does setting `position: absolute` on an element affect document flow?

Setting `position: absolute` on an element removes it from the normal document flow, meaning it no longer affects the positioning of other elements, and other elements do not affect its position.

- How does setting `position: absolute` on an element affect where it appears on the page?

Setting `position: absolute` on an element positions it relative to its nearest positioned ancestor or the initial containing block, rather than its normal position in the document flow.

- How do you constrain an absolutely positioned element to a containing block?

You can constrain an absolutely positioned element to a containing block by setting the containing block's position property to anything other than 'static', like 'relative', 'absolute', or 'fixed'.

- What are the four box offset properties?

They are: top, right, bottom, left.

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
