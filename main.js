class Game {
  constructor (id) {
    this.drawer = new Drawer(id)
    this.drawer.start()
  }
  addEventListener (type, callback, ...args) {
    switch (type) {
      case 'finish': {
        this.drawer.onFinish = () => {
          this.drawer.stop()
          callback.bind(this, ...args)
        }
      } break
      case 'crush': {
        this.drawer.onCrush = () => {
          callback.bind(this, ...args)
        }
      }
    }
  }
  start () {
    console.log(2)
  }
  stop () {
    this.drawer.stop()
  }
  pause () {

  }
  replay () {
    
  }
  jump () {
    this.drawer.character.jump()
  }
}