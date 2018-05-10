class Blocks {
  constructor () {
    this.mudImg = new Image()
    this.heartImg = new Image()
    this.mudImg.src = 'img/mud.png'
    this.heartImg.src = 'img/mud.png'
    this.muds = []
    this.heart = []
  }
  move () {
    this.muds.map((item, index) => {
      if (item.x < 0 - item.width) {
        item.x = 500 + parseInt(Math.random() * 100)
      }
      item.x -= 3
    })
    // this.heart.map(() => {
    //   if (item.x < 0 - item.width) {
    //     item.x = 500 + parseInt(Math.random() * 100)
    //     item.y = 270 + parseInt(Math.random() * 10) - parseInt(Math.random() * 10)
    //   }
    //   item.x -= 3
    // })
  }
  draw (drawer) {

    this.move()
    drawer.ctx.fillStyle = 'pink'
    this.muds.map((item) => {
      drawer.ctx.drawImage(this.mudImg, item.x, item.y, item.width, item.height)
    })
  }
  init () {
    this.muds = []
    for (let i = 0; i < 3; i = i + 1) {
      this.muds.push({
        width: 100,
        height: 40,
        x: 500 + i * 500,
        y: 390,
      })
    }
  }
}