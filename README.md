# React_Native_Working_With_Alert
React Native working with alert and linking example


---
### What is Alert?

>Launches an alert dialog with the specified title and message.

>Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button.

>This is an API that works both on Android and iOS and can show static alerts. Alert that prompts the user to enter some information is available on iOS only.


---
### Prerequisite

1. Download Node JS from : https://nodejs.org/
2. Install Node JS
3. Check if installed successfully using commands: \
                                                   1. node --version\
                                                   2. npm --version

---
### How To Run

1. Open Command Line
2. Move to project directory
4. Run command "npm install" to install node modules
5. Run command "npm start" to start expo cli
6. Let it get started. Then select option to run on appropriate device
7. Make sure that an emulator is running\ or else if you are using your mobile make sure that USB debugging is turned on
8. You will see the output on the targeted device


---
# Contribute 

> Give a thanks with coffee [Here](https://www.buymeacoffee.com/ayushnavadiya).\
> https://www.buymeacoffee.com/ayushnavadiya

---
## Output
![Output](https://github.com/Ayush-Navadiya/React_Native_Working_With_Alert/blob/master/output/output.gif)



# Getting started from scratch


---
### Prerequisite

1. Download Node JS from : https://nodejs.org/
2. Install Node JS
3. Check if installed successfully using commands: \
                                                   1. node --version\
                                                   2. npm --version

Install Expo-cli to start with react native expo app and if already installed skip this installation:

```bash
npm install --global expo-cli
```

Initialize app with the following command:

```bash
expo init your-project-name
```

Note: When You Run the 'expo init' command it will ask you to choose template go with: \
 - blank : a minimal app as clean as an empty canvas


---
## Running Program 
1. Open Command Line
2. Move to project directory
4. Run command "npm install" to install node modules
5. Run command "npm start" to expo cli
6. Let it get started then select option to run on appropriate device
7. Make sure that an emulator is running\ or else if you are using your mobile make sure that USB debugging is turned on
8. You will see the output on the targeted device
9. To see the output on screen. Change the app.js code with the code given bellow

```
import React from "react";
import { View, StyleSheet, Button, Alert, Linking } from "react-native";

const App = () => {

  const contributeAlert = () =>
    Alert.alert(
      "Contribute",
      "Contriute with a coffee",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
           text: "OK",
          onPress: () => Linking.openURL('https://www.buymeacoffee.com/ayushnavadiya')
        }
      ]
    );

  return (
    <View style={styles.container}>
      <Button title={"Contribute"} onPress={contributeAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default App;


```
