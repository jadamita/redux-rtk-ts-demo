
# redux-rtk-ts-demo

An example typescript react project using the Pokemon API

This project uses the following:

- **Vite** - https://vitejs.dev/ - The build tool to serve and hot reload our react app. It's superfast compared to Webpack and only loads the actual code into our browser when needed.
- **React** - https://reactjs.org/ - This is our frontend framework
- **Redux** - https://redux.js.org/ - This is our state management framework
- **RTK Query** - https://redux-toolkit.js.org/rtk-query/overview -  This is a data fetching and client side caching framework
- **Typescript** - https://www.typescriptlang.org/ - This uses typescript for static typing and cool compile time errors/warnings
- **ESLint** - https://eslint.org/ - This lints our code using the rules we provide. We are using a Prettier plugin so it is aware of our Prettier rules
- **Prettier** - https://prettier.io/ - This formats our code based on the rules we provide in the config file. This ensures code and formating.





## Run Locally

Install the dependencies

```bash
  npm install
```

Run the development instance

```bash
  npm run dev
```

Build the client application

```bash
  npm run build
```

Run the local instance as a production build

```bash
  npm run preview
```

Run the Prettier code formatter 

```bash
  npm run format
```

Run the ESLint code linter

```bash
  npm run lint
```