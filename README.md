# Frontend Template

## Index

- [Index](#index)
- [React Front Template](#react-front-template)
- [Tools](#tools)
  - [Next.js](#next.js)
  - [TypeScript](#typescript)
  - [Redux](#redux)
  - [ESLint](#eslint)
  - [Stylelint](#stylelint)
  - [Prettier](#prettier)
  - [Jest](#jest)
  - [Husky](#husky)
- [Folder structure and usage](#folder-structure-and-usage)
  - [Root Directories](#root-directories)
  - [Root Files](#root-files)
  - [Directories in /src](#directories-in-src)
- [Guide](#guide)
  - [Starting](#starting)
  - [Application configuration](#application-configuration)
  - [Types](#types)
  - [Errors](#errors)
  - [Internationalization](#internationalization)
  - [State](#state)
    - [State guide](#state-guide)
  - [Views](#views)
    - [Form control](#form-control)
  - [Styling](#styling)
  - [Controller](#controller)
  - [Services](#services)
  - [Testing](#testing)
    - [Unit testing](#unit-testing)
  - [Documentation](#documentation)
    - [Testing documentation](#testing-documentation)
    - [Code documentation with TypeDoc](#code-documentation-with-typedoc)
  - [Developing the application](#developing-the-application)
  - [Authentication and security recommendations](#authentication-and-security-recommendations)
- [Scripts](#scripts)

## React Front Template

This is the template for React applications.

In the /src-sample dir you will find a complete example on how this system could work.
Even though you can use /src and /test from the scratch, it would be nice take a look frequently to src-sample and tests-sample. These dirs contains some functional samples on how to use the package.

## Tools

If you are using the Visual Studio Code as your code editor (recommended, you can get it [here](https://code.visualstudio.com/)), you should install and use the associated plugins.

### Next.js

We use Next.js due to different advantages:

- Better user experience
- Data security
- SEO efficiency
- Incremental Static Generation
- Better performance than a SPA, but with the browsing experience of this
- Better scores in the Core Web Vitals

Read the docs: [Next.js docs](https://nextjs.org/docs)

### Typescript

As a JavaScript superset. All the files should be written in TypeScript in order to make the code cleaner. Its configuration is set in the .tsconfig file. You can read how to configure it [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

Read the docs: [Typescript docs](https://www.typescriptlang.org/docs).

### Redux

For state management. With Redux Toolkit (official recommended approach for writing Redux logic), which wraps around the Redux core, and contains packages and functions that are essential for building a Redux app.

Read the docs: [Redux docs](https://redux.js.org/introduction/getting-started), [Redux Toolkit docs](https://redux-toolkit.js.org/introduction/getting-started), [React Redux docs](https://react-redux.js.org/introduction/getting-started).

### Eslint

For code styling. It ensures you are using the best practices and all the developers are following the same guides. The configuration is set in the .eslintrc file. You can read how to configure it [here](https://eslint.org/docs/user-guide/configuring).

We use the AirBnb style guide for coding: [Guide docs](https://github.com/airbnb/javascript).

Read the docs: [ESLint docs](https://eslint.org/).

VSCode plugin: [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### Stylelint

For CSS and SCSS code styling, just like ESLint but for styles. Its configuration can be found in .stylelintrc.json. You can read how to configure it [here](https://stylelint.io/user-guide/usage/options).

We use the AirBnb style guide for coding: [Guide docs](https://github.com/airbnb/css).

Read the docs: [Stylelint docs](https://stylelint.io/user-guide/get-started).

VSCode plugin: [here](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint).

### Prettier

It's an opinionated code formatter used for making the code prettier. Also, by this way all the developers will be following the same style guides. It's configured in the .prettierrc file. You can read how to configure it [here](https://prettier.io/docs/en/configuration.html).

It's recommended to set **formatOnSave** to **true** in your Code Editor to make this step easier.

Read the docs: [Prettier docs](https://prettier.io/).

VSCode plugin: [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### Jest

For unit testing it uses Jest. It will look for all the files which their names finishes with ".test.ts" in the "/tests" dir and execute them. Jest is a very powerful tool for testing. Its configuration is set in the jestconfig.json file. You can read how to configure it [here](https://jestjs.io/docs/en/configuration).

Read the docs: [Jest docs](https://jestjs.io/).

### Husky

It uses husky to add a hook to git, so it runs eslint and prettier before commiting every time.

## Folder structure and usage

### Root Directories

- **build**: Has the compiled code and it's prepared to work. This directory is removed and remade everytime you run "npm run build", so never put something that cannot be erased there.
- **docs**: Contains the different docs (code and the testings).
- **node_modules**: It's the standard node_modules folder for NodeJS.
- **package_utils**: It contains some scripts we need at package config.
- **public**: It contains the primary HTML file and static files.
- **src**: It contains the source of the package. It's the code to be compiled when you run "npm run build".
- **src-sample**: It contains some functional examples on how to use the package.
- **tests**: Contains all the different files what will be tested when you use "npm run test". Jest will look for all the files finishing with ".test.ts".
- **tests-sample**: It contains the unit tests for the src-sample folder examples.

### Root Files

- **.browserslistrc**: Contains the queries for specify wich browsers should be supported in this frontend. [Browserslist queries](https://www.npmjs.com/package/browserslist#queries).
- **.eslintrc**: Contains all the configuration for [eslintrc](https://eslint.org/docs/user-guide/configuring).
- **.eslintignore**: Contains the folders/files that will be ignored by eslint.
- **.gitignore**: Contains all the files and directories that won't be upstreamed to git. How to configure: [gitignore](https://git-scm.com/docs/gitignore).
- **.npmrc**: Contains how npm will work. How to configure: [npmrc](https://docs.npmjs.com/configuring-npm/npmrc.html).
- **.pretierrc**: Contains prettier configuration. How to configure: [prettierrc](https://prettier.io/docs/en/configuration.html).
- **.stylelintrc**: Contains Stylelint configuration. How to configure: [stylelintrc](https://stylelint.io/user-guide/configure).
- **CHANGELOG.md, LICENSE and README.md**: Standard files that have information about how to use the package (this file), the changes in each release and the license.
- **jest.config.js**: Contains Jest configuration. How to configure: [jestconfig](https://jestjs.io/docs/en/configuration).
- **jesthtmlreporter.config.json**: Contains the configuration for the testings output files.
- **package.json**: NodeJS Package configuration. How to configure: [package.json](https://docs.npmjs.com/creating-a-package-json-file).
- **tsconfig.json**: Contains TypeScript configuration. How to configure: [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
- **typedoc.json**: Contains the TYPE DOC configuration. How to configure: [typedoc](https://typedoc.org/guides/options/).

### Directories in /src

- **components**: Contains the components for the entire application.
- **constants**: Contains all the application constants (configuration that doesn't depend on environment variables).
- **controller**: Contains the bussiness logic layer. It's the part that executes what the app needs and interact with the state.
- **internationalizacion** Contains all the things needed to use the app in different languages (and also contains app strings).
- **pages**: Contains the Next.js pages folder. Each file in this folder will be a route in the application.
- **scss**: Contains global styles and some SASS/CSS utils and variables needed in many parts of the app.
- **services**: Contains calls to third party services or APIs. This directory should contain all interactions with any API.
- **state**: Contains all related to Redux Toolkit state (features, storages, actions, etc.).
- **types**: Contains all complex or reused types across the application.
- **utils**: Contains some utils, like the axiosHelper.

## Guide

### Starting

To develop a frontend this template follows many code rules: ESLint, Stylelint, Prettier, the AirBnb guide, TypeScript, etc. But this is just for coding. The app design is harder, because we cannot have automated tools and we have to be very thoughtfull as we develop. Accessibility, performance and SEO are also issues to consider.

Before starting to develop is necessary to execute the `npm run prepare` command, because it installs the husky.

Here are the guides and recommendations we want to follow to build:

- [React and TypeScript](https://www.reactandtypescript.dev/): Here are some recommendations and examples for using React with TypeScript.
- [React+TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react): Here is a cheatsheet with a lot of recommendations for using React with TypeScript.
- [Accesibility](https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b): A medium post with 7 things to consider about accesibility
- [Next.js examples](https://github.com/vercel/next.js/tree/canary/examples): Here are many examples on how to use different libraries or settings in Next.js.
- [Accesibility](https://adhithiravi.medium.com/web-accessibility-and-why-you-should-care-c8b436412ebd): Another medium post with some recommendations about accesibility.
- [Frontend Checklist](https://frontendchecklist.io/): A checklist with a lot of recommendations for a frontend application. [Here](https://github.com/thedaviddias/Front-End-Checklist) is the Github repo for this checklist.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse): An open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO and more.
- [web.dev](https://web.dev): A Google resource to learn, create, and solve on the web.
- [OWASP](https://owasp.org/): This site contains a lot of information on security practices. It's updated very often, so it's good to keep an eye on it.

You will find the template has some examples on how it could be used. You can delete the files or modify them to your needs.

### Application configuration

The application starts at /src/index.tsx. Here the ReactDOM render method is imported and renders the entire React application in a _div_ tag with an id called _root_. Also whitin the App component, Redux Provider component is rendered to have the global state available throughout the entire application.

Constants will have configuration inside the app (mainly things that are used in many places, but they won't be modified from outside, like an specific route).

**Note**: Some dependencies added in package.json, specially UI libraries, are not necessary. You can remove them if you want.

### Types

The /types dir contains all the different types that could be reused in different parts of the application. For example, you might find a type that will be needed in state, controller and views layers. Also, you could find different files inside the same layer that use this type. It's not a good practice to rewrite this type in every file (if you have to modify something, you will have to do it in a lot of files), so it's better to have them in a specific dir.

**Some guides**:

- If the type it's a TypeScript built-in, like "Record<string, string>", it's better NOT to include it in "types". The idea of /types it's to simplify TypeScript usage, not to have all the types in the same place.
- If the type it's too layer specific, maybe it shouldn't be here, because you could reuse that type in another layer when you shouldn't. This would break concerns separation: if controller uses some state specific types, then state it's not a module, and you cannot replace without changing the controller layer too.

### Errors

In a Frontend application, errors are usually not from the application, but from what an API call can return. For this, we recommend using an AxiosHelper for error handling. Then, you should develop the way the UI displays them.

### Internationalization

If the app will be needed in more than one language, this directory comes to the rescue.
Every app description or string that will be seen by the final user should be here. This way, you will find every text in the same place.
Also, internationalization lets you use more than one language. You can specify the description in english and spanish, for example, and also can be extended in the future.

So:

- If the string can be seen by the user, like a title, it should be added here.
- Every string should be written in the default language, but you can also have more than one.
- You can add error descriptions here by its code. For example, if the error is coded "MEDIA_NOT_FOUND", you can use MEDIA_NOT_FOUND = 'We cannot find the media you are looking for...'.

### State

This layer works as a module to interact with the global application state. For state management we use Redux, specifically with Redux Toolkit, which is a much simpler way of writing Redux logic.

Basically Redux Toolkit avoids separating Actions and Reducers, putting them together in a single place called Slices and another advantages such as allowing state mutability in reducers, a replacement of the createStore function, etc.

This layer should never be accessed directly. If any part of the app needs to update the state, it should access it through the actions layer.

The /state directory contains three main parts:

- **features**: This dir contains different RTK Slices for different features of the app.
- **actions**: Every action needed on the state should be here. It works as an abstraction layer on state. So, the main part to interact with the state should be in state/actions. Be careful, don't confuse this abstraction layer with Redux actions, it's just an abstraction layer.
- **storages**: It contains different methods to access to localStorage or sessionStorage.

Also, you will see two files:

- **store.ts**: It exports the application store.
- **index.ts**: It exports the application store, the storages and Redux actions.

#### State guide

For Redux Toolkit usage we recommend to read the [official documentation](https://redux-toolkit.js.org/). Is good to know that any application feature that needs to be in the global state, is necessary add a representative-name file into a /features folder, where a Slice must be created that includes the name of the feature, the initial state and the corresponding reducers. Then the feature selector, all the actions and reducer should be exported.

To subscribe a component to a part of the application state, you must pass the feature selector as a parameter to the React-Redux useSelector hook. Then when the state is updated the view will also do it and vice versa.

**Note**: It is important to note that non-serializable values should not be put in State or Actions. [Read more](https://redux.js.org/style-guide/style-guide#do-not-put-non-serializable-values-in-state-or-actions).

We recommend to read the [Redux best practices post](https://redux.js.org/style-guide/style-guide).

### Views

All React components should be here only, not anywhere else. Inside the index.tsx file in this folder there must be the necessary React-Router components with their respective screens, which brings us to the /screens folder. Inside this you must put the different TSX files for each application screen.

The /components folder contains all the application components. The best way to organize the components is to create a folder with the representative name of the component with Upper Camel Case as the naming convention. Inside each folder there should be an index.tsx file which contains the React component and an index.scss file which contains the component styles. For example, for a component called Counter, in another component or view it is imported as _~/views/components/Counter_, which makes the import more readable and less repetitive.

**Note**: It is important to note that everything related to React must only be in the /views folder, nowhere else.

#### Form control

There are many React form libraries. You will notice that in this template we have used [Formik](https://formik.org/), which is one of them, but we also recommend the use of [React Hook Form](https://react-hook-form.com/). Both are similar, having components necessary to build solid and easy-to-validate forms, also allowing the use of UI libraries such as [Material-UI](https://material-ui.com/) being completely independent of them.

### Styling

For styling we decided to use SASS as a CSS Preprocessor. Inside the /scss folder should be CSS utils and variables like font sizes, media query values, colors, etc. that are needed in different parts of the application styles.

### Controller

This layer has the app bussiness logic. Whatever the app needs to do or execute, it should be done here. This is the intermediate between state layer and views layer.

This is in order to prevent the state being accessed without control. Also, if in the future you need to add some bussiness logic rule, it can be added here (which is much tidier than inserting bussiness logic things in state layer).

**Guide**:

- Every state feature (vg: Counter) should be accessed by one controller (counterController). Avoid using more than one state feature by controller.
- If a controller file needs more than one state feature, use the other controller to access it.
- Do NOT add here API requests to other URLs. These should be added to /services directory, and controllers must use them.

### Services

This directory contains all the services consumed such as external APIs or backend application.
By default, any request to other server or another service should be here.

This template have a sample on how to use other services and also how to use this one, with this template response format. It works using the [axios](https://www.npmjs.com/package/axios) package.

```javascript
const APIClient = axios.create({
  baseURL: 'HERE THE URL'
  timeout: 10000,
  headers: {
    'X-API-KEY': 'SOME API KEY',
  },
  params: {
    some_param: 'SOME PARAM',
  },
});
```

Also, in /utils dir you can find a file called "axiosHelper" which will help you handling axios responses.
Axios is an awesome library but:

- Take any status code different than 2xx as an error (not what we wanted in REST).
- This errors have the response as an object and it's verbose to take that on every method.
- It's very verbose to use with TypeScript (and you have to use "any").

The file "axiosHelper" will help you get the response with the different information you need in this format, regardless of the status code:

```typescript
type axiosResponse = {
  success: true;
  statusCode: number;
  payload: any;
};

type axiosError = {
  success: false;
  error: {
    message: string;
    code?: number;
    url?: string;
    method?: string;
  };
};
```

From now on, you can get the format you want like this:

```typescript
  /**
   * Gets something.
   */
  async getSomething(): Promise<axiosResponse | axiosError> {
    const url = '/something';
    let result;
    try {
      const response = await APIClient.get(url);
      result = axiosHelper.handleResponse(response);
    } catch (error) {
      result = axiosHelper.handleError(error);
    }
    return result;
  }
};
```

In both cases, if the response is valid (a JSON), it will return the object with that information.

### Testing

It's very important to add tests in order to know the application is working correctly.
We will use Jest for that. It contains an extensive documentation on how to do it: [docs](https://jestjs.io/docs/en/getting-started). Also for React components tests, we use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

If we have time, it's always a good practice to have unit testing for everything.

All the tests are in the /tests directory with the suffix "test.ts". If they don't say ".test", they are not tested by Jest.
Before any test, Jest will use the "prepareTests.js" script.

#### Unit testing

Unit testing is very simple when you have modules you want to test and they always return the same output.
We should do unit testing for every module or script that do not use third party dependencies or other services.
The process is very simple and you can follow Jest documentation.

```javascript
test('Fs returns text OK.', () => {
  const text = fs.readFileSync(FILE_PATH, { encoding: 'utf8' });
  expect(text).toBe('Content of the file');
});
```

Always remember:

- Unit testing should test only ONE thing.
- They should be stateless (always make sure the unit testing does not expect a previous state, or, if they do, they should initialize it inside the function).

This documentation has nice good practices (for C#, but they also apply for JavaScript): [docs](https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-best-practices),

### Documentation

We use two main tools to document the application: Jest HTML reporter for tests and TYPE DOC for code documentation.

This template will generate two different folders for documentation in different times inside /docs.

- **code**: It will be added running npm run generate-docs with typedoc.
- **tests**: It will be added by Jest when the testings are finished and it gets the report.

#### Testing documentation

We use [Jest HTML Reporter](https://www.npmjs.com/package/jest-html-reporter) for document unit testing.
Just do unit and integration testings and it will save the results in the specified file.

#### Code documentation with TypeDoc

We use [TypeDoc](https://typedoc.org/). This documentation is done by using "npm run generate-docs". It reads file by file and generates a new documentation in "/docs". But in order to be tidy there must be some considerations:

- Always put module location in the top of the script. Like this:

```javascript
/**
 *  @packageDocumentation
 *  @module Path/To/Module
 *  Here some module description that will be seen in the docs.
 */
```

- If the entire file shouldn't be in the documentation, use @hidden:

```javascript
/**
 *  @packageDocumentation
 *  @hidden
 *  Here some module description.
 */
```

- Add a little documentation to every method and arguments.

```typescript
  /**
   *  Adds the sample to the database.
   *  @param sample Sample to save.
   */
  async addSample(sample: sampleType): Promise<boolean> {
    return samples.add(sample);
  }
```

- Remember to add "private" to everything that is private.
- Add a little description to any public thing that will be seen in docs.

```typescript
class ExampleClass {
  /**
   *  Some property of the class.
   */
  _property: string = '';
}
```

- If the file is an index and it's just an access to other objects, it's better to put "@hidden" on it, because it could appear empty on the docs.
- You can follow [TSDocs](https://github.com/microsoft/tsdoc) for notation.

**Note**: It's a good practice to watch documentation often, so you will see what the output is.

### Developing the application

This template is written in TypeScript, which means it has to be compiled before running.
There's a tool that hot reloads the new code and compiles the modified files in real time, so you don't have to wait for an entire compilation before developing new things. This template uses a package calles "tsc-watch", which uses tsc with "watch" mode.

When running "npm run dev", the package basically gets the webpack dev server up and allows access through the same device with which it's being used to develop and any other device that is connected to the same network.

This way, it's possible to change code in the TypeScript files and see the changes in real time.

But, this system is not perfect, and it can fail in some scenarios, in which you should run "npm run dev" again:

- If you add files that are not ".ts" or ".tsx": the "watch" mode only looks for JavaScript/TypeScript files, so it will ignore other files.
- If you change files names: it compiles files with the new name, but it won't delete the compiled file with the previous name, so both will exist.
- If you change a file for a folder. For example, "script.ts" now will be "script/index.ts". The compiler will create "script/index.js" without deleting "script.js" so they both will exist. It will fail in runtime because it will load the old "script.js" instead of the new "script" dir.

### Authentication and security recommendations

Following the [OWASP](https://owasp.org/) guidelines, it is not recommended to store access tokens or any sensitive information in LocalStorage or SessionStorage, mainly because they are accessible through JavaScript by XSS attack.

Here are some recommendations from OWASP and a Medium post that explain why you should store access tokens and sensitive information in cookies with httpOnly flag instead of LocalStorage/SessionStorage.

- [OWASP cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage)
- [Medium post](https://coolgk.medium.com/localstorage-vs-cookie-for-jwt-access-token-war-in-short-943fb23239ca)

### Scripts

You can use the following commands:
| Command | Description |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| npm run prepare | Installs the husky. |
| npm run \_clean | Deletes the **.next**, **out** and **build** dirs. |
| npm run \_control | Runs linters, formatter, type checker, unit tests and audits the production packages |
| rpm run lint | Runs eslint and stylelint in the **src** directory. |
| npm run format | Runs prettier in the **src** directory. |
| npm run type-check | Checks types. |
| npm run test:unit | Runs Jest for all the test in the /tests/unit directory. |
| npm run test:integration | Runs Jest for all the test in the /tests/integration directory. |
| npm run dev | Gets the Next.js dev server up. |
| npm run build-stats | Builds the project with bundles analyzer enabled. |
| npm run build | Runs npm run \_clean and generates the production build. |
| npm run export | Exports the app to static HTML to the **out** dir. |
| npm start | Gets the Next.js production server up. |
