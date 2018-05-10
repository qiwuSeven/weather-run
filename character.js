class Character {
  constructor () {

    // 图像绘制时的坐标和大小
    this.renderWidth = 60;
    this.renderHeight = 75;
    // 求一个人的宽和高
    this.pwidth = 171;
    this.pheight = 227;       
    this.currentFrame = 1;

    this.x = 240
    this.y = 350 - 20
    this.height = 75
    this.width = 60
    this.jumpTime = 500
    this.jumpHeight = 500
    this.personImg = new Image()
    this.personImg.src = 'img/person1.png'
    this.personImg1 = new Image()
    this.personImg1.src = 'img/person2.png'
    this.personImg2 = new Image()
    this.personImg2.src = 'img/person3.png'
    this.img = 0
    this.pic = [this.personImg, this.personImg1]
    setInterval(() => {
      this.img = this.img ? 0 : 1
    }, 1000 / 60 * 20)
  }
  draw(drawer){
    this.drawRoad(drawer)
  }
  drawRoad(drawer){
    if ( this.y < 300 ){
      drawer.ctx.drawImage( this.personImg2,0, 0, this.pwidth, this.pheight,this.x, this.y, this.renderWidth, this.renderHeight);
    } else {
      drawer.ctx.drawImage( this.pic[this.img],0, 0, this.pwidth, this.pheight,this.x, this.y, this.renderWidth, this.renderHeight);
    }
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