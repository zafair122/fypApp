import http from "./httpService";
import { apiUrl } from "../../config.json";

const apiEndPoint = apiUrl + "/api/user";
const signupEndPoint = apiEndPoint + "/signup";
const loginEndPoint = apiEndPoint + "/login";
const logoutEndPoint = apiEndPoint + "/logout";
const profileEndPoint = apiEndPoint + "/profile";
const changePasswordEndPoint = apiEndPoint + "/changepassword";
const testUrl = apiUrl + "/api";

export function signUp(user) {
  return http.post(signupEndPoint, user);
}

export function login(email, password) {
  return http.post(loginEndPoint, { email, password });
}
export function logout() {
  return http.get(logoutEndPoint);
}

export function changePassword(email, password) {
  return http.put(changePasswordEndPoint, { email, password });
}

export function getProfile(id) {
  let finalProfileEndPoint = profileEndPoint + "/" + id;
  return http.get(finalProfileEndPoint);
}
export function test() {
  return http.get(testUrl);
}
