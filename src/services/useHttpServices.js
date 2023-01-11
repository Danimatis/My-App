import httpService, { setCommonHeader } from "./httpServices";
import jwtDecode from "jwt-decode";

const AUTH_TOKEN = "token";
setTokenHeader();
export function createUser(user) {
  return httpService.post("/users", user);
}
export async function logInUser(user) {
  const { data } = await httpService.post("/auth", user);
  localStorage.setItem(AUTH_TOKEN, data.token);
  setTokenHeader();
}
export function getJwt() {
  return localStorage.getItem(AUTH_TOKEN);
}
export function setTokenHeader() {
  setCommonHeader("x-auth-token", getJwt());
}
export function logOut() {
  localStorage.removeItem(AUTH_TOKEN);
  setTokenHeader();
}
export function getUser() {
  try {
    const token = getJwt();
    return jwtDecode(token);
  } catch {
    return null;
  }
}
const userService = {
  getUser,
  logInUser,
  logOut,
  getJwt,
  createUser,
};
export default userService;
