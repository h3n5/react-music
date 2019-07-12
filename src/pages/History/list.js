import React from "react"
import "./list.scss"
import { WingBlank, WhiteSpace } from "antd-mobile"
export default class ListItem extends React.Component {
  render() {
    const item = this.props.item
    return (
      <WingBlank className="his_list">
        <div className="list_name">{item.name}</div>
        <div className="list_al">{item.al.name}</div>
        <WhiteSpace />
        <div className="icon_abs">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-playarrow-copy" />
          </svg>
        </div>
      </WingBlank>
    )
  }
}
