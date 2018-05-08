class BackGround {
  constructor () {

  }
  draw (drawer) {
    this.drawRoad(drawer)
  }
  drawRoad (drawer) {
    var lingrad = drawer.ctx.createLinearGradient(0,0,0,500)
    lingrad.addColorStop(0, '#00ABEB')
    lingrad.addColorStop(0.6, '#fff')
    lingrad.addColorStop(0.6, '#26C000')
    lingrad.addColorStop(1, '#fff')
    
    drawer.ctx.fillStyle=lingrad
    drawer.ctx.fillRect(0,0,500,500)
    drawer.ctx.beginPath()
    drawer.ctx.moveTo(0, 300)
    drawer.ctx.lineTo(drawer.width, 300)
    drawer.ctx.closePath()
    drawer.ctx.stroke()
  
  }
}