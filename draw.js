class Drawer {
  constructor (id) {
    this.el = document.getElementById(id)
    this.ctx = this.el.getContext('2d')
    this.character = {
      x: 240,
      y: 240,
      height: 20,
      width: 20,
      jump (voice) {
        console.log('jump')
        for(let i = 0; i < 40; i++) {
          setTimeout(() => {
            if (i < 20) {
              this.y -= 5
            } else {
              this.y += 5
            }
          }, 1000/60 * i)
        }
      }
    }
    this.blocks = {
      _blocks: [{
        width: 20,
        height: 20,
        x: 500,
        y: 240,
      }],
      move (direction) {
        switch (direction) {
          case 'left': {
            this._blocks.map((item, index) => {
              if (item.x < 0) {
                item.x = 500
              }
              item.x -= 5
            })
          } break
        }
      }
    }
    this.speed = 1
    this.running = false
  }
  draw (x) {
    this.ctx.clearRect(0, 0, 500, 500)
    this.blocks.move('left')
    this.ctx.fillStyle = 'green'
    this.blocks._blocks.map((item) => {
      this.ctx.fillRect(item.x, item.y, item.width, item.height)
    })
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