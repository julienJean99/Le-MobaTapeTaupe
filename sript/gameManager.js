class gameManager
{
	constructor() {
		this.lv = 0;
		this.nbBall = 0;
	}

	fibonacti(nb)
	{
		var current = 0;
		var prev = 1;
		var prev2 = 1;

		nb -= 2;
		if (nb < 1) {
			return (1);
		}
		while (nb != 0) {
			--nb;
			current = prev + prev2;
			prev2 = prev;
			prev = current;
		}
		return (current)
	}

	lvUp() {
		var time = ((this.lv + 2) > 11) ? 11 : (this.lv + 2);

		this.lv += 1;
		this.nbBall = this.fibonacti(this.lv);
		tclock.setTime(time);
		tclock.startClock();
		balls.updateBalls();
		balls.drawBalls();
		document.getElementById("button").disabled = true;
		document.getElementById("Lv").innerHTML = "Lv: " + this.lv;
		document.getElementById("nbBall").innerHTML = "Nombres de balle: " + this.nbBall;
	}

	reset() {
		this.lv = 0;
		this.nbBall = 0;
		balls.ballReset();
		tclock.stopClock();
		document.getElementById("button").disabled = false;
	}

	timeOut() {
		this.reset()
	}
}

var manager = new gameManager();
