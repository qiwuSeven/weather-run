class Slide {
	constructor(){
		this.data = 0;
	}

	setData(data){
		this.data = data;
		this.setPercentage()
	}

	render(cb){
		this.clickDot(cb);
	}

	clickDot(callback) {
		document.querySelector(".sensitivity .dot").addEventListener("mousedown", (e) => {
			document.onmousemove = (e) => {
				this.setCoordinate(e.clientX);
				callback()
			};
			document.onmouseup = () => {
				document.onmousemove = null;
			}
		});
	}

	//得到当前的百分数
	getPercentage() {
		// let lineWidth = document.getElementById("sensitivity").offsetWidth;
		// let progressWidth = document.querySelector(".progress").offsetWidth;
		// return progressWidth / lineWidth
		return this.data;
	}

	//设置百分数来改变进度
	setPercentage() {
		if (this.data < 0) {
			this.data = 0;
		}
		if (this.data > 100) {
			this.data = 100;
		}
		let sensitivityWidth = document.getElementById("sensitivity").offsetWidth;
		this.setDot(this.data * sensitivityWidth * 0.01 - 3 + 'px');
		this.setProgress(this.data * sensitivityWidth * 0.01 + "px");
	}

	//通过坐标来设置进度
	setCoordinate(moveTo) {
		let sensitivity = document.getElementById("sensitivity");
		if (moveTo < sensitivity.offsetLeft) {
			moveTo = sensitivity.offsetLeft;
		}
		if (moveTo > sensitivity.offsetLeft + sensitivity.offsetWidth) {
			moveTo = sensitivity.offsetLeft + sensitivity.offsetWidth;
		}
		this.setDot(moveTo - sensitivity.offsetLeft - 3 + "px");
		this.setProgress(moveTo - sensitivity.offsetLeft + 'px');
		//设置data
		this.data = (moveTo - sensitivity.offsetLeft)/document.querySelector(".sensitivity").offsetWidth*100
	}

	//设置点的位置
	static setDot(position) {
		document.querySelector(".dot").style.left = position;
	}

	//设置进度的位置
	static setProgress(position) {
		document.getElementById("progress").style.width = position;
	}
}