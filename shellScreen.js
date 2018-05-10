class ShellScreen {
  constructor () {
    this.state = 'start'
  }
  draw (drawer) {
    drawer.ctx.strokeRect(50, 50, 400, 200)
  }
}