class circle
{
    var canvas = document.getElementById("myCanvas");
    var 2d_context = canvas.getContext("2d");
    var posx = 0;
    var posy = 0;
    var color = ""

    constructor(color) {
	this.posx = Math.floor(Math.random() * document.body.clientWidth);
	this.posy = Math.floor(Math.random() * document.body.clientHeigth);
	this.color = color;
    }

    draw()
    {
	this.2d_context.beginPath();
	this.2d_context.fillStyle = color;
	this.2d_context.arc(posx, posy, 20, 0, 2 * Math.PI);
	this.2d_context.fill();
	this.2d_context.closePath();
    }
}
