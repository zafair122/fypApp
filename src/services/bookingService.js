import http from "./httpService";
import { apiUrl } from "../../config.json";

const apiEndPoint = apiUrl + "/api/booking";

export function postBooking(id, booking) {
  let postBookingUrl = apiEndPoint + "/" + id;
  return http.post(postBookingUrl, booking);
}

export function deleteBooking(id) {
  let deleteBookingUrl = apiEndPoint + "/" + id;
  return http.delete(deleteBookingUrl);
}

export function getMyBookings(id) {
  let myBookingsUrl = apiEndPoint + "/mybookings/" + id;
  return http.get(myBookingsUrl);
}
