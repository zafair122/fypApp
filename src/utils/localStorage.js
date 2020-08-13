import { AsyncStorage } from "react-native";
var jwtDecode = require("jwt-decode");
export const storeJwtLocally = async (jwt) => {
  try {
    await AsyncStorage.setItem("@jwt", jwt);
  } catch (error) {
    // Error saving data
  }
};
export const retrieveJwt = async () => {
  try {
    const value = await AsyncStorage.getItem("@jwt");
    return value;
  } catch (error) {
    // Error retrieving data
    return null;
  }
};

export const getUserId = async () => {
  try {
    const value = await AsyncStorage.getItem("@jwt");
    let decoded = jwtDecode(value);
    return decoded.id;
  } catch (error) {
    // Error retrieving data
    return null;
  }
};
