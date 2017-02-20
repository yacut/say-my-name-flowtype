# say-my-name-flowtype

This is a sandbox project to test [flowtype](https://flowtype.org/) functionality.

> [More information here](https://flowtype.org/docs/getting-started.html)

## Setup with **[flotate](https://flowtype.org/blog/2015/02/20/Flow-Comments.html)**

> You should always use flow comments

- Install global dependencies: `npm install -g flow-bin flow-typed`
- Install local dependencies: `npm install`
- Install [flow-typed](https://flowtype.org/docs/third-party.html#using-flow-typed) for dependencies: `flow-typed install`
- Update flow type definitions if needed: `flow-typed update`

### Build

- Run code with types: `node src`

## Setup with babel

> You can use flow in you code much like typescript

- Install global dependencies: `npm install -g babel-cli flow-bin flow-typed`
- Install local dependencies: `npm install`
- Install [flow-typed](https://flowtype.org/docs/third-party.html#using-flow-typed) for dependencies: `flow-typed install`
- Update flow type definitions if needed: `flow-typed update`


### Build

- Run code with types: `flow-node src`
- Run code without types: `npm run build && node build`
