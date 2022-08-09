For https://github.com/microsoft/playwright/issues/16341.

- [`src/User.tsx`](src/Users.spec.tsx): example component that makes network requests when loading
- [`src/Users.spec.tsx`](src/Users.spec.tsx): example test case using the above component
- [`playwright/index.ts`](playwright/index.ts): shows [`beforeMount` hook](https://playwright.dev/docs/release-notes#-component-tests-update) which can be used to run code **in the browser**.

To run:

```
$ git clone git@github.com:rwoll/playwright-miragejs-demo.git
$ cd playwright-miragejs-demo
$ npm i
$ npm run test-ct
```