import axios from "axios"

export const getChatData = (id) => {
  const promise = axios.get(`api/chat/getchats/${id}/`)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const getMoreChatData = (link) => {
  const promise = axios.get(link)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const sendMessage = (body, chatfile, channel) => {
  const formData = new FormData()

  if (chatfile) {
    formData.append("file", chatfile)
  } else if (body) {
    formData.append("body", body)
  }
  formData.append("channel", channel)

  const promise = axios.post("api/chat/sendmessage/", formData)
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}

export const deleteMessage = (message_id, server_id) => {
  const promise = axios.delete(
    `api/chat/deletemessage/${message_id}/${server_id}/`
  )
  const dataPromise = promise.then((response) => response.data)

  return dataPromise
}
