import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Router from "./router"
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function() {
//     // 所以Service Worker只是一个挂在navigator对象上的HTML5 API而已
//     navigator.serviceWorker.register("./sw.js").then(
//       function(registration) {
//         console.log("我注册成功了666")
//       },
//       function(err) {
//         console.log(err, "我注册失败了")
//       }
//     )
//   })
// }

ReactDOM.render(<Router />, document.getElementById("root"))
