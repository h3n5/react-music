import React from "react"
import { toplist } from "@/api/api"
import "./index.scss"
import RankingList from "./rankingList"
export default class Ranking extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    toplist().then(res => {
      this.setState({ list: res.list.slice(0, 4) })
    })
  }
  render() {
    return (
      <div className="mContent">
        <div className="songList">
          <div className="listItem">
            <div className="title">
              <p className="title-word">云音乐官方版</p>
              <p className="random" />
            </div>
            {this.state.list.map(v => (
              <RankingList song={v} key={v.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
