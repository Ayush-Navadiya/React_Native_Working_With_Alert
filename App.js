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