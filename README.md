# Planning Center Tech Interview Prep

Congratulations on making it to the tech interview portion of our
hiring process. Without giving too much away, we'll be pairing up on
some tasks together in an app that has the same dependencies and setup
as this app.

In order to make things go smoothly during the interview, we've
prepared this very small application so that you can prepare your
machine for the prerequisites of the actual application we'll be
working on together.

## General Setup

This app depends on:
```
ruby: 2.7.5
node: 16
```

If you haven't already please get your system ready to run react-native by following [these instructions](https://reactnative.dev/docs/0.68/environment-setup).

To run the mobile app:
```
npm install
bundle install

# Start the server
npm run server

# If running ios
cd ios
bundle exec pod install

npm run ios

# Else
npm run android

```

### Troubleshooting
If you need some extra help getting this working or have any other
questions, please feel free to contact us through whichever form of
communication we've been using with you so far. If you just cannot
get it working before the interview, don't sweat it—we'll help you
through it.

If you are regularly running react-native apps consider running:
```
npx react-native-clean-project
```
