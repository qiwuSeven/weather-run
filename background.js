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
    this.x1 -= drawer.backGroundSpeed
    if (this.x1 < -500) {
      this.x1 = 500
    }
    this.x2 -= drawer.backGroundSpeed
    if (this.x2 < -500) {
      this.x2 = 500
    }
    drawer.ctx.drawImage(this.backGroundImg, this.x1, 0, 600, 500)
    drawer.ctx.drawImage(this.backGroundImg, this.x2, 0, 600, 500)
  }
}