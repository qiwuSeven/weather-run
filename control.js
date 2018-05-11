class Control {
	constructor() {
		this.maxHeart = 5;
		this.hearts = this.maxHeart;
		// this.progress = 0;
		this.barleft = 73;
	}

	render() {
		this.reloadHeart()
		this.scroll();
		this.setScroll();
	}

	//血量
	reloadHeart() {
		let html = '';
		for (let i = 0; i < this.hearts; i++) {
			html += `<li class="heart2"></li>`
		}
		for (let i = this.hearts; i < this.maxHeart; i++) {
			html += `<li class="heart1"></li>`
		}
		document.querySelector(".heart").innerHTML = html
	}

	addHeart(num) {
		this.hearts = this.hearts === this.maxHeart ? this.hearts : this.hearts + num;
		this.reloadHeart();
	}

	reduceHeart(num) {
		this.hearts = this.hearts === 0 ? this.hearts : (this.hearts - num);
		console.log(num + "*" + this.hearts);
		this.reloadHeart();
	}

	getHeart() {
		return this.hearts;
	}

	setHeart(num) {
		this.hearts = num || 0;
	}

	//灵敏度
	// sensitivity() {
	// 	let sensitivityWidth = document.querySelector(".sensitivity").offsetWidth;
	// 	this.setDot(sensitivityWidth * 0.5)
	// }
	//
	// clickDot() {
	// 	let x0, x1;
	// 	document.querySelector(".sensitivity .dot").addEventListener("mousedown", (e) => {
	// 		x0 = e.clientX;
	// 		window.addEventListener("mousemove", (e) => {
	// 			x1 = e.clientX;
	// 			this.moveDot(x0, x1);
	// 		});
	// 		window.addEventListener("mouseup", (e) => {
	// 			window.removeEventListener("mousemove", () => {
	// 			})
	// 		});
	// 	});
	// }
	//
	// getDot() {
	// 	let lineWidth = document.getElementById("sensitivity").offsetWidth;
	// 	let progressWidth = document.querySelector(".progress").offsetWidth;
	// 	console.log(progressWidth / lineWidth);
	// 	return [progressWidth, lineWidth]
	// }
	//
	// setDot(data) {
	// 	let lineWidth = document.getElementById("sensitivity").offsetWidth;
	// 	document.getElementById("progress").style.width = data/lineWidth*100 + '%';
	// 	document.querySelector(".dot").style.left = data-3+"px";
	// }
	//
	// moveDot(x0, x1) {
	//
	// }
	scroll(){
		var scroll = document.getElementById('scroll');
		var bar = document.getElementById('bar');
		var mask = document.getElementById('mask');
		let is = this;
		bar.onmousedown = function(event){
			var event = event || window.event;
			var leftVal = event.clientX - this.offsetLeft;
			var that = this;
			// 拖动一定写到 down 里面才可以
			document.onmousemove = (event)=>{
				var event = event || window.event;
				is.barleft = event.clientX - leftVal;
				if(is.barleft < 0)
					is.barleft = 0;
				else if(is.barleft > scroll.offsetWidth - bar.offsetWidth)
					is.barleft = scroll.offsetWidth - bar.offsetWidth;
				mask.style.width = is.barleft +'px' ;
				that.style.left = is.barleft + "px";

				//防止选择内容--当拖动鼠标过快时候，弹起鼠标，bar也会移动，修复bug
				window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
				console.log(parseInt(is.barleft/(scroll.offsetWidth-bar.offsetWidth) * 100) + "%");
			}

		};
		document.onmouseup = function(){
			document.onmousemove = null; //弹起鼠标不做任何操作
		}
	}
	setScroll(){
		let bar = document.getElementById('bar');
		let mask = document.getElementById('mask');
		mask.style.width = this.barleft +'px' ;
		bar.style.left = this.barleft + "px";
	}
	getScroll(){
		let scroll = document.getElementById('scroll');
		let bar = document.getElementById('bar');
		return parseInt(this.barleft/(scroll.offsetWidth-bar.offsetWidth)) * 15;
	}
	//积分


}