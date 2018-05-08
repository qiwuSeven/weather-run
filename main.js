class Game {
  constructor (id) {
    this.drawer = new Drawer(id)
    this.drawer.start()
  }
  addEventListener (type, callback) {
    switch (type) {
      case 'finish': {
        this.drawer.onFinish = () => {
          this.drawer.stop()
          callback()
        }
      } break
    }
  }
  jump () {
    this.drawer.character.jump()
  }
}