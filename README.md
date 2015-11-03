# menu.js
A lightweight and touch-friendly navigation menu jQuery plugin. The **menu.js** script can be used to create simple toggle menus, drop-down menus, expandable accordion menus, off-canvas navigation, or any combination of the above. The script also employs CSS media queries to allow your menus to take on a different style and appearance depending on the current viewport size.

## Getting started
The easiest way to get started with **menu.js** is to attach the required JavaScript and CSS stylesheet to your HTML document. Once attached, simply format your HTML and run the script to create a menu.

### Prerequisites
1. Attach [jQuery](http://jquery.com/) version 1.7.0 or higher to your HTML document
2. Attach [menu.js](https://github.com/oldrivercreative/menu.js/blob/master/menu.js), or copy the contents of this file into an existing JS file
3. Attach [menu.css](https://github.com/oldrivercreative/menu.js/blob/master/menu.css), or copy the contents of this file into an existing CSS file

### Making menus
With all prerequisites in place, you're ready to start creating menus. Create a container and an unordered list (`<ul>`) in your HTML, and then run the `menu()` jQuery function on your container.

```html
<a href="#menu">Open menu</a>

<nav id="menu" class="menu-hidden">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<script>
  $('#menu').menu();
</script>
```

Easy, right? Any links with `href` attributes that point to the `id` of your menu container will automatically trigger an expand/collapse action on the menu. In its simplest form, the script creates a very simple toggle action with no animation. To add complexity to your menu, read about the additional configuration options (below).

## Configuration
There are various ways to configure the **menu.js** script for different behavior and functionality. Add these options to the `menu()` function to alter the behavior of your menus. The default values are shown below, and all configuration settings are optional.

```js
$('.selector').menu({
  offcanvas: {
    style: false,                                      // set to a string to enable off-canvas navigation (see below)
    canvas: '.menu-canvas',                            // the menu "canvas" is the element that gets "pushed" when the off-canvas menu is opened
    scroller: 'html',                                  // selector for the main scrolling page area
    blur: false                                        // enable to deactivate the off-canvas menu when clicking anywhere on the page
  },
  expand: {
    enabled: false,                                    // set to true to enable expandable navigation (see below)
    button: true,                                      // true = separate clickable area for expand/collapse, false = click on the link to expand/collapse
    label: '<span class="label">Open menu</span>',     // default expand/collapse label (only works when button is true)
    single: false,                                     // enable to allow only a single menu to be expanded at any time
    blur: false                                        // enable to deactivate the expanded menu when clicking anywhere on the page
  },
  oninit: function(){},                                // this function runs after the menu has been created
  ontoggle: function(){},                              // this function runs any time the menu container is activated or deactivated
  destroy: false                                       // set to true to destroy a previously created menu
});
```

### Responsive menus
You can create responsive menus that are visible or collapsed in certain viewports. Add a CSS class and postfix (such as `menu-hidden-xs`) to your menu container to begin.

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

The **menu.js** script provides the following common viewport sizes and class names to help control the visibility of your menus.

| Screen size | Class name |
| ----------- | ---------- |
| Extra-small (`<768px`) | `menu-hidden-xs` |
| Small (`<992px`) | `menu-hidden-sm` |
| Medium (`<1200px`) | `menu-hidden-md` |
| All screens | `menu-hidden` |

### Expandable menus
Enable expanding menus when you have more than one level of navigation hierarchy to improve the ease of navigation.

```html
<nav id="menu" class="menu-expandable">
  <ul>
    <li><a href="#">Home</a></li>
    <li>
      <a href="#">About</a>
      <ul>
        <li><a href="#">History</a></li>
        <li><a href="#">Leadership</a></li>
        <li><a href="#">Meet the team</a></li>
      </ul>
    </li>
  </ul>
</nav>

<script>
  $('#menu').menu({
    expand: {
      enabled: true
    }
  });
</script>
```

In this example, the **menu.js** script adds clickable expand/collapse buttons to each menu item that contains a child menu (much like an accordion). You can use additional configuration options to alter the expandable behavior of your menus. For example:

```html
<nav id="menu" class="menu-expandable">
  <ul>
    <li><a href="#">Home</a></li>
    <li>
      <a href="#">About</a>
      <ul>
        <li><a href="#">History</a></li>
        <li><a href="#">Leadership</a></li>
        <li><a href="#">Meet the team</a></li>
      </ul>
    </li>
  </ul>
</nav>

<script>
$('#menu').menu({
  expand: {
    enabled: true,
    button: false,
    single: true,
    blur: true
  }
});
</script>
```

With this configuration, the menu becomes a simple drop-down menu. The `button:false` option removes the separate toggle button, and allows users to click anywhere on the parent menu item to open its child menu. The `single:true` option allows only a single drop-down menu to remain open at any time. Finally, the `blur:true` option allows users to click anywhere outside the menu to close open menus.

### Off-canvas menus
The **menu.js** script includes optional CSS styles for off-canvas navigation menus. Add CSS classes to your menu container and enable off-canvas in the `menu()` function to begin.

```html
<nav id="menu" class="menu-offcanvas menu-left">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<div class="menu-canvas">
  <!-- page content appears here -->
</div>

<script>
$('#menu').menu({
  offcanvas: {
    style: 'left'
  }
});
</script>
```

Be sure to wrap your page content in an element with a CSS class of `menu-canvas`. The canvas element is the component that is "pushed" when the menu appears. The **menu.js** script includes `left` and `right` off-canvas menu styles by default. You can alter or remove these default styles, or even create your own styles by adding CSS classes to any attached stylesheet.

```html
<nav id="menu" class="menu-offcanvas menu-full-screen">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<div class="menu-canvas">
  <!-- page content appears here -->
</div>

<script>
$('#menu').menu({
  offcanvas: {
    style: 'full-screen'
  }
});
</script>

<style type="text/css">
.menu-full-screen {
  left: 0;
  width: 100%;
  transform: translate(-100%, 0px);
}
.menu-full-screen.ui-menu-active {
  transform: translate(0px, 0px);
}
.ui-menu-canvas-active-full-screen {
  transform: translate(100%, 0px);
}
</style>
```

The **menu.js** script will add special CSS classes to both the menu container and the canvas when activated. Use the `ui-menu-active` CSS class to alter the appearance of the menu when it is activated, and use `ui-menu-canvas-active-STYLE` to alter the appearance of the canvas (replace `STYLE` with the off-canvas style you are using).

## Browser support
The **menu.js** script was written to be accessible on all known browsers and operating systems. While accessible everywhere, there may be some differences in functionality and appearance between systems. For example, the script utilizes CSS3 transitions for animation. If your browser does not support CSS3 transitions, animation may not appear.

The script has been tested and is fully supported on the following web browsers:

- Internet Explorer 8+ (no animation)
- Internet Explorer 10+
- Chrome 31+
- Firefox 34+
- Safari 7.1+
- iOS/Safari 7.1+
- Android/Chrome 4.1+
