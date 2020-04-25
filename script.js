window.onload = function ()
{
    var canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 600;
    canvas.style.border = "3px solid";
    this.document.body.appendChild(canvas);

    var ctx = canvas.getContext ('2d');
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(30, 30, 100, 50);
}