import React from "react"
import "./index.scss"
export default class My extends React.Component {
  constructor() {
    super()
    let user = this.getUser()
    this.state = {
      user
    }
  }
  getUser() {
    let user = localStorage.getItem("user_profile")
    return user ? JSON.parse(user) : false
  }
  render() {
    let user = this.state.user
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
      </div>
    )
  }
}
