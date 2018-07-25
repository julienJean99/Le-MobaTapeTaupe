

function myClick(evt) {
	var canvas = document.getElementById("myCanvas");
	var rec = canvas.getBoundingClientRect();
	var scale = {
		x: canvas.width / rec.width,
		y: canvas.height / rec.height
	}
	var mPos = {
		x: (evt.clientX - rec.left) * scale.x,
		y: (evt.clientY - rec.top) * scale.y
	}
	if (balls.ballList[0] === undefined)
		return;
	var vec = {
		x: (mPos.x - balls.ballList[0].posX), 
		y: (mPos.y - balls.ballList[0].posY)
	}
	var norme = Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2))

	if (norme <= 10)
		manager.lvUp();
	else
		manager.reset();
}
