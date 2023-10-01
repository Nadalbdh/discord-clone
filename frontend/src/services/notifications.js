import axios from "axios"

export const sendNewInvitation = (to_user, to_server) => {
  const data = {
    to_user,
    to_server,
    notification_type: 1,
  }
  const promise = axios.post("api/notification/createinvitation/", data)
  const dataPromise = promise.then((response) => response.data)
  return dataPromise
}

export const requestToJoinServer = (to_server) => {
  const data = {
    to_server,
    notification_type: 2,
  }
  const promise = axios.post("api/notification/invitation/request/", data)
  const dataPromise = promise.then((response) => response.data)
  return dataPromise
}

export const getNotfications = () => {
  const promise = axios.get("api/notification/getnotifications/")
  const dataPromise = promise.then((response) => response.data)
  return dataPromise
}

export const postAcceptInvitation = (invitation_id) => {
  const promise = axios.post(`api/notification/invitation/${invitation_id}/`)
  const dataPromise = promise.then((response) => response.data)
  return dataPromise
}

export const deleteNotification = (invitation_id) => {
  const promise = axios.delete(
    `api/notification/deletenotification/${invitation_id}/`
  )
  const dataPromise = promise.then((response) => response.data)
  return dataPromise
}
