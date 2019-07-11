import React from "react"
import { recommendSongs, playlistDetail } from "@/api/api"
import SongListInfo from "./songlistinfo"
import SongListItem from "./songlistitem"
import { withRouter } from "react-router-dom"
export default withRouter(
  class SongList extends React.Component {
    constructor() {
      super()
      let user = this.getUser()
      this.state = {
        tracks: [],
        user: user || {},
        playlist: {
          coverImgUrl: require("@/assets/img/default.png"),
          name: "loading"
        },
        creator: {
          avatarUrl: require("@/assets/img/default.png"),
          nickname: "loading"
        }
      }
    }
    getUser() {
      let user = localStorage.getItem("user_profile")
      return user ? JSON.parse(user) : false
    }
    componentDidMount() {
      const id = this.props.match.params.id
      if (id) {
        playlistDetail({ id: id }).then(res => {
          if (res.code === 200) {
            this.setState({
              tracks: res.playlist.tracks.map(v => {
                v.album = v.al
                return v
              }),
              creator: res.playlist.creator,
              playlist: res.playlist
            })
          }
        })
      } else {
        recommendSongs().then(res => {
          this.setState({
            tracks: res.recommend,
            playlist: {
              name: "每日推荐",
              coverImgUrl: this.state.user.backgroundUrl
            },
            creator: {
              nickname: this.state.user.nickname,
              avatarUrl: this.state.user.avatarUrl
            }
          })
        })
      }
    }
    render() {
      return (
        <>
          <SongListInfo
            coverImgUrl={this.state.playlist.coverImgUrl}
            name={this.state.playlist.name}
            creator={{
              nickname: this.state.creator.nickname,
              avatarUrl: this.state.creator.avatarUrl
            }}
          />
          <SongListItem tracks={this.state.tracks} />
        </>
      )
    }
  }
)
