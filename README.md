# Scroll Tracker
> A lightweight, modular, easy to use, scroll tracker web component

Displays a small bar at the top of the screen that moves horizontally as you scroll vertically. This is great for blogs, portfolio showcases, and any other long form media content.

# Usage
See `src/index.html` for usage example. It is recommended to use setting margin and padding on the global element to zero for best user exerpience like so:
```css
body {
  padding: 0;
  margin: 0;
}
```

## Attributes
Just fill these in as if they were CSS properties.

- `color` :: optional
- `height` :: optional

### Basic Usage

```html
<script src="ScrollTracker.js"></script>
<scroll-tracker color="#ab457d" height="5px"></scroll-tracker>
```

### Usage with Gradient

```html
<script src="ScrollTracker.js"></script>
<scroll-tracker color="linear-gradient(90deg, rgba(66,159,224,1) 0%, rgba(0,255,173,1) 100%)"></scroll-tracker>
```


# Tools
- [Web Components API](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
