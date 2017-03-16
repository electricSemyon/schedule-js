[![Build Status](https://travis-ci.org/electricSemyon/weekler.svg?branch=master)](https://travis-ci.org/electricSemyon/weekler)

# Weekler
Google chrome extension written with React for generating weekly schedules.

## How to use?
Easy! Firstly, you should fill schedule items list. Like here:

![img](http://screenshot.su/img/9d/e3/3f/9de33f1cb56b1dabd0e5adc4470e37a7.jpg)

When items list is done, extension will generate schedule for you.
`Important:` schedule will be regenerated every time you modify items list.
So, how our extension looks now:

![img](http://screenshot.su/img/ed/2c/ba/ed2cba7f72d21ecf8a25312711416ae0.jpg)

## How to start develop?
`git clone https://github.com/electricSemyon/schedule-js.git`

`npm install`

## Available commands

### `npm run test`
Runs all tests.

### `npm run build`
Builds app to *build* folder.

## To do:
- [x] Make abstraction for schedule
- [x] Make abstraction for items list
- [x] Fix function binding issue in App component
- [x] Add item on Enter key press
- [x] Added Redux
