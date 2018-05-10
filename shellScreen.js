class ShellScreen {
  constructor () {
    this.state = 'start'
  }
  draw (drawer) {
    if (this.state === 'start') {
      this.drawStartScreen(drawer)
    }
  }
  drawStartScreen (drawer) {
    drawer.ctx.font = "48px serif"
    drawer.ctx.fillText('点击画面开始游戏', 35, 150)
  }
  drawFinishScreen (drawer) {
    drawer.ctx.font = "48px serif"
    drawer.ctx.fillText('GAME OVER', 125, 150)
  }
}