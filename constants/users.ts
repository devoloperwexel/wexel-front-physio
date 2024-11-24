/**
 * Defines the API paths for users
 */
const API = {
  GET_USER: {
    path: "/users/:userId/?:query",
    method: "GET",
  },
  GET_USERS: {
    path: "/users?:query",
    method: "GET",
  },
};
//
export default API;
