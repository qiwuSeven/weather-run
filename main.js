class Game {
  constructor (id) {
    this.LM = 3
    this.el = document.getElementById(id)
    this.state = 'start'
    this.drawer = new Drawer(this)
    this.sound = new Sound()
    this.sound.startSound(this, this.LM)
    this.drawer.init()
    this.el.addEventListener('click', () => {
      this.setSound()
      if (this.state === 'start') {
        this.drawer.start()
      } else if (this.state === 'stop') {
        this.sound.startSound(this, this.LM)
        this.drawer.reStart()
      }
      this.state = 'running'
    })
  }
  addEventListener (type, callback, ...args) {
    switch (type) {
      case 'finish': {
        this.drawer.onFinish = () => {
          this.state = 'stop'
          callback(...args)
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
  }
  stop () {
  }
  pause () {

  }
  replay () {

  }
  jump () {
    this.drawer.character.jump()
  }
  setSound () {
    this.LM = this.drawer.character.getLM()
  }
}