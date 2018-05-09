//360动画
//灵敏度调节

class Sound {
	constructor() {
		this.times = null;
		this.keepTimes = null;
	}

	startSound(callback, sensitivity) {
		let constraints = {audio: true, video: false};
		let promise = navigator.mediaDevices.getUserMedia(constraints);
		promise.then((stream) => {
			window.AudioContext = window.AudioContext || window.webkitAudioContext;
			let audioCtx = new AudioContext();
			let analyser = audioCtx.createAnalyser();
			let SourceNode = audioCtx.createMediaStreamSource(stream);
			analyser.fftSize = 256;
			SourceNode.connect(analyser);
			this.listenSound(callback, analyser, sensitivity)
		})
	}

	listenSound(callback, analyser, sensitivity) {
		let array = new Uint8Array(256);
		let array2 = new Uint8Array(256);
		array.fill(1000);
		array2.fill(1000);
		let all;
		this.times = setInterval(() => {
			//如果keepTimes还在执行的话，说明程序正在进行保持操作，不进行大于灵敏度跳的操作
			if (this.keepTimes === null) {
				//一次监听两次的的活动
				//通过两次的差值的平均数来作为声音的声值
				all = 0;
				analyser.getByteFrequencyData(array);
				//console.log(array);
				setTimeout(() => {
					analyser.getByteFrequencyData(array2);
					//console.log(array2);
					for (let i = 0; i < 256; i++) {
						all += (array2[i] - array[i]);
					}
					//如果大于灵敏度就执行跳
					if (all / 256 > sensitivity) {
						console.log(all / 256);

						callback.jump();
						//在第一次大于当前数值（相当于斜率）后，后面只要大于0就可以
						this.keepSound(callback, analyser)
					}
				}, 50);
			}
		}, 100)
	}

	keepSound(callback, analyser) {
		let array = new Uint8Array(256);
		let array2 = new Uint8Array(256);
		array.fill(0);
		array2.fill(0);
		let all;
		this.keepTimes = setInterval(() => {
			all = 0;
			analyser.getByteFrequencyData(array);
			setTimeout(() => {
				analyser.getByteFrequencyData(array2);
				for (let i = 0; i < 256; i++) {
					all += (array2[i] - array[i]);
				}
				//只要大于0就可以跳了，也就是保持这个音量就可以一直调
				if (all / 256 > 0) {
					console.log(all / 256 + 'keep');
					callback.jump();
				} else {
					//如果又一次他不能保持了，那么就停止保持的监听
					console.log("end keep");
					window.clearInterval(this.keepTimes);
					this.keepTimes = null;
				}
			}, 50);
		}, 100)
	}

	stopSound() {
		window.clearInterval(this.times);
		this.times = null;
	}

}