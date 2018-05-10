class Character {
  constructor (option) {
    ;({
      x: this.x,
      y: this.y,
      height: this.height,
      width: this.width,
      jumpDuration: this.jumpDuration,
      jumpHeight: this.jumpHeight,
    } = option)

    this.harmable = true
    this.life = 5

    
    this.constol = new Control();
    this.constol.render();

    this.StepImg1 = new Image()
    this.StepImg1.src = 'img/person1.png'
    this.StepImg2 = new Image()
    this.StepImg2.src = 'img/person2.png'
    this.JumpImg = new Image()
    this.JumpImg.src = 'img/person3.png'
    this.transPic = false
    
    this.step = 0
    this.pic = [this.StepImg1, this.StepImg2]
    setInterval(() => {
      this.step = this.step ? 0 : 1
    }, 1000 / 60 * 20)
  }
  draw (drawer) {
    if (!this.transPic) {
      if (this.y < 300) {
        drawer.ctx.drawImage(this.JumpImg, this.x, this.y, this.width, this.height)
      } else {
        drawer.ctx.drawImage(this.pic[this.step], this.x, this.y, this.width, this.height)
      }
    }
  }
  jump () {
    // this.jumpHeight = voice
    let loopTime = this.jumpDuration / (1000 / 60)
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
  harm () {
    if (this.harmable) {
      this.constol.reduceHeart(1)
      let invincibleFrame = 100
      for(let i = 0; i < invincibleFrame; i = i + invincibleFrame / 6) {
        setTimeout(() => {
          this.transPic = !this.transPic
        }, 1000/60 * i)
      }
      setTimeout(() => {
        this.transPic = false
      }, 1000 / 60 * invincibleFrame)
      this.harmable = false
      this.life--
      setTimeout(() => {
        this.harmable = true
      }, 1000/60 * invincibleFrame)
    }
  }
  init () {
    this.life = 5
    this.constol.addHeart(5)
  }
}