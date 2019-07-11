import React from "react"
import { WhiteSpace, Flex, Tag } from "antd-mobile"
import { gethotSearch } from "@/api/api"

const tag = {
  margin: "0 0 10px 10px",
  backgroundColor: "#fcfcfd"
}

export default class HotSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  async componentDidMount() {
    let res = await gethotSearch()
    this.setState({ list: res.result.hots })
  }
  render() {
    const list = this.state.list
    return (
      <>
        <WhiteSpace size="lg" />
        <Flex wrap="wrap">
          {list.map(v => (
            <Tag
              key={v.first}
              style={tag}
              onChange={e => {
                this.props.tap(v.first)
              }}
            >
              {v.first}
            </Tag>
          ))}
        </Flex>
      </>
    )
  }
}
