import React from "react"
import { withRouter } from "react-router-dom"
export default withRouter(
  class RankingList extends React.Component {
    countNumber(number) {
      if (number > 100000) {
        return (
          parseInt(number)
            .toString()
            .slice(0, -4) + "万"
        )
      } else {
        return ~~number
      }
    }
    render() {
      const song = this.props.song
      return (
        <div className="songList" onClick={() => {}}>
          <div className="imgBox">
            <img src={song.coverImgUrl} alt={song.name} />
          </div>
          <div className="wordBox">
            {song.tracks.map((item, index) => (
              <p className="top" key={item.first}>
                {index + 1}.{item.first} - {item.second}
              </p>
            ))}
          </div>
        </div>
      )
    }
  }
)
