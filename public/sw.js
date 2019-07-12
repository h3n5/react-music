self.addEventListener("fetch", function(event) {
  console.log(event.request.url)
  if (/\.jpg$/.test(event.request.url)) {
    console.log('替换')
    event.respondWith(fetch("./default.png"))
  }
})
