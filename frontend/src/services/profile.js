import axios from "axios"

export const getProfileData = () => {
  const promise = axios.get(`api/profile/getprofile/`)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const updateProfileData = (
  name,
  email,
  profile_info,
  picture,
  banner
) => {
  const formData = new FormData()
  if (name) { 
    formData.append("first_name", name)
  } else if (email) {
    formData.append("email", email)
  } else if (profile_info) {
    formData.append("profile_info", profile_info)
  } else if (picture) {
    formData.append("picture", picture)
  } else if (banner) {
    formData.append("banner", banner)
  }
  const promise = axios.patch(`api/profile/updateprofile/`, formData)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}
