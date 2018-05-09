class Character {
  constructor () {
    this.x = 240
    this.y = 350 - 20
    this.height = 20
    this.width = 20
    this.jumpTime = 500
    this.jumpHeight = 500
  }
  jump () {
    // this.jumpHeight = voice
    let loopTime = this.jumpTime / (1000 / 60)
    let loopHeight = this.jumpHeight / loopTime / 2
    console.log('jump')
    for(let i = 0; i < loopTime; i++) {
      setTimeout(() => {
        if (i < loopTime / 2) {
          this.y -= loopHeight
        } else {
          this.y += loopHeight
        }
      }, 1000/60 * i)
    }
  }
  nextTick () {

  }
}