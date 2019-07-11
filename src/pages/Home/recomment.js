import React from "react"
import { WhiteSpace, Flex, WingBlank } from "antd-mobile"
import { getpersonalized } from "@/api/api"
import { withRouter } from "react-router-dom"
import "./recomment.scss"
const PicBlock = withRouter(
  class PicBlock extends React.Component {
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
      const { url, name, id } = this.props
      return (
        <div
          className="PicBlock"
          onClick={() => this.props.history.push("/songlist/" + id)}
        >
          <div className="imgBox">
            <img src={url} alt={name} />
            {/* <span>{this.countNumber(count)}</span> */}
          </div>
          <p className="info">{name}</p>
        </div>
      )
    }
  }
)
export default (class Recomment extends React.Component {
  constructor() {
    super()
    this.state = {
      songs: []
    }
  }
  async componentDidMount() {
    let res = await getpersonalized()

    let songs = this.sortRandom(res.result).slice(0, 6)

    this.setState({ songs: songs })
  }
  sortRandom(a) {
    let len = a.length
    for (let i = len - 1; i >= 0; i--) {
      var pos = ~~(Math.random() * i)
      ;[a[i], a[pos]] = [a[pos], a[i]]
    }
    return a
  }
  render() {
    return (
      <WingBlank className="Recomment">
        <WhiteSpace />
        <p>推荐歌单</p>
        <WhiteSpace />
        <Flex wrap="wrap">
          {this.state.songs.map(v => (
            <PicBlock
              key={v.id}
              // count={v.playCount}
              id={v.id}
              url={v.picUrl}
              name={v.name}
            />
          ))}
        </Flex>
      </WingBlank>
    )
  }
})
