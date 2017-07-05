# QandA

## Description
This is a testing task I've got in the junior front-end developer position recruitment process. The goal is to build questions and answers dynamic site. You can see full task description that were given to me [here](https://github.com/dom-void/QandA/blob/master/blueprints/plan.md).

## Current final result
You can see what I did and how it works here: <https://dom-void.github.io/QandA/>.  
I did it using: `React`, `webpack`, `RWD`, `html5`, `gulp` and `sass`/`scss`.

## What I already did
### Views
I got `.png` files with the UI design. You can see them all [here](https://github.com/dom-void/QandA/blob/master/blueprints/imgs/). I did some mockups to have full responsive static sites in `html` and `css` using `sass`. My mockups are available [here](https://github.com/dom-void/QandA/blob/master/blueprints/mockups/). I'd like to have it to easyly build my `React` components in the next steps.
### Engine
1. I moved main `html` view into `React` and rendered it.
2. I started to design my `React` components. You can see it [here](https://github.com/dom-void/QandA/blob/master/blueprints/react-components-design/components.PNG).
3. In the [RWD design file](https://github.com/dom-void/QandA/blob/master/blueprints/imgs/story_rwd.png) you can see 4 or 5 user cards displaying in large resolutions, and only 1 or 2 in small. I did it in `React`. It detects the view port resolution and displays as many components as it's needed. So on your mobile you'll probably see 2 user cards in portrait mode and 5 in landscape.