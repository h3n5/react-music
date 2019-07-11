import React from "react"
import MyContext from "../../router/context"
import { getSongUrl } from "@/api/api"
export default class Play extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.getSong(id)
  }
  async getSong(id) {
    let res = await getSongUrl(id)
    let url = res.data[0].url
    console.log(url)
    this.context.music.setAudio(url)
  }
  render() {
    console.log(this.context, this.props.match.params.id)
    const id = this.props.match.params.id
    return <div>music{id}</div>
  }
}
Play.contextType = MyContext
