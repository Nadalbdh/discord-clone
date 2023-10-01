import axios from "axios"

export const getToken = () => {
  const token = localStorage.getItem("token")
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token
    return true
  } else {
    delete axios.defaults.headers.common["Authorization"]
    return false
  }
}

export const setAxiosAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token
  } else {
    delete axios.defaults.headers.common["Authorization"]
  }
}

export const setToken = (token) => {
  localStorage.setItem("token", token)
}

export const setCurrentUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user))
}

export const unsetCurrentUser = () => {
  setAxiosAuthToken(null)
  localStorage.removeItem("token")
  localStorage.removeItem("user")
}

export const getCurrentUser = () => {
  axios
    .get("api/users/me/")
    .then((response) => {
      const user = {
        id: response.data.id,
        username: response.data.username,
        picture: response.data.profile.picture,
        banner: response.data.profile.banner,
      }
      setCurrentUser(user)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const logout = () => {
  axios
    .post("api/token/logout/")
    .then((response) => {
      unsetCurrentUser()
    })
    .catch((error) => {
      console.log(error.response)
    })
}

export const loginUser = (username, password) => {
  const data = {
    username: username,
    password: password,
  }

  const promise = axios.post("api/token/login/", data)
  const dataPromise = promise.then((response) => response.data.auth_token)
  return dataPromise
}

export const registerUser = (username, password, email) => {
  const data = {
    username: username,
    password: password,
    email: email,
  }

  axios
    .post("api/users/", data)
    .then((response) => {
      console.log("Registered!")
    })
    .catch((error) => {
      console.log(error.response)
    })

  return true
}
