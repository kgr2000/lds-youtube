import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    key: "AIzaSyAfyv8J9p3ToKbMe7nVgLOARYAJE9vQcwQ",
    part: "snippet",
    maxResults: "5"
  }
})

export const videos = {
  mormonChannel: () => api.get("", {
    params: {
      channelId: "UCdNjexbIS_NKJC4ZRwKf9ag"
    }
  }),
  mormonOrg: () => api.get("", {
    params: {
      channelId: "UCImHL0SXFoB5AC33-qe6urQ"
    }
  }),
  tabChoir: () => api.get("", {
    params: {
      channelId: "UCiAkukrUIRCwaLaFx_MJq7Q"
    }
  }),
  mormonNewroom: () => api.get("", {
    params: {
      channelId: "UCWCpHqxpBcpnXiIiJOYgRYA"
    }
  })
}