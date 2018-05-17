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
		Slide.setDot(moveTo - sensitivity.offsetLeft - 3 + "px");
		Slide.setProgress(moveTo - sensitivity.offsetLeft + 'px');
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
//通过自定义事件来降低控件之间的依赖，只需要同时监听这个事件就好
//需要自定义一个进度变化的事件，然后其他的组件（小圆点，条形进度，数值显示）来监听这个事件，同时做出相应的反应
//
//在初始的实现中：如果输入框数值变了就通过setData函数来改变变量的值，同时调用setPercentage方法来渲染view。如果滑动条变了也是修改data的值然后在调用对应的方法来修改view，同时调用回调函数来修改输入框中的数值。
//
//
//
//58：34




// class Slide {
// 	constructor(){
// 		this.data = 0;
// 	}

// 	setData(data){
// 		this.data = data;
// 		this.setPercentage()
// 	}

// 	render(cb){
// 		this.clickDot(cb);
// 	}

// 	clickDot(callback) {
// 		let sensitivity = document.getElementById("sensitivity");
// 		document.querySelector(".sensitivity .dot").addEventListener("mousedown", (e) => {
// 			document.onmousemove = (e) => {
// 				//设置data
// 				this.setData((e.clientX - sensitivity.offsetLeft)/sensitivity.offsetWidth*100);
// 				callback()
// 			};
// 			document.onmouseup = () => {
// 				document.onmousemove = null;
// 			}
// 		});
// 	}

// 	//得到当前的百分数
// 	getPercentage() {
// 		return this.data;
// 	}

// 	//设置百分数来改变进度
// 	setPercentage() {
// 		if (this.data < 0) {
// 			this.data = 0;
// 		}
// 		if (this.data > 100) {
// 			this.data = 100;
// 		}
// 		let sensitivityWidth = document.getElementById("sensitivity").offsetWidth;
// 		this.setDot(this.data * sensitivityWidth * 0.01 - 3 + 'px');
// 		this.setProgress(this.data * sensitivityWidth * 0.01 + "px");
// 	}

// 	//设置点的位置
// 	static setDot(position) {
// 		document.querySelector(".dot").style.left = position;
// 	}

// 	//设置进度的位置
// 	static setProgress(position) {
// 		document.getElementById("progress").style.width = position;
// 	}
// }
