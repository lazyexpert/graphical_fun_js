'use strict'

const keypress = require('keypress')

keypress(process.stdin)

class Slider {
  constructor() {
    this.stages = []
    this.current_stage = 0

    this.initListeners()
  }

  initListeners() {
    // listen for the "keypress" event
    process.stdin.on('keypress', function (ch, key) {
      if(key.name == 'left') this.showPrev()
      else if(key.name == 'right') this.showNext()

      // Catch default cancel process hotkey
      if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause()
      }
    }.bind(this))

    process.stdin.setRawMode(true)
    process.stdin.resume()
  }

  add(stage) {
    this.stages.push(stage)
  }

  run() {
    this.stages[this.current_stage].call(this)
  }

  showNext() {
    if( this.stages.length -1 == this.current_stage )
      this.current_stage = 0
    else this.current_stage++

    this.run()
  }

  showPrev() {
    if( this.current_stage == 0 )
      this.current_stage = this.stages.length -1
    else this.current_stage--

    this.run()
  }

}


module.exports = Slider
