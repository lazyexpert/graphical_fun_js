'use strict'

const Paint = require('./paint'),
      Slider = require('./slider'),
      ctx = require('axel')

let paint = new Paint(ctx)
let slider = new Slider()

slider.add(() => {
  paint.drawStrings([
    "Alternative CV:",
    "HATSKALEV OLEKSANDR",
  ])
})

slider.add(() => {
  paint.drawStrings([
    "Next Block:",
    "NOW ILL TRY TO IMPLEMENT IT",
  ])
})

slider.add(() => {
  paint.drawStrings([
    "KIRILL:",
    "PREVED OT MEDVEDA :DDDD",
    "KIRILL:",
    "PREVED OT MEDVEDA :DDDD",
    "KIRILL:",
    "PREVED OT MEDVEDA :DDDD",
    "KIRILL:",
    "PREVED OT MEDVEDA :DDDD"
  ])
})

slider.run()
