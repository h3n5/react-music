import React from "react"
export default {
  debounce: (callback, delay = 1000) => {
    let time
    return function() {
      clearTimeout(time)
      time = setTimeout(() => {
        callback.apply(this, arguments)
      }, delay)
    }
  },
  throttle: (callback, delay = 1000, immediate = false) => {
    let time
    return function() {
      if (!time) {
        immediate && callback.apply(this, arguments)
        time = setTimeout(() => {
          time = null
          callback.apply(this, arguments)
        }, delay)
      }
    }
  },
  lazy(fn) {
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
}
