const fs = require('fs')
let data = fs.readFileSync('vgibso10_hard.txt')
let intensities = JSON.parse(data)

let height = 1024
let width = 1024

//add values to stack
let stackIntensities = []
for (let i = 0; i < height * width; i = i + width) {
  let row = []
  for (let j = i; j < i + width; j++) {
    row.push(intensities[j])
  }
  stackIntensities.push(row)
}
//format output
console.log("RGB")
console.log(height)
console.log(width)

let currentRow = "BlueGreen"

stackIntensities.forEach(row => {
  if (currentRow == "BlueGreen") {
    let currentColor = "Blue"
    row.forEach(intensity => {
      if (currentColor == "Blue") {
        console.log(`0 0 ${intensity}`)
        currentColor = "Green"
      } else {
        console.log(`0 ${intensity} 0`)
        currentColor = "Blue"
      }
    })
    currentRow = "GreenRed"
  } else {
    let currentColor = "Green"
    row.forEach(intensity => {
      if (currentColor == "Green") {
        console.log(`0 ${intensity} 0`)
        currentColor = "Red"
      } else {
        console.log(`${intensity} 0 0`)
        currentColor = "Green"
      }
      currentRow = "BlueGreen"
    })
  }
})

//add answer to vgibso10_medium into outM.txt
//node index.js > outM.txt
//clear
//cat outM.txt