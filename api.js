import axios from "axios";

const YTApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    key: "AIzaSyB-ABAFbOWu_zgvdTA4Z6kLFGyvROvn8R0",
    part: "snippet",
    maxResults: "5"
  }
})

export const videos = {
  mormonChannel: () => YTApi.get("", {
    params: {
      channelId: "UCdNjexbIS_NKJC4ZRwKf9ag"
    }
  }),
  mormonOrg: () => YTApi.get("", {
    params: {
      channelId: "UCImHL0SXFoB5AC33-qe6urQ"
    }
  }),
  tabChoir: () => YTApi.get("", {
    params: {
      channelId: "UCiAkukrUIRCwaLaFx_MJq7Q"
    }
  }),
  mormonNewroom: () => YTApi.get("", {
    params: {
      channelId: "UCWCpHqxpBcpnXiIiJOYgRYA"
    }
  })
}