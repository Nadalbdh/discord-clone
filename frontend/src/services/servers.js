import axios from "axios"

export const getServersInCategory = (id) => {
  const promise = axios.get(`api/server/getserverscategory/${id}/`)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const getServerCategories = () => {
  const promise = axios.get("api/server/getcategories/")
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const getServersInSearch = (title) => {
  const promise = axios.get("api/server/searchserver?search=" + title)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const createNewServer = (
  picture,
  banner,
  title,
  description,
  category
) => {
  const formData = new FormData()
  formData.append("picture", picture)
  formData.append("banner", banner)
  formData.append("title", title)
  formData.append("description", description)
  formData.append("category", category)

  const promise = axios.post("api/server/createserver/", formData)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const getSideNavServers = () => {
  const promise = axios.get("api/server/getservers/")
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const getServerData = (id) => {
  const promise = axios.get(`api/server/getserverdetail/${id}/`)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const createNewCategory = (server_id, title) => {
  const data = {
    server_id: server_id,
    title: title,
  }
  const promise = axios.post("api/server/createcategorychannel/", data)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const createNewChannel = (server_id, category_id, title, topic) => {
  const data = {
    server_id: server_id,
    title: title,
    category_id: category_id,
    topic: topic,
  }
  const promise = axios.post("api/server/createtextchannel/", data)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const banFromServer = (user_id, server_id) => {
  const promise = axios.delete(`api/server/ban/${user_id}/${server_id}/`)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const leaveServer = (server_id) => {
  const promise = axios.delete(`api/server/leaveserver/${server_id}/`)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}
