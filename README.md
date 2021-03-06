# A Game of Tic-Tac-Toe using React.js

Try it out at [https://david-abell.github.io/react-tic-tac-toe](https://david-abell.github.io/react-tic-tac-toe)

## Why I built it this way

- This was a quick rewrite of the [React Tic-tac-toe tutorial](https://reactjs.org/tutorial/tutorial.html) using Functional components and useState/useEffect hooks.
- I wanted to work more with React.js while also wanting to spend most of my time working with functional components instead of the older class components

## Technology used

- Create React App

## Lessons learned/ problems encountered

- Project went smoothly except that I forgot the spread operator only made shallow copies. The state mutation caused by that error took a while to troubleshoot.

## Installation

## Available scripts

For deployment

Update `"homepage"` in `package.json` if necessary.

```bash
npm run deploy
```

To run locally:

```bash
npm run start
```

## Credits

Thanks to the [gh-deploy instructions](https://github.com/gitname/react-gh-pages) for incredibly easy deployment.
