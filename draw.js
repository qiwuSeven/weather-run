class Drawer {
  constructor (id) {
    this.el = document.getElementById(id)
    this.el.addEventListener('click', () => {
      if (this.shellScreen.state === 'start') {
        this.shellScreen.state = 'running'
        this.blocks.init()
      } else if (this.shellScreen.state === 'stop') {
        this.character.life = 5
        this.blocks.init()
        this.draw()
        this.shellScreen.state = 'running'
        this.start()
      }
    })
    this.ctx = this.el.getContext('2d')
    this.running = false
    this.width = this.el.width
    this.height = this.el.height
    this.character = new Character({
      x: 140,
      y: 330,
      height: 75,
      width: 60,
      jumpDuration: 700,
      jumpHeight: 300
    })
    this.blocks = new Blocks()
    this.backGround = new BackGround()
    this.shellScreen = new ShellScreen()
    
    this.backGroundSpeed = 3
  }
  draw (x) {
    console.log(this.backGroundSpeed)
    this.ctx.clearRect(0, 0, 500, 500)
    this.backGround.draw(this)
    this.blocks.draw(this)
    this.character.draw(this)
    this.shellScreen.draw(this)

    if (this.isCrash()) {
      this.character.harm()
      this.onCrush()
    }
    if (this.character.life === 0) {
      this.stop()
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
    this.draw.bind(this)
    this.shellScreen.state = 'stop'
    this.shellScreen.drawFinishScreen(this)
    this.running = false
  }
  isCrash () {
    let r = false
    this.blocks.muds.map((item) => {
      if (crash({
        x: item.x + 20,
        y: item.y + 1,
        width: item.width - 40,
        height: item.height - 1,
      }, this.character)) {
        r = true
      }
    })
    return r
  }
  onFinish () {}
  onCrush () {}
  startBlocks () {
    this.blocks.muds.push({
          width: 50,
          height: 20,
          x: 500,
          y: 300 - 20,
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