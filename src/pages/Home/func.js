import React from "react"
import { WhiteSpace, Flex, Modal, Toast } from "antd-mobile"
import { withRouter } from "react-router-dom"
import "./func.scss"
import { loginEmail } from "@/api/api"
class Func extends React.Component {
  jump() {
    if (this.getUser()) {
      this.props.history.push("/my")
    } else {
      const prompt = Modal.prompt
      prompt(
        "登录",
        "输入账号密码登录",
        (login, password) => {
          const form = {
            email: "3384928538@qq.com",
            password: "chenbinmind"
          }
          if (!login && !password) this.login(form)
        },
        "login-password",
        "",
        ["用户", "密码"]
      )
    }
  }
  login(data) {
    loginEmail(data).then(res => {
      if (res.code === 200) {
        this.setUser(res.profile)
        this.props.history.push("/my")
        Toast.success("登录成功")
      } else {
        Toast.fail(res.msg || "登录失败")
      }
    })
  }
  setUser(data) {
    localStorage.setItem("user_profile", JSON.stringify(data))
  }
  getUser() {
    let user = localStorage.getItem("user_profile")
    return user ? JSON.parse(user) : false
  }
  render() {
    return (
      <div className="func">
        <WhiteSpace size="lg" />
        <Flex justify={"center"} align={"center"}>
          <Flex.Item
            className="center"
            onClick={() => this.props.history.push("/search")}
          >
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-search" />
            </svg>
            <p>搜索</p>
          </Flex.Item>
          <Flex.Item
            className="center"
            onClick={() => this.props.history.push("/songlist")}
          >
            <p>每日推荐</p>
          </Flex.Item>
          <Flex.Item
            className="center"
            onClick={() => this.props.history.push("/ranking")}
          >
            <p>排行榜</p>
          </Flex.Item>
          <Flex.Item className="center" onClick={() => this.jump()}>
            <p>我的</p>
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}
export default withRouter(Func)
