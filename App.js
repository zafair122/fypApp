import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
} from "react-navigation";
import MyAccountScreen from "./screens/AccountScreen";
import MyCartScreen from "./screens/CartScreen";
import MyHomeScreen from "./screens/HomeScreen";
import MyCnFbScreen from "./screens/MyCnFbScreen";
import MyOrderScreen from "./screens/MyOrderScreen";
import MyPrivacyPolScreen from "./screens/MyPrivacyPolScreen";
import MyRestBookingScreen from "./screens/MyRestBookingScreen";
import MySignInScreen from "./screens/MySignInScreen";
import MyNotificationsScreen from "./screens/NotificationScreen";
import MySignUpScreen from "./screens/Register";

console.disableYellowBox = true;
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home',
//   }
//   //   headerStyle: {
//   //     backgroundColor: '#f4511e',
//   //   },
//   //   headerTintColor: '#fff',
//   //   headerTitleStyle: {
//   //     fontWeight: 'bold',
//   //   },
//   // };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Home Screen</Text>
//         <Text>{this.props.navigation.getParam('greet')}</Text>
//         <Button title="Navigate to About Screen" onPress={()=>this.props.navigation.navigate('About', {greet: 'Message from Home Screen'})} />
//       </View>
//     );
//   }
// }
// class AboutScreen extends React.Component {
//   static navigationOptions = {
//     title: 'About',
//   }
//   //   headerStyle: {
//   //     backgroundColor: '#f4511e',
//   //   },
//   //   headerTintColor: '#fff',
//   //   headerTitleStyle: {
//   //     fontWeight: 'bold',
//   //   },
//   // };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>About Screen</Text>
//         <Text>{this.props.navigation.getParam('greet')}</Text>
//         <Button title="Go Back" onPress={()=>this.props.navigation.navigate('Home', {greet: 'Message back from About Screen'})} />
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   About: {
//     screen: AboutScreen
//   }
// },
// {
//   initialRouteName: 'Home',
//   /* The header config from HomeScreen is now here */
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: '#f4511e',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//   },
// },
// );

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });

// Drawer Navigator Start
const MyDrawerNavigator = createDrawerNavigator({
  Home: MyHomeScreen,
  Notifications: MyNotificationsScreen,
  Booking: MyRestBookingScreen,
  MyCart: MyCartScreen,
  MyOrder: MyOrderScreen,
  MyAccount: MyAccountScreen,
  MyCnFb: MyCnFbScreen,
  MyPrivacy: MyPrivacyPolScreen,
  MySignIn: MySignInScreen,
});

const MyStackNavigator = createStackNavigator(
  {
    defaultHome: MyDrawerNavigator,
    Register: MySignUpScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        title: "Al Jue Food Resturent",
        headerLeft: (
          <Ionicons
            name="md-menu"
            style={{ marginLeft: 20 }}
            size={32}
            color="white"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      };
    },
  }
);

// Drawer Navigator End

// Bottom Navigator Start

const MyHomeStack = createStackNavigator(
  {
    Home: MyHomeScreen,
  },
  {
    defaultNavigationOptions: {
      title: "My Home App",
    },
  }
);

const MyResturantStack = createStackNavigator(
  {
    Restaurants: MyRestBookingScreen,
  },
  {
    defaultNavigationOptions: {
      title: "My Resturant",
    },
  }
);

const MyNotifiStack = createStackNavigator(
  {
    Notifications: MyNotificationsScreen,
  },
  {
    defaultNavigationOptions: {
      title: "My Notifications",
    },
  }
);

const MyCartStack = createStackNavigator(
  {
    MyCart: MyCartScreen,
  },
  {
    defaultNavigationOptions: {
      title: "My Cart",
    },
  }
);

const MyAccountStack = createStackNavigator(
  {
    MyAccount: MyAccountScreen,
  },
  {
    defaultNavigationOptions: {
      title: "My Account",
    },
  }
);

const MyTabs = createBottomTabNavigator(
  {
    Home: MyHomeStack,
    Notifications: MyNotifiStack,
    MyCart: MyCartStack,
    MyAccount: MyAccountStack,
    Restaurants: MyResturantStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let myicon;
          if (routeName == "Home") {
            myicon = "md-home";
          } else if (routeName == "Notifications") {
            myicon = "md-notifications";
          } else if (routeName == "MyCart") {
            myicon = "md-cart";
          } else if (routeName == "MyAccount") {
            myicon = "md-contact";
          } else if (routeName == "Restaurants") {
            myicon = "ios-restaurant";
          }
          return <Ionicons name={myicon} size={25} color={tintColor} />;
        },
      };
    },
    tabBarOptions: {
      activeTintColor: "#f4511e",
      inactiveTintColor: "grey",
    },
  }
);
// Bottom Navigator Ends

const AppContainer = createAppContainer(MyStackNavigator);
const AppContainer1 = createAppContainer(MyTabs);

// const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
    {
      /* <AppContainer1 /> */
    }
  }
}

// export default App
