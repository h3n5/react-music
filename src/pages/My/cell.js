import React from "react"
import "./cell.scss"
import { Icon } from "antd-mobile"
import { withRouter } from "react-router-dom"
export default withRouter(
  class Cell extends React.Component {
    render() {
      const item = this.props.item
      return (
        <div
          className="pr vux-1px-b"
          onClick={() => this.props.history.push("/songlist/" + item.id)}
        >
          <img src={item.coverImgUrl} alt="pic" className="icon" />
          <div className="mbox">
            <p className="itemName">{item.name}</p>
            <p className="itemNum">
              <Icon
                type="check-circle"
                color="#2387de"
                size="xxs"
                className="itemNum-icon"
              />
              <span className="word">共{item.trackCount}首</span>
            </p>
          </div>
        </div>
      )
    }
  }
)
