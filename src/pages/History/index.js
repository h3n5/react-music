import React from "react"
import { Tabs, WhiteSpace } from "antd-mobile"
import ListItem from "./list"
import { userRecord } from "@/api/api"
export default class History extends React.Component {
  constructor() {
    super()
    this.state = {
      weekDate: [],
      allData: []
    }
  }
  componentDidMount() {
    const uid = this.props.match.params.uid
    let data = [{ type: 0, uid }, { type: 1, uid }].map(v => userRecord(v))
    Promise.all(data).then(res => {
      this.setState({
        allData: res[0].allData,
        weekDate: res[1].weekData
      })
    })
  }

  render() {
    const tabs = [{ title: "最近7天", sub: "1" }, { title: "全部", sub: "0" }]
    const color = {
      borderColor: "#d43c33"
    }
    return (
      <Tabs
        tabs={tabs}
        initialPage={1}
        tabBarUnderlineStyle={color}
        tabBarActiveTextColor="#d43c33"
      >
        <div style={{ background: "#fff" }}>
          <WhiteSpace />
          {this.state.weekDate.map(v => (
            <ListItem key={v.song.id} item={v.song} />
          ))}
        </div>
        <div style={{ background: "#fff" }}>
          <WhiteSpace />
          {this.state.allData.map(v => (
            <ListItem key={v.song.id} item={v.song} />
          ))}
        </div>
      </Tabs>
    )
  }
}
