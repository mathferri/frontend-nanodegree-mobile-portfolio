## Website Performance Optimization portfolio project

This website was optimized for speed and has two main folders "src" and "dist" which are the production and distribution code for the website, you can access the final version of the online website [by clicking here](https://mathferri.github.io/frontend-nanodegree-mobile-portfolio/).

### Optimizations made

#### 1. 60FPS 

In order for views/pizza.html to run smoothly at 60 frames per second some changes were made to the views/js/main.js file, these changes are commented in the file but mostly consist of:

a. Updating changePizzaSizes function to reduce the time to resize pizzas using the pizza size slider on the views/pizza.html page, the resize time is shown in the browser developer tools.

b. Updating updatePositions function to reduce JavaScript and Layout times by getting rid of forced synchronous layouts.

c. Changing the number of background pizzas created from 200 by dynamically calculating it according to user screen size.

d. Reduce painting time by creating a layer for the background pizzas. (change made on the style.css file).

#### 2. PageSpeed Insights

In order to improve page speed changes were made on the html files to prevent JavaScript and CSS render blocking by using Gulp to inline the CSS and moving all the scripts to the end of the document.

The views/images/pizzeria.jpg file was also modified by resizing it and making 1x and 2x versions of it and a small version for the index.html file.

Gulp was used to create a "dist" folder for the distribution code that inlined all css files to the html files and then also minified the html. The Gulp file also minified all the scripts and optimized all the images.