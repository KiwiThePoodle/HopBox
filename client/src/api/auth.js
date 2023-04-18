import * as postApi from "./index";
const afterReceiveAuth = (user_id,user_name, token, email, bio, address, profilePicture ) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user_id", user_id);
  localStorage.setItem("user_name", user_name);
  localStorage.setItem("email", email);
  localStorage.setItem("bio", bio);
  localStorage.setItem("address", address);
  localStorage.setItem("profilePicture", profilePicture);
  postApi.axiosInstance.defaults.headers[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
};

const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_name");
  localStorage.removeItem("email");
  localStorage.removeItem("bio");
  localStorage.removeItem("address");
  localStorage.removeItem("profilePicture");
  postApi.axiosInstance.defaults.headers["Authorization"] = "";
};
export { afterReceiveAuth, clearAuth };
