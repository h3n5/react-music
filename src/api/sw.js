self.addEventListener("fetch", function(event) {
  console.log(event)
  return event
  // if (/\.png$/.test(event.request.url)) {
  //   event.respondWith(fetch("/images/支付宝收款码.png"))
  // }
})
