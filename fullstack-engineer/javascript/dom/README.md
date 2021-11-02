## Document Object Model

> leverage the power of scripting languages to create, update, and maintain webpages!

### Description

- The DOM is a structural model of a web page that allows for scripting languages to access that page.
- The system of organization in the DOM mimics the nesting structure of an HTML document.
- Elements nested within another are referred to as the children of that element.
  - The element they are nested within is called the parent element of those elements.
- The DOM also allows access to the regular attributes of an HTML element such as its style, id, etc.

### Example Features

- You can register events to DOM elements using the `addEventListener()` method.
- The `addEventListener()` method takes two arguments: an event type and an event handler function.
- When an event is triggered on the event target, the registered event handler function executes.
- Event handler functions can also be registered as values of onevent properties of their event target.
- Event object properties like `.target`, `.type`, and `.timeStamp` are used to provide information about the event.
- The `addEventListener()` method can be used to add multiple event handler functions to a single event.
- The `removeEventListener()` method stops specific event handlers from “listening” for specific events firing.
