# Page Scroll Position Save and Restore Guide

If you want to save the current scroll position when leaving a page and restore it upon return, you can follow the approach outlined below.

## Basic Approach

1. **Cache the Component**:
   Set `keepAlive` to `true` to cache the component.

2. **Save Scroll Position**:
   Use the `onBeforeRouteLeave` hook to save the current scroll position when leaving the page.

3. **Restore Scroll Position**:
   Use the `onActivated` hook to restore the last saved scroll position when the page is activated.

## Example Code

```js
// Define a ref to store the scroll position
const scrollTop = ref(0)

// When a component with keepAlive set to true is activated, scroll to the saved position
onActivated(() => {
  window.scrollTo(0, scrollTop.value)
})

// Before leaving the route, save the current scroll position
onBeforeRouteLeave(() => {
  scrollTop.value
    = window.scrollY
      || document.documentElement.scrollTop
      || document.body.scrollTop
})
```

# Handling a Specific Scroll Container

If you need to save and restore the scroll position for a specific element (instead of the entire window), follow these steps:

## 1. Add a ref in the Template

In your template, add a `ref` attribute to the scroll container element. For example:

```html
<div ref="scrollContainer" class="...">...</div>

```

## 2. In the setup Function

Use a ref to obtain the element's reference:

```js
const scrollContainer = ref(null)
```

## 3. In the onBeforeRouteLeave Hook

Save the scroll container's scroll position:

```js
onBeforeRouteLeave(() => {
  if (scrollContainer.value) {
    scrollTop.value = scrollContainer.value.scrollTop
  }
})
```

## 3. In the onActivated Hook

Restore the scroll container's scroll position:

```js
onActivated(() => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTop = scrollTop.value
  }
})
```
