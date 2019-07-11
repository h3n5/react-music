import React from "react"
import "./index.scss"
import { WhiteSpace } from "antd-mobile"
import { searchMusic } from "@/api/api"
import Hot from "./hotsearch"
import lodash from "@/utils"
import SearchList from "./serachlist"
export default class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "and i am home",
      list: []
    }
  }
  changeText = text => {
    this.setState(
      {
        text
      },
      () => {
        this.searchClick()
      }
    )
  }
  componentDidMount() {
    this.searchClick()
  }
  searchClick = lodash.throttle(() => {
    searchMusic({ keywords: this.state.text }).then(res => {
      this.setState({ list: res.result.songs })
    })
  })
  render() {
    return (
      <div className="Search">
        <div className="searchinput">
          <svg className="icon left" aria-hidden="true">
            <use xlinkHref="#icon-search" />
          </svg>
          <input
            type="text"
            placeholder="请输入"
            value={this.state.text}
            onChange={e => this.changeText(e.target.value)}
          />
          <svg
            className="icon close"
            aria-hidden="true"
            onClick={e => this.setState({ text: "" })}
          >
            <use xlinkHref="#icon-guanbi" />
          </svg>
        </div>
        <Hot tap={this.changeText} />
        <WhiteSpace />
        <SearchList list={this.state.list} />
      </div>
    )
  }
}
