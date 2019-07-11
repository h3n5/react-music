import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import Header from "components/header"
import Home from "pages/Home"
import Search from "pages/Search"
import Ranking from "pages/Ranking"
import My from "pages/My"
import Songlist from "pages/Song/songlist"
import Song from "pages/Play"
export default function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/my" component={My} />
        <Route path="/songlist/:id?" component={Songlist} />
        <Route path="/song/:id?" component={Song} />
      </Switch>
    </HashRouter>
  )
}
