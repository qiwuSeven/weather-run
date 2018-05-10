class Drawer {
  constructor (id) {
    this.el = document.getElementById(id)
    this.ctx = this.el.getContext('2d')
    this.running = false
    this.width = this.el.width
    this.height = this.el.height
    this.character = new Character()
    this.blocks = new Blocks()
    this.backGround = new BackGround()
    this.backGroundSpeed = 3
  }
  draw (x) {
    this.ctx.clearRect(0, 0, 500, 500)
    this.backGround.draw(this)
    this.blocks.move()
    this.character.draw(this)
    this.drawBlocks()
    this.ctx.strokeRect(50, 50, 400, 200)

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
  if (p.x > r.x && p.y > r.y && p.x < r.x + r.w && p.y < r.y + r.h) {
    return true
  } else {
    return false
  }
}