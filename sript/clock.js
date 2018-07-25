
class clock {
	constructor() {
		this.intId = 0;
		this.mil = 0;
		this.scd = 0;
	}

	stopClock() {
		clearInterval(this.intId)
		this.mil = 0
	}
	
	startClock() {
		this.intId = setInterval(this.updateClock, 100, this)
	}

	updateClock(_this)
	{
		var timer = 0;

		_this.mil -= 100;
		if (_this.scd <= 0 && _this.mil <= 0) {
			_this.stopClock();
			manager.timeOut();
		} else if (_this.mil <= 0) {
			_this.mil = 1000;
			_this.scd -= 1;
		}
		timer = "[" + _this.scd + ":" + _this.mil + "]"
		document.getElementById("timer").innerHTML = timer
	}

	setTime(scd, mil) {
		var safeMil = (mil === undefined) ? 0 : mil;

		this.mil = safeMil % 1000;
		this.scd = (scd === undefined) ? 0 : Math.floor(scd + (safeMil / 1000))
	}
}

var tclock = new clock()

