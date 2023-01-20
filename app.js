let t = require("fs").readFileSync("./frames.txt", {encoding: "utf8"})
let e = t.split(/^\n$/gm)
let D = Date.now()
let x = 0

const c = (t) => {
  sound.play("./bad_apple.mp3")
  let a = t.split(/\d$/gm)
  let p = ++x * (1/30) * 1000
  let D2 = Date.now() - D
  console.log(a[2]),
  (s = Date.now()),
  setTimeout(() => {
    console.clear()
    e.length > 0 ? c(e.shift()) : console.log("End of the line")
  }, p - D2)
}
c(e.shift())
