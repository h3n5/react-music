import React from "react"
import "./songlistitem.scss"
import { withRouter } from "react-router-dom"
export default withRouter(
  class SongListItem extends React.Component {
    render() {
      const { tracks } = this.props
      return (
        <>
          <div className="sticky">
            <div className="img">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-playcircleoutline" />
              </svg>
            </div>
            <div className="playall vux-1px-b">
              播放全部
              <span>(共{tracks.length}首)</span>
            </div>
          </div>
          <ul className="songList">
            {tracks.map((item, index) => (
              <li className="list-item" key={item.id}>
                <div className="left">{index + 1}</div>
                <div className="right vux-1px-b">
                  <p className="title">{item.name}</p>
                  <p className="name">
                    {/* <x-icon
                    type="ios-checkmark"
                    size="14"
                    className="itemNum-icon"
                  /> */}
                    <span className="alname">{item.album.name}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )
    }
  }
)
