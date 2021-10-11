import req from "./config";

export const userLogIn = (data) => {
  return req("post", "/login", data)
}

export const userLogOut = (data) => {
  return req("post", "/logout", data)
}

export const userRegister = (data) => {
  return req("post", "/register", data)
}

export const updateUserImg = (data) => {
  return req("post", "/users/uploadBase64Picture", data)
}


