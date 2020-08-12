import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import MyFrndScreen from "./FrndListScreen";
import MyFrndSugScreen from "./FrndSugScreen";
import MyNotiCardScreen from "./MyNotiCardScreen";

// Bottom Navigator Start

const MyTabs = createBottomTabNavigator(
  {
    Friends: MyFrndScreen,
    Suggestions: MyFrndSugScreen,
    Notifications: MyNotiCardScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let myicon;
          if (routeName == "Suggestions") {
            myicon = "md-person-add";
          } else if (routeName == "Friends") {
            myicon = "md-person";
          } else if (routeName == "Notifications") {
            myicon = "md-notifications";
          }
          return <Ionicons name={myicon} size={25} color={tintColor} />;
        },
      };
    },
    tabBarOptions: {
      activeTintColor: "#f4511e",
      inactiveTintColor: "#F8906F",
    },
  }
);
// Bottom Navigator Ends

const AppContainer1 = createAppContainer(MyTabs);

export default class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: () => (
      <Ionicons name="md-notifications" size={25} color="#f4511e" />
    ),
  };
  render() {
    return <AppContainer1 />;
    {
      /* <AppContainer1 /> */
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
