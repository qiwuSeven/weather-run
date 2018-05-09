class BackGround {
  constructor () {
    this.backGroundImg = new Image()
    this.backGroundImg.src = 'img/background.jpg'
    this.x1 = 0
    this.x2 = 500
  }
  draw (drawer) {
    this.drawRoad(drawer)
  }
  drawRoad (drawer) {
    this.x1 -= 5
    if (this.x1 < -500) {
      this.x1 = 500 - this.x2
    }
    this.x2 -= 5
    if (this.x2 < -500) {
      this.x2 = 500 - this.x1
    }
    drawer.ctx.drawImage(this.backGroundImg, this.x1, 0, 600, 500)
    drawer.ctx.drawImage(this.backGroundImg, this.x2, 0, 600, 500)
  }
}