import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Button,
  FlatList
} from "react-native";

import Evento from "./Event";

const TINT_COLOR = "rgb(4, 159, 239)";
StatusBar.setBarStyle("light-content");

export default class EventList extends Component {
  state = {
    events: []
  };

  renderRow = ({ item }) => {
    console.log("ECCO ", item);
    <Evento data={item} />;
  };
  _keyExtractor = (item, index) => {
    //aggiungere un id ad ogni elemento pari alla sua pos
    item.id = index;
    return String(index);
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://www.dmi.unict.it/~calanducci/LAP2/events.json"
      );
      const responseJSON = await response.json();
      this.setState({ events: responseJSON.data });
      console.log(this.state.events);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.events}
          renderItem={this.renderRow}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

EventList.navigationOptions = ({ navigation }) => {
  return {
    title: "Home",
    headerStyle: {
      backgroundColor: TINT_COLOR
    },
    headerTintColor: "white"
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
