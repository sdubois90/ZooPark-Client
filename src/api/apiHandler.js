import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

// This function will be passed to the .catch() blocks of our AJAX requests.
// It will help us display human readable error messages into the console before
// throwing the error again allowing us to .catch() the error somewhere else in our
// application.
function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler); // This is exactly the same as writing it
    //   .catch(error => {  //          as
    //       errorHandler(error) //   this
    //   })
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // It doesn't only have to be about authentication.
  // The more complex your application is, the more routes you will have,
  // the apiHandler could be broken into submodules.
  // But, let's keep it simple, it's already a lot :D

  getItems() {
    return service
      .get("/api/posts")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createItems(info) {
    return service
      .post("/api/posts", info)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
