class Blocks {
    constructor(ctx) {
        this.mudImg = new Image()
        this.heartImg = new Image()
        this.mudImg.src = 'img/mud.png'
        this.heartImg.src = 'img/mud.png'
        this.muds = []
        this.heart = []
        this.ctx = ctx
        this.speed = 3
    }
    setSpeed(val) {
      this.speed = val
    }
    draw(drawer) {
        this.muds.forEach(item => {
          item.render(drawer.ctx)
          if (item.type == 0) {
            item.move(drawer.backGroundSpeed, 0)
          } else {
            item.move(drawer.backGroundSpeed + 1, 0)
          }
        })
    }
    init() {
        this.muds.push(new Block(0, 700  + getRandomNum(-20, 20), 380 + getRandomNum(-10, 10)))
        this.muds.push(new Block(1, 600  + getRandomNum(-20, 20), 200 + getRandomNum(-10, 10)))
    }
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Block {
    constructor(type, x, y) {
        this.type = type;
        this.x = x
        this.y = y
        this.width = Blocks.type[this.type].width
        this.height = Blocks.type[this.type].height
        this.speedx = Blocks.type[this.type].speedx
        this.speedy = Blocks.type[this.type].speedy
    }
    move(stepx, stepy) {
        if (this.x < 0 - this.width) {
            this.x = 500 + parseInt(Math.random() * 100)
        }
        this.x -= stepx || this.speedx;
        this.y -= stepy || this.speedy;
    }
    render(ctx) {
        var img = new Image();
        img.src = Blocks.type[this.type].src
        ctx.drawImage(img, this.x, this.y, this.width, this.height)
    }
}
Blocks.type = [{
    width: 100,
    height: 40,
    src: 'img/mud.png',
    speedx: 3,
    speedy: 0
}, {
  width: 50,
  height: 82,
  src: 'img/light1.png',
  speedx: 4,
  speedy: 0
}]