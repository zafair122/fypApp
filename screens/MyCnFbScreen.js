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

const { width: WIDTH } = Dimensions.get("window");

export default class MySignInScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Feedback",
    drawerIcon: () => <Ionicons name="md-call" size={25} color="#f4511e" />,
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
                    placeholder={"Email"}
                    placeholderTextColor={"white"}
                    underlineColorAndroid="transparent"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder={"Write About Your Complaint or Suggestion."}
                    placeholderTextColor={"white"}
                    numberOfLines={10}
                    multiline={true}
                    returnKeyType="go"
                  />
                </View>
                <View style={styles.btnAlign}>
                  <TouchableOpacity style={styles.btnLogin}>
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
