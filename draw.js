class Drawer {
  constructor (id) {
    this.el = document.querySelector(id)
    this.chractor = {
      x: 240,
      y: 240,
      height: 20,
      width: 20,
      jump (voice) {
        for(let i = 0; i < 40; i++) {
          setTimeout(() => {
            if (i < 20) {
              this.y -= 5
            } else {
              this.y += 5
            }
          }, 1000/60 * i)
        }
      }
    }
    this.blocks = [{
      width: 20,
      height: 20,
      x: 500,
      y: 240,
      move (direction) {
        switch (direction) {
          case 'left': {
            if (this.x < 0) {
              this.x = 500
            }
            this.x -= 5
          } break
        }
      }
    }]
    this.speed = 1
  }
}