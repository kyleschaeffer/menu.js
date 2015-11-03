# menu.js
A lightweight and touch-friendly navigation menu jQuery plugin. The **menu.js** script can be used to create simple toggle menus, drop-down menus, expandable accordion menus, off-canvas navigation, or any combination of the above. The script also employs CSS media queries to allow your menus to take on a different style and appearance depending on the current viewport size.

## Getting started
The easiest way to get started with **menu.js** is to attach the required JavaScript and CSS stylesheet to your HTML document. Once attached, simply format your HTML and run the script to create a menu.

### Prerequisites
1. Attach [jQuery](http://jquery.com/) version 1.7.0 or higher to your HTML document
2. Attach [menu.js](https://github.com/oldrivercreative/menu.js/blob/master/menu.js), or copy the contents of this file into an existing JS file
3. Attach [menu.css](https://github.com/oldrivercreative/menu.js/blob/master/menu.css), or copy the contents of this file into an existing CSS file

### Hidden menus
With all prerequisites in place, you're ready to start creating navigation menus. Create a container and an unordered list (`<ul>`) in your HTML, and then run the `menu()` jQuery function on your container.

```html
<a href="#menu">Open menu</a>

<div id="menu" class="menu-hidden">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>

<script>
  $('#menu').menu();
</script>
```

In this example, we have a simple hidden menu that appears when the "Open menu" link is selected. By default, the menu will be hidden in all viewports, but you can customize the menu using the built-in responsive CSS classes to customize this behavior (see below).

### Responsive hidden menus
You can create hidden menus that appear only in certain viewports. Add a css postfix (such as `-xs`, `-sm`, or `-md`) to your menu container to begin.

```html
<a href="#menu" class="visible-xs">Open menu</a>

<div id="menu" class="menu-hidden-xs">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>

<script>
  $('#menu').menu();
</script>
```

The **menu.js** script utilizes the following common viewport sizes to designate 
### Expandable menus
If you have a navigation menu with multiple levels, you may want to allow users 