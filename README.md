# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

Run the app by doing the following:

1. Open a terminal window and run the following command from the root directory of the repo
```bash
npm i
```

>**Note**: If you're having issues with iOS you can try reinstalling the dependencies by running the following
> `cd ios && bundle exec pod install`

2. Once dependencies have installed, in the root directory of the repo run the following to start the Metro server:
```bash
npm start
```

3. Open another terminal window and in the root directory of the repo run the following command:
```bash
npm run ios
```

## Implementation Overview

### Contexts

I used two different contexts to manage application data: one for products and one for cart. The Cart context wraps the entire app. The Products context only wraps the Collections navigator which holds the product collection page and the product details page. This is because the cart page does not need the information that comes from the Products context provider. The product details page does require the `addToCart` method from the Cart context provider in order to add a produdct to cart.

### Design System

I created a folder called `polaris-at-home` to try and mimic a design system, albeit not very effectively. The idea was to have base, reusable components in that foler which would then be the building blocks for screen specific components.

### Navigation

I used tab navigation and native stack navigation as per the instructions of the project. There were two native stack navigators: one for Collections and one for Cart. 
