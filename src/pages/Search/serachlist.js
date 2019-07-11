import React from "react"
import { ListView, WingBlank } from "antd-mobile"
import "./searchlist.scss"
export default class SearchList extends React.Component {
  constructor(props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.id !== row2.id
    })
    this.state = {
      height: 444,
      isLoading: false,
      dataSource
    }

    this._data = []
  }
  componentDidUpdate(prevProps) {
    if (prevProps.list.length !== this.props.list.length) {
      this._onDataArrived(this.props.list)
    }
  }
  _onDataArrived = newData => {
    this._data = [].concat(newData)
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._data)
    })
  }
  onEndReached = () => {
    this.setState({ isLoading: false })
  }
  render() {
    const row = item => (
      <WingBlank className="my-list">
        <div className="left">
          <p className="top">{item.name}</p>
          <p className="bottom">
            {item.artists.map(v => (
              <span key={v.name}>{v.name} /</span>
            ))}
            -<span className="blue">{item.album.name}</span>
          </p>
        </div>
        <div className="right">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-playcircleoutline" />
          </svg>
        </div>
      </WingBlank>
    )

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={row}
        style={{
          height: this.state.height,
          overflow: "auto"
        }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    )
  }
}
