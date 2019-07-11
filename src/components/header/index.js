import React from "react"
import { withRouter } from "react-router-dom"
import "./index.scss"

export default withRouter(
  class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <div
            className="header__left"
            onClick={() => this.props.history.push("/")}
          >
            {this.props.location.pathname === "/" ? (
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-musicnote" />
              </svg>
            ) : (
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-navigatebefore" />
              </svg>
            )}
          </div>
          <div className="header__center">music</div>
          <div className="header__rigth" />
        </div>
      )
    }
  }
)
