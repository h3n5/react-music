import React from "react"
import { Carousel, WingBlank } from "antd-mobile"
import { getBanner } from "@/api/api"
export default class MyTabs extends React.Component {
  constructor() {
    super()
    this.state = {
      tab: "a",
      banners: []
    }
  }
  componentWillMount() {
    getBanner().then(res => {
      this.setState({ banners: res.banners })
    })
  }
  render() {
    return (
      <WingBlank>
        <Carousel autoplay={true} infinite>
          {this.state.banners.map(val => (
            <div
              key={val.targetId}
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight
              }}
            >
              <img
                src={val.imageUrl}
                alt={val.typeTitle}
                style={{
                  width: "100%",
                  verticalAlign: "top",
                  borderRadius: "8px"
                }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"))
                  this.setState({ imgHeight: "auto" })
                }}
              />
            </div>
          ))}
        </Carousel>
      </WingBlank>
    )
  }
}
