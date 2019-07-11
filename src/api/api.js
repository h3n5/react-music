import apiMusic from "./api.url"
import HttpRequest from "./axios"
// const baseUrl = 'http://34.80.55.4:3000'
const baseUrl = "http://localhost:3333"
const axios = new HttpRequest(baseUrl)
export const getBanner = () => {
  return axios.request({
    url: apiMusic.banner,
    method: "get"
  })
}
export const getpersonalized = () => {
  return axios.request({
    url: apiMusic.personalized,
    method: "get"
  })
}
export const getSongListByOrder = data => {
  return axios.request({
    url: apiMusic.topPlaylist,
    method: "get",
    params: data
  })
}
export const getAllTag = (params = {}) => {
  return axios.request({
    url: apiMusic.allTag,
    method: "get",
    params: params
  })
}
export const getSongUrl = id => {
  return axios.request({
    url: apiMusic.musicUrl,
    method: "get",
    params: {
      id: id
    }
  })
}
export const getLyric = id => {
  return axios.request({
    url: apiMusic.lyric,
    method: "get",
    params: {
      id: id
    }
  })
}
export const gethotSearch = () => {
  return axios.request({
    url: apiMusic.hotSearch,
    method: "get"
  })
}
export const searchMusic = data => {
  return axios.request({
    url: apiMusic.search,
    method: "get",
    params: data
  })
}
export const getsongDetail = id => {
  return axios.request({
    url: apiMusic.songDetail,
    method: "get",
    params: {
      ids: id
    }
  })
}
export const getsongAlbum = id => {
  return axios.request({
    url: apiMusic.album,
    method: "get",
    params: {
      id: id
    }
  })
}
export const loginCellphone = (
  params = {
    phone: "",
    password: ""
  }
) => {
  return axios.request({
    url: apiMusic.loginCellphone,
    method: "get",
    params: params
  })
}
export const loginEmail = (
  params = {
    email: "",
    password: ""
  }
) => {
  return axios.request({
    url: apiMusic.loginEmail,
    method: "get",
    params: params
  })
}
export const logout = (params = {}) => {
  return axios.request({
    url: apiMusic.logout,
    method: "get",
    params: params
  })
}
export const userPlaylist = (
  params = {
    uid: ""
  }
) => {
  return axios.request({
    url: apiMusic.userPlaylist,
    method: "get",
    params: params
  })
}
export const userRecord = (
  params = {
    uid: "",
    type: 1
  }
) => {
  return axios.request({
    url: apiMusic.userRecord,
    method: "get",
    params: params
  })
}
export const playlistDetail = (
  params = {
    id: ""
  }
) => {
  return axios.request({
    url: apiMusic.playlistDetail,
    method: "get",
    params: params
  })
}
export const recommendSongs = (params = {}) => {
  return axios.request({
    url: apiMusic.recommendSongs,
    method: "get",
    params: params
  })
}
export const toplist = (params = {}) => {
  return axios.request({
    url: apiMusic.toplist,
    method: "get",
    params: params
  })
}
export const artistList = (params = {}) => {
  return axios.request({
    url: apiMusic.artistList,
    method: "get",
    params: params
  })
}
export const djProgram = (params = {}) => {
  return axios.request({
    url: apiMusic.djProgram,
    method: "get",
    params: params
  })
}
export const commentMusic = (params = {}) => {
  return axios.request({
    url: apiMusic.commentMusic,
    method: "get",
    params: params
  })
}
export const simiPlaylist = id => {
  return axios.request({
    url: apiMusic.simiPlaylist,
    method: "get",
    params: { id }
  })
}
export const searchIndex = data => {
  const search = [1, 10, 1000].map((v, i) =>
    axios.request({
      url: apiMusic.search,
      method: "get",
      params: {
        keywords: data,
        type: v,
        limit: 4 - i
      }
    })
  )
  return Promise.all(search)
}
