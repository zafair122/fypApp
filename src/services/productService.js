import http from "./httpService";
import { apiUrl } from "../../config.json";

const apiEndPoint = apiUrl + "/api/product";
const productEndPoint = apiEndPoint + "/create";

export function createProduct(product) {
  return http.post(productEndPoint, product);
}
export function getProducts() {
  return http.get(apiEndPoint);
}
export function getProductById(id) {
  let getProductUrl = apiEndPoint + "/" + id;
  return http.get(getProductUrl);
}
export function deleteProductById(id) {
  let deleteProductUrl = apiEndPoint + "/" + id;
  return http.delete(deleteProductUrl);
}
export function updateProductById(id, product) {
  let updateProductUrl = apiEndPoint + "/" + id;
  return http.put(updateProductUrl, product);
}
