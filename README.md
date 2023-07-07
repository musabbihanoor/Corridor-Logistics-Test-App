
# Corridor Logistics Test Task

A simple mobile application built on React Native to demonstrate skills for mobile application development.

The application fetching Venues and their details and display them in a two separate ways.

- First implementation shows the list in a `ScrollView` in form of cards, which lead user to a screen with further details and Google Map
- Second implementation shows all the venues on a Google Map in form of custom Markers.

Here are some screenshots of the app.

![Screenshot 1](https://i.ibb.co/9hP18Pq/Screenshot-2023-07-07-162114.png)

![Screenshot 3](https://i.ibb.co/X42rzcH/Screenshot-2023-07-07-162247.png)

![Screenshot 4](https://i.ibb.co/B4X4pZT/Screenshot-2023-07-07-162308.png)


## Installation

1. Clone the repository to your local machine:

```shell
git clone https://github.com/musabbihanoor/Corridor-Logistics-Test-App.git
```

2. Navigate to the project directory

```shell
cd Corridor-Logistics-Test-App
```

3. Install the project dependencies

```shell
npm Install
```

4. Start the Expo development server:

```shell
npm start
```

## About the App

### Folder Structure
- `actions`: Contains actions for redux
- `components`: Contains smaller components for screens
- `constants`: store contant values such as API Endpoint
- `navigator`: I have used Tab Navigator in this example for better UI display
- `reducer`: Contains reducer for redux
- `screens`: Contains all the screens

### Screens 
There are 4 screens:

- `SplashScreen`: Shows up the beginning when you run the app
- `HomeScreen`: Display all the venues in a list in form of cards
- `DetailsScreen`: Show details of each venue card
- `MapScreen`: Display all the venues in a Google Map

### Dependencies
- [@react-navigation/bottom-tabs](https://github.com/react-native-community/react-native-side-menu) `6.5.8`
- [@react-navigation/native](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `6.1.7`
- [expo-splash-screen](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `0.18.2`
- [react-native-maps](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `1.3.2`
- [react-native-safe-area-context](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `4.5.0`
- [react-native-screens](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `3.2.0`
- [react-native-snap-carousel](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `3.9.1`
- [react-redux](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `8.1.1`
- [redux](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `4.2.1`
- [redux-thunk](https://www.npmjs.com/package/@fortawesome/react-native-fontawesome) `2.4.2`
