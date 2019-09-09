If you'd like a button that points to a router link (eg. internal, publicly accessable page), use a `route` tag.

```jsx
<sButton color="blue" route="/demo">Book a demo</sButton>
```

For buttons that would typically utilize `href=`, use the `link` tag.

```jsx
<sButton color="deepblue" link="https://www.google.com">Search on Google</sButton>
```

For full-width buttons, declare `full`.

```jsx
<sButton full color="blue" route="/demo">Book a demo</sButton>
```