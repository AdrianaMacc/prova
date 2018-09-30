import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const TINT_COLOR = "rgb(4, 159, 239)";

export default class Evento extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate("Details")}
        underlayColor={TINT_COLOR}
      >
        <View style={styles.row}>
          <Text>CIAO</Text>
          <Image source={{ uri: this.props.data.img }} />
          <View>
            <Text>{this.props.data.name}</Text>
            <Text>{this.props.data.location}</Text>
            <Text>{this.props.data.startDate}</Text>
            <Text>{this.props.data.endDate}</Text>
            <Text>{this.props.data.prize}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginLeft: 10,
    //borderWidth: 1,
    //marginHorizontal: 10,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center"
  },
  text: { flex: 1, fontSize: 18, marginLeft: 10 }
});
