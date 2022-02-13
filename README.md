# brass-work-sample

## Task Description

We are a software development company that a client reached out to to help build a
single page bank web application that provides some basic features for their
customers.
Their desired features are:
1. An interface for creating a new payment (that is, fund transfers)

    a. It allows the customer select the bank and provide the destination account
number (the account number must be validated before proceeding)

    b. It allows the user enter an amount that is bound by the rules on ≥ 100 and ≤
10,000,000

    c. Sends the payment information to the API for processing

2. An interface that allows a user see all payments they've ever created and view
the details on any one that's selected
They have requested that we use a payment gateway provider in Nigeria (e.g.
Paystack, Flutterwave).
Requirements
The payment gateway of your choice needs to have a publicly accessible API
documentation
The routes and design is entirely up to you (you can keep things simple)
Keep your application source code on a public Github repository
Provide a live demo URL for your sample app (you can deploy your app to Expo)


## Installation

`clone project`

`expo install`

`cp .env.example .env`

The API repository is available on [Brass work sample API](https://github.com/SirOlaoluwani/brass-work-sample-api).

## How to Run project

`expo start`

## Testing

`yarn test`

## Libraries used 

- [React Query](https://react-query.tanstack.com/) and [Axios](https://axios-http.com/docs/intro) for data fetching
- [React Navigation](https://reactnavigation.org/) for handling navigation
- [React Dotenv](https://github.com/goatandsheep/react-native-dotenv) for environment variables
- [React Native Dropdown Picker](https://github.com/hossein-zare/react-native-dropdown-picker) for displaying select
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) for unit testing

## Live project

The live project is available on [Expo Store](https://expo.dev/@sirolaoluwani/simple-pay)