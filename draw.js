class Drawer {
  constructor (id) {
    this.el = document.getElementById(id)
    this.ctx = this.el.getContext('2d')
    this.running = false
    this.width = this.el.width
    this.height = this.el.height
    this.character = {
      x: 240,
      y: 300 - 20,
      height: 20,
      width: 20,
      jumpTime: 500,
      jumpHeight: 200,
      jump () {
        // this.jumpHeight = voice
        let loopTime = this.jumpTime / (1000 / 60)
        let loopHeight = this.jumpHeight / loopTime / 2
        console.log('jump')
        for(let i = 0; i < loopTime; i++) {
          setTimeout(() => {
            if (i < loopTime / 2) {
              this.y -= loopHeight
            } else {
              this.y += loopHeight
            }
          }, 1000/60 * i)
        }
      },
      nextTick () {

      }
    }
    this.blocks = {
      _blocks: [{
        width: 20,
        height: 20,
        x: 500,
        y: 300 - 20,
      },
      {
        width: 20,
        height: 20,
        x: 500 + 150,
        y: 300 - 20,
      }],
      move () {
        this._blocks.map((item, index) => {
          if (item.x < 0) {
            item.x = 500
          }
          item.x -= 5
        })
      }
    }
  }
  draw (x) {
    this.ctx.clearRect(0, 0, 500, 500)
    this.drawBackGround()
    this.blocks.move('left')
    this.drawBlocks(offset++ % 500)

    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.character.x, this.character.y, this.character.width, this.character.height)

    if (this.isCrash()) {
      this.onFinish()
    }
    if (this.running) {
      window.requestAnimationFrame(this.draw.bind(this))
    }
  }
  start () {
    this.running = true
    window.requestAnimationFrame(this.draw.bind(this))
  }
  stop () {
    this.running = false
  }
  isCrash () {
    let r = false
    this.blocks._blocks.map((item) => {
      if (crash(item, this.character)) {
        r = true
      }
    })
    return r
  }
  onFinish () {
  }
  drawBackGround (offset) {
    this.ctx.beginPath()
    this.ctx.moveTo(0, 300)
    this.ctx.lineTo(this.width, 300)
    this.ctx.closePath()
    this.ctx.stroke()
  }
  drawBlocks () {
    this.ctx.fillStyle = 'green'
    this.blocks._blocks.map((item) => {
      this.ctx.fillRect(item.x, item.y, item.width, item.height)
    })
  }
}
function crash (r1, r2) {
  let r = {
    x: r1.x,
    y: r1.y,
    w: r1.width + r2.width,
    h: r1.height + r2.height,
  }
  let p = {
    x: r2.x + r2.width,
    y: r2.y + r2.height
  }
  if (p.x > r.x && p.y > r.y && p.x < r.x + r.w && p.y < r.y + r.y + r.h) {
    return true
  } else {
    return false
  }
}