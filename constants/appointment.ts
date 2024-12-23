/**
 * Defines the API paths for appointment
 */
const API = {
  GET_APPOINTMENT: {
    path: "/users/:userId/appointments/:appointmentId",
    method: "GET",
  },
  GET_APPOINTMENTS: {
    path: "/appointments?:query",
    method: "GET",
  },
};
//
export default API;
