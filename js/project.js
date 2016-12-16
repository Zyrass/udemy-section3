window.onload = function() {

    var canvasWidth = 900;
    var canvasHeigth = 600;
    var blockSize = 30;
    var context;
    var delay = 100;
    var snakee;
    var applee;

    init();

    function init()
    {
        var canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeigth;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        context = canvas.getContext('2d');
        snakee = new Snake([[6,4], [5,4], [4,4]], "right");
        applee = new Apple([10, 10]);
        refreshCanvas();
    }
    
    function refreshCanvas()
    {
        context.clearRect(0,0,canvasWidth,canvasHeigth);
        snakee.advance();
        snakee.draw();
        applee.draw();
        setTimeout(refreshCanvas, delay);
    }

    function drawBlock(context, position)
    {
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        context.fillRect(x,y, blockSize, blockSize);
    }

    function Snake(body, direction)
    {
        this.body = body;
        this.direction = direction;
        this.draw = function() 
        {
            context.save();
            context.fillStyle = "#f54f56";
            for( var i = 0; i < this.body.length; i++) 
            {
                drawBlock(context, this.body[i]);
            }
            context.restore();
        };

        this.advance = function()
        {
            var nextPosition = this.body[0].slice();
            switch(this.direction)
            {
                case "left":
                nextPosition[0] -= 1;
                break;

                case "right":
                nextPosition[0] += 1;
                break;

                case "down":
                nextPosition[1] += 1;
                break;

                case "up":
                nextPosition[1] -= 1;
                break;

                default: 
                    throw("Invalid Direction");
            }
            this.body.unshift(nextPosition);
            this.body.pop();
        };
        this.setDirection = function(newDirection)
        {
            var allowedDirection;
            switch(this.direction)
            {
                case "left":
                case "right":
                    allowedDirection = ["up", "down"];
                    break;

                case "down":
                case "up":
                    allowedDirection = ["left", "right"];
                    break;

                default: 
                    throw("Invalid Direction");
            }
            if(allowedDirection.indexOf(newDirection) > -1)
            {
                this.direction = newDirection;
            }
        };

    }

    function Apple(position)
    {
        this.position = position;
        this.draw = function()
        {
            context.save();
            context.fillStyle = "#33cc33";
            context.beginPath();
            var radius = blockSize/2;
            var x = position[0]*blockSize + radius;
            var y = position[1]*blockSize + radius;
            context.arc(x,y, radius, 0, Math.PI*2, true);
            context.fill();
            context.restore();
        };
    }

    document.onkeydown = function handleKeyDown(e)
    {
        var key = e.keyCode;
        var newDirection;
        switch(key)
        {
            case 37:
                newDirection = "left";
                break;
            case 38:
                newDirection = "up";
                break;
            case 39:
                newDirection = "right";
                break;
            case 40:
                newDirection = "down";
                break;

            default: 
                return;
        }
        snakee.setDirection(newDirection);
    }

} // Fin windows Onload()

