import React from "react"

const Recomment = lazy(() => import("./recomment"))
const Tabs = lazy(() => import("./tabs"))
const Func = lazy(() => import("./func"))

export default class Home extends React.Component {
  render() {
    return (
      <div className="layout">
        <Tabs />
        <Func />
        <Recomment />
      </div>
    )
  }
}
function lazy(fn) {
  return class Lazy extends React.Component {
    constructor() {
      super()
      this.state = {
        Com: null
      }
      this.load()
    }
    load() {
      fn().then(res => {
        this.setState({ Com: res.default })
      })
    }
    render() {
      const Com = this.state.Com
      return Com ? <Com /> : null
    }
  }
}
