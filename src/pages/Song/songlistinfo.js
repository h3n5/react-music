import React from "react"
import "./songlistinfo.scss"
export default class SongListInfo extends React.Component {
  render() {
    const { coverImgUrl, name, creator } = this.props
    return (
      <div className="display">
        <div className="top">
          <div className="img">
            <img src={coverImgUrl} alt="coverImgUrl" />
          </div>
          <div className="message">
            <p className="name">{name}</p>
            <div className="avata">
              <img src={creator.avatarUrl} alt="avatarUrl" />
              <span>{creator.nickname}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
