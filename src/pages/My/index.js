import React from "react"
import "./index.scss"
import { List, WhiteSpace, Button, Modal, Toast, Accordion } from "antd-mobile"
import { userPlaylist, logout } from "@/api/api"
import Cell from "./cell"

export default class My extends React.Component {
  constructor() {
    super()
    let user = this.getUser()
    this.state = {
      user,
      showMy: false,
      showCollect: false,
      playlist: [],
      collectlist: []
    }
  }
  componentDidMount() {
    const uid = this.state.user.userId
    userPlaylist({
      uid: uid
    }).then(playlist => {
      this.setState({
        collectlist: playlist.playlist.filter(v => v.creator.userId !== uid),
        playlist: playlist.playlist.filter(v => v.creator.userId === uid)
      })
    })
  }
  getUser() {
    let user = localStorage.getItem("user_profile")
    return user ? JSON.parse(user) : false
  }
  logout() {
    const prompt = Modal.alert
    prompt("登出", "确认登出？", [
      { text: "取消", onPress: () => {} },
      {
        text: "确定",
        onPress: () =>
          logout().then(res => {
            Toast.success("登出成功")
            localStorage.removeItem("user_profile")
          })
      }
    ])
  }
  render() {
    let { user } = this.state
    const Title = ({ title }) => (
      <p className="my-list-item">
        <span className="icon-text">{title}</span>
      </p>
    )
    return (
      <div className="My">
        <div
          className="my_info"
          style={{
            background: `url(${user.backgroundUrl}) 100%/ cover no-repeat`
          }}
        >
          <img className="my_avatar" src={user.avatarUrl} alt={user.nickname} />
          <div className="my_name">
            <p>{user.nickname}</p>
          </div>
          <div className="my_func">
            <div className="button">签到</div>
          </div>
        </div>
        <div>
          <WhiteSpace size="lg" />
          <List
            renderHeader={() => (
              <p className="my-list-item">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-playcircleoutline" />
                </svg>
                <span className="icon-text">最近播放</span>
              </p>
            )}
            className="my-list"
            onClick={() => {
              this.props.history.push("/history/" + user.userId)
            }}
          >
            <List.Item arrow="horizontal" />
          </List>
          <WhiteSpace size="" />
          <Accordion defaultActiveKey="0" className="my-accordion">
            <Accordion.Panel
              header={
                <Title title={`我创建的歌单(${this.state.playlist.length})`} />
              }
            >
              <List className="my-list">
                {this.state.playlist.map(v => (
                  <List.Item key={v.id}>
                    <Cell item={v} />
                  </List.Item>
                ))}
              </List>
            </Accordion.Panel>
          </Accordion>
          <WhiteSpace size="" />
          <Accordion defaultActiveKey="0" className="my-accordion">
            <Accordion.Panel
              header={
                <Title
                  title={`我收藏的歌单(${this.state.collectlist.length})`}
                />
              }
            >
              <List className="my-list">
                {this.state.collectlist.map(v => (
                  <List.Item key={v.id}>
                    <Cell item={v} />
                  </List.Item>
                ))}
              </List>
            </Accordion.Panel>
          </Accordion>
        </div>
        <WhiteSpace size="lg" />
        <Button className="logout" onClick={() => this.logout()}>
          登出
        </Button>
      </div>
    )
  }
}
