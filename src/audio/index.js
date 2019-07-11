import Events from "./event"
export default class Player {
  audio = null
  options = {}
  events = new Events()
  songList = []
  currentIndex = 0
  durationTime = ""
  currentTime = ""
  currentTimeFlag = true
  constructor(options = { preload: true, mode: 1 }) {
    this.options = options
    this.init()
    this.initEvent()
  }
  /**
   * mode =  1,歌单循环;2,歌单随机;3,单曲循环
   */
  init() {
    this.audio = document.createElement("audio")
    this.audio.preload = this.options.preload
    this.audio.loop = true
    this.on("timeupdate", e => {
      if (this.currentTimeFlag) {
        this.setcurrentTime(e.target.currentTime)
      }
    })
    this.on("canplay", e => {
      this.setdurationTime(e.target.duration)
    })
    this.on("ended", () => {
      this.next()
    })
  }
  initEvent() {
    for (let i = 0; i < this.events.audioEvents.length; i++) {
      this.audio.addEventListener(this.events.audioEvents[i], e => {
        this.events.trigger(this.events.audioEvents[i], e)
      })
    }
  }
  on(name, callback) {
    this.events.on(name, callback)
  }
  play() {
    this.audio.play()
  }
  pause() {
    this.audio.pause()
  }
  next() {
    const mode = ~~this.options.mode
    if (mode === 1) {
      this.currentIndex === this.songList.length - 1
        ? (this.currentIndex = 0)
        : this.currentIndex++
    }
    if (mode === 2) {
      var randomIndex = () => {
        var r = ~~((this.songList.length - 1) * Math.random())
        if (r === this.currentIndex) {
          r = randomIndex()
        }
        return r
      }
      this.currentIndex = randomIndex()
    }
    this.setAudio(this.songList[this.currentIndex])
  }
  setAudio(value) {
    this.audio.src = value
    if (this.audio.pause) {
      this.play()
    }
  }
  setdurationTime(time) {
    this.durationTime = time
  }
  setcurrentTime(time) {
    if (this.currentTimeFlag) this.currentTime = time
  }
  setsetcurrentTimeFlag(v) {
    this.currentTimeFlag = v
  }
  setloop(value) {
    this.audio.loop = value
  }
}
