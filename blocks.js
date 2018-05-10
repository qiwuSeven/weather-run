class Blocks {
  constructor () {
    this._blocks = []
    // for (let i = 0; i < 4; i = i + 1) {
    //   this._blocks.push({
    //     width: 50,
    //     height: 20 + i,
    //     x: 500 + i * 150,
    //     y: 300 - 20 - i,
    //   })
    // }
  }
  move () {
    this._blocks.map((item, index) => {
      if (item.x < 0) {
        item.x = 500
      }
      item.x -= 5
    })
  }
}