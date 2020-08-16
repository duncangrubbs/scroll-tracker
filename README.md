# Scroll Tracker
> A lightweight, modular, easy to use, scroll tracker web component

Displays a small bar at the top of the screen that moves horizontally as you scroll vertically. This is great for blogs, portfolio showcases, and any other long form media content.

# Usage
See `src/index.html` for usage example. It is recommended to set margin and padding on the global (body or html) elemet to zero for the best user exerpience like so:
```css
body {
  padding: 0;
  margin: 0;
}
```

## Attributes
- `color` :: optional
- `height` :: optional

Just fill these in like regular CSS properties.

### Basic Usage

```html
<script src="ScrollTracker.js"></script>
<scroll-tracker color="#ab457d" height="5px"></scroll-tracker>
```


# Tools
- [Web Components API](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

# License
