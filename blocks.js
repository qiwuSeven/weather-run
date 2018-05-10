class Blocks {
  constructor () {
    this.img = new Image()
    this.img.src = 'img/mud.png'
    this.muds = []
    for (let i = 0; i < 2; i = i + 1) {
      this.muds.push({
        width: 100,
        height: 40,
        x: 500 + i * 500,
        y: 390,
      })
    }
  }
  move () {
    this.muds.map((item, index) => {
      if (item.x < 0 - item.width) {
        item.x = 500 + parseInt(Math.random() * 100)
      }
      item.x -= 3
    })
  }
  draw (drawer) {
    this.move()
    drawer.ctx.fillStyle = 'green'
    this.muds.map((item) => {
      drawer.ctx.drawImage(this.img, item.x, item.y, item.width, item.height)
    })
  }
}