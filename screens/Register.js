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

export default class MySignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
      showPass1: true,
      press1: false,
    };
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };

  showPass1 = () => {
    if (this.state.press1 == false) {
      this.setState({ showPass1: false, press1: true });
    } else {
      this.setState({ showPass1: true, press1: false });
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
              <View>
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
                    placeholderTextColor={"white"}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                  />
                </View>
                <View>
                  <Ionicons
                    style={styles.inputIcon}
                    name="ios-person"
                    size={25}
                    color={"white"}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={"Enter Email"}
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
                    placeholderTextColor={"white"}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                  />
                </View>
                <View>
                  <Ionicons
                    style={styles.inputIcon}
                    name="ios-lock"
                    size={25}
                    color={"white"}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={"Password"}
                    secureTextEntry={this.state.showPass}
                    placeholderTextColor={"white"}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                  />
                  <TouchableOpacity
                    style={styles.btnEye}
                    onPress={this.showPass.bind(this)}
                  >
                    <Ionicons
                      name={
                        this.state.press == false ? "ios-eye" : "ios-eye-off"
                      }
                      size={28}
                      color={"white"}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Ionicons
                    style={styles.inputIcon}
                    name="ios-lock"
                    size={25}
                    color={"white"}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={"Confirm Password"}
                    secureTextEntry={this.state.showPass1}
                    placeholderTextColor={"white"}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                  />
                  <TouchableOpacity
                    style={styles.btnEye}
                    onPress={this.showPass1.bind(this)}
                  >
                    <Ionicons
                      name={
                        this.state.press1 == false ? "ios-eye" : "ios-eye-off"
                      }
                      size={28}
                      color={"white"}
                    />
                  </TouchableOpacity>
                  <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder={"Your Address"}
                    placeholderTextColor={"white"}
                    numberOfLines={10}
                    multiline={true}
                    returnKeyType="go"
                  />
                </View>
                <View style={styles.btnAlign}>
                  <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textLogin}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 100, alignItems: "center" }}>
                  <TouchableOpacity style={styles.btnLogin}>
                    <Button
                      onPress={() => this.props.navigation.navigate("MySignIn")}
                    >
                      <Text style={styles.textLogin}>
                        Already have Account!
                      </Text>
                    </Button>
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
  textArea: {
    width: WIDTH - 55,
    height: 150,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    opacity: 0.7,
    backgroundColor: "#f4511e",
    color: "#fff",
    marginHorizontal: 25,
    margin: 10,
  },
});
