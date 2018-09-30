import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const TINT_COLOR = "rgb(4, 159, 239)";

export default class Profile extends Component {
  //state = {
  // done: this.props.data.done
  //};
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
