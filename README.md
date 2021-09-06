# Trio-Fronted

A react page to sync contacts from mailchimp to firebase or sendgrid.

## Table of Contents

- [Production URL](#production-url)
- [Technology](#technology)
- [Developing](#developing)
  - [First Install](#first-install)
  - [Running tests](#running-tests)
- [Technical Design](#technical-design)
- [Next Steps](#next-steps)

## Prodution Url

`https://trio-frontend-dev-zeke.herokuapp.com/`

## Technology

Here's a brief overview of our technology stack:

- **[React](https://reactjs.org)** Used to create our page

- **[Next](https://next.me/)** Used to increase the security

- **[Heroku](https://heroku.com)** As a service to deploy

## Developing

In order to develop for this project you must have npm and node.js installed

Version used:

`"node": "14.17.0", "npm": "7.15.1"`

First Install

If you never developed in this repo before:

```sh
$ git clone git@github.com:ezequiel454/trio-frontend.git
```

2. **Install dependencies:**

```sh
$ npm i
```

### Running tests

- **Run test**
  ```sh
  $ npm run test
  ```

## Technical Design

This section i will explain the logics on this project

1. **Pages**
   This folder have our pages and the next api.

2. **Api Folder**

   - Here we have our logic to make request to the server
   - `sync-contacts` it's a folder with slug that send request to firebase or sendgrid
   - Util have only the axios create baseUrl to use on next

3. **Styles Folder**

   - Here we have the `GlobalStyles` that have all global styles
   - We also have pages folder to organize styles by page

4. **Utils**

   - We have a folder utils in src to query react to next

5. **index.tsx**

   - This file it's our home page
   - We have a `useCallback` to make the performace better to our functions
   - `PushSyncButton` This button call the api in next to request firebase or sendgrid

## Next Steps

Some considerations to improvement

1. About Technical Design

- I used all my free time to focus on dev, so the Technical Desing it's not full covered
