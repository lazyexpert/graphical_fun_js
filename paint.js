'use strict'

class Paint {
  constructor(ctx) {
    this.ctx = ctx
    this.width = ctx.cols
    this.height = ctx.rows
    this.center = this.height/2 | 0

    this.initListeners()
  }

  initListeners() {
    process.on('exit', e => {
      this.cleanup()
    })
  }

  drawString(text, y) {
    this.ctx.bg(255,0,0)
    this.ctx.fg(255,255,255)

    this.ctx.text((this.width-text.length)/2 | 0, y, text)

    this.ctx.bg(0,0,0)
    this.ctx.fg(255,255,255)
  }

  drawStrings(strings) {
    this.ctx.clear()
    let starty = (this.height - strings.length) / 2 |0
    strings.forEach(el => this.drawString(el, starty++))
  }

  cleanup() {
    this.ctx.bg(0,0,0)
    this.ctx.fg(255,255,255)
    this.ctx.clear()
  }
}


module.exports = Paint
