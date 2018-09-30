import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
const TINT_COLOR = "rgb(4, 159, 239)";
import EventList from "./components/EventList";
import Profile from "./components/Profile";
import DetailsScreen from "./components/DetailScreen";
import { FontAwesome } from "@expo/vector-icons";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: EventList
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

//TAb navigation per annidare più navigatori
const MainNav = createBottomTabNavigator(
  {
    Home: {
      screen: RootStack,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome name="home" size={20} />
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome name="user-o" size={20} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: TINT_COLOR,
      activeBackgroundColor: "white",
      inactiveTintColor: "white",
      labelStyle: {
        fontSize: 15
      },
      style: {
        backgroundColor: TINT_COLOR
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return <MainNav />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
