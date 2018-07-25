
class cBall
{

	constructor() {
		var canvas = document.getElementById("myCanvas")

		this.posX = 0;
		this.posY = 0;
		this.rad = 20;
	}

	draw(ctx, style) {
		this.randomPos();
		ctx.beginPath();
		ctx.arc(this.posX, this.posY, this.rad, 0, 2 * Math.PI)
		ctx.fillStyle = style;
		ctx.fill();
		ctx.closePath()
	}

	randomPos() {
		var canvas = document.getElementById("myCanvas")

		this.posX = (Math.random() * (canvas.width - (2 * this.rad))) + this.rad
		this.posY = (Math.random() * (canvas.height - (2 * this.rad))) + this.rad;
	}
}

class ballManager
{
	constructor() {
		this.ballList = [];
	}

	updateBalls() {
		var diff = 0

		if (this.ballList.length < manager.nbBall) {
			diff = manager.nbBall - this.ballList.length;
		}
		while (diff > 0) {
			--diff;
			this.ballList.unshift(new cBall());
		}
	}

	drawBalls() {
		var canvas = document.getElementById("myCanvas")
		var ctx = canvas.getContext("2d");
		var idx = this.ballList.length

		ctx.clearRect(0, 0, canvas.width, canvas.height)
		while(idx) {
			--idx;
			if (idx == 0)
				this.ballList[idx].draw(ctx, "red");
			else
				this.ballList[idx].draw(ctx, "black");
		}
	}

	ballReset() {
		var canvas = document.getElementById("myCanvas")
		var ctx = canvas.getContext("2d");

		ctx.clearRect(0, 0, canvas.width, canvas.height)
		while (this.ballList.length) {
			this.ballList.pop();
		}
	}
}

var balls = new ballManager()
