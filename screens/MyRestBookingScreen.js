import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "react-native-paper";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const { width: WIDTH } = Dimensions.get("window");
import { postBooking } from "../src/services/bookingService";
import { retrieveJwt, getUserId } from "../src/utils/localStorage";
export default class MyRestBookingScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Booking",
    drawerIcon: () => (
      <Ionicons name="ios-restaurant" size={25} color="#f4511e" />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      noOfPersons: 5,
      noOfTables: 2,
      datw: "",
      time: "",
      name: "",
      contact: "",
    };
  }
  submitBooking = async () => {
    let jwt = await retrieveJwt();
    if (jwt !== null && jwt !== undefined) {
      const { noOfPersons, noOfTables, date, time, name } = this.state;
      let userId = await getUserId();
      console.log("user id => ", userId);
      let booking = {
        noOfPersons,
        noOfTables,
        date,
        time,
      };
      console.log("booking object => ", booking);
      postBooking(userId, booking)
        .then(({ data }) => {
          alert("your booking is successful");
          console.log("submit booking response => ", data);
        })
        .catch((e) => console.log("submit booking error => ", e));
    } else {
      alert("please login fist");
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("./assets/sb4.jpg")}
        style={styles.backgroundContainer}
      >
        <KeyboardAvoidingView behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
              <View style={{ marginBottom: 100 }}>
                <View style={styles.logoContainer}>
                  <Image
                    source={require("./assets/logo2.png")}
                    style={styles.logo}
                  />
                  <Text style={styles.logotext}>Al-Jue Foods</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Ionicons
                    style={styles.inputIcon}
                    name="ios-person"
                    size={25}
                    color={"white"}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={"Enter Name"}
                    onChangeText={(name) => this.setState({ name })}
                    placeholderTextColor={"white"}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                  />
                </View>
                <View>
                  <Ionicons
                    style={styles.inputIcon}
                    name="ios-call"
                    size={25}
                    color={"white"}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={"Enter Contact"}
                    onChangeText={(contact) => this.setState({ contact })}
                    placeholderTextColor={"white"}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                  />
                </View>
                <View>
                  <Ionicons
                    style={styles.inputIcon}
                    name="md-calendar"
                    size={25}
                    color={"white"}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={"Date ( dd-mm-yyyy )"}
                    placeholderTextColor={"white"}
                    onChangeText={(date) => this.setState({ date })}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                  />
                </View>
                <View>
                  <Ionicons
                    style={styles.inputIcon}
                    name="md-clock"
                    size={25}
                    color={"white"}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={"Time ( 8:00 am )"}
                    placeholderTextColor={"white"}
                    underlineColorAndroid="transparent"
                    onChangeText={(time) => this.setState({ time })}
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                  />
                </View>
                <View style={styles.btnAlign}>
                  <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => this.submitBooking()}
                  >
                    <Text style={styles.textLogin}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: "20%",
  },
  logotext: {
    color: "#f4511e",
    fontSize: 30,
    fontWeight: "500",
    marginTop: 0,
    opacity: 0.7,
  },
  logo: {
    width: 180,
    height: 180,
  },
  input: {
    width: WIDTH - 55,
    height: 50,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    opacity: 0.7,
    backgroundColor: "#f4511e",
    color: "#fff",
    marginHorizontal: 25,
    margin: 10,
  },
  inputIcon: {
    position: "absolute",
    top: 20,
    left: 37,
    zIndex: 1,
  },
  inputContainer: {
    marginTop: 50,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4511e",
    marginTop: 20,
    opacity: 0.8,
  },
  textLogin: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  btnEye: {
    position: "absolute",
    top: 20,
    right: 37,
    zIndex: 1,
  },
  btnAlign: {
    alignItems: "center",
  },
});
