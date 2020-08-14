import http from "./httpService";
import { apiUrl } from "../../config.json";

const apiEndPoint = apiUrl + "/api/order";
const myOrdersEndPoint = apiEndPoint + "/myorders";

export function postOrder(id, order) {
  let postOrderUrl = apiEndPoint + "/" + id;
  return http.post(postOrderUrl, order);
}

export function deleteOrder(userId, orderId) {
  let deleteOrderUrl = apiEndPoint + "/" + userId;
  return http.delete(deleteOrderUrl, { id: orderId });
}
export function getMyOrders(id) {
  let myOrdersUrl = myOrdersEndPoint + "/" + id;
  console.log("my order url => ", myOrdersUrl);
  return http.get(myOrdersUrl);
}
