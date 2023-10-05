# Day 80

## CSS Animate on Scroll

### Resources

- [intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)
- [observe method](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe)
- [intersection observer entry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)

### Findings

- I want to observe the class for each section of the page.
- an observer will observe intersecting entries
- intersection observer api describes the intersection between the target element & its container at a specific transition
- elements that intersect the observer are called entries
- to log intersection of entries, set conditional using isIntersecting
- isIntersecting is a boolean which returns true or false
- so if isIntersecting do the thing, which is animate, else return to previous state.
