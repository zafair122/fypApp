import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { login } from "../src/services/userService";
import http from "../src/services/httpService";
const { width: WIDTH } = Dimensions.get("window");
import { storeJwtLocally } from "../src/utils/localStorage";

export default class MySignInScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Sign In",
    drawerIcon: () => <AntDesign name="login" size={25} color="#f4511e" />,
  };

  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
      email: "",
      password: "",
    };
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };

  loginUser = () => {
    const { email, password } = this.state;
    let valid_data = true;

    this.state.email_error = null;
    this.state.password_error = null;

    if (this.state.email === "") {
      this.state.email_error = "Required";
      valid_data = false;
    }

    if (this.state.password === "") {
      this.state.password_error = "Required";
      valid_data = false;
    }

    this.setState({
      update: true,
    });

    login(email, password)
      .then(({ data }) => {
        let { token } = data;
        console.log("login token => ", token);
        http.setJwt(token);
        alert("successfully sign in");
        storeJwtLocally(token);
      })
      .catch((e) => {
        console.log("login error => ", e);
        alert(e);
      });
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
                    placeholder={"Email"}
                    placeholderTextColor={"white"}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    onChangeText={(email) => this.setState({ email })}
                    error={this.state.email_error != null}
                    helperText={this.state.email_error}
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
                    returnKeyType="go"
                    onChangeText={(password) => this.setState({ password })}
                    error={this.state.password_error != null}
                    helperText={this.state.password_error}
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
                <View style={styles.btnAlign}>
                  <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => this.loginUser()}
                  >
                    <Text style={styles.textLogin}>Sign In</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 100, alignItems: "center" }}>
                  <TouchableOpacity style={styles.btnLogin}>
                    <Button
                      onPress={() => this.props.navigation.navigate("Register")}
                    >
                      <Text style={styles.textLogin}>Register Here</Text>
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
