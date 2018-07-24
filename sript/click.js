

function myClick(evt) {
	var canavas = document.getElementById("myCanvas");
	var rec = canavas.getBoundingClientRect();
	var mPosX = evt.clientX - rec.left;
	var mPosY = evt.clientY - rec.top;
	var vec = {
		x: balls.ballList[0].posX - mPosX,
		y: balls.ballList[0].posY - mPosY}

	console.log("mouse coord " + mPosX + "," + mPosY)
}

console.log("gone through here")
