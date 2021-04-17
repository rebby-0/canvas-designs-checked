const canvas = document.querySelector('canvas');
const con = canvas.getContext('2d')

// con.fillStyle = "purple"
// con.fillRect(300, 400, 80, 100)
// con.fillRect(500, 200, 80, 100)
// con.fillRect(100, 200, 80, 100)

// //line

// con.beginPath();
// con.moveTo(350, 50);
// con.lineTo(80, 500);
// con.lineTo(600, 500);
// con.lineTo(350, 50)
// con.lineWidth = 5
// con.fillStyle = "yellow"

// con.fill()
// con.strokeStyle = "violet"
// con.stroke()

//arcs and circle

//for drawing multiple circles

// for (var i = 1; i < 5; i++) {
//     for (var j = 1; j < 4; j++) {
//       con.beginPath();
//       var x = 25 + j * 150; // x coordinate
//       var y = 25 + i * 150; // y coordinate
//       var radius = 20; // Arc radius
//       var startAngle = 0; // Starting point on circle
//       var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
//       var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

//       con.arc(x, y, radius, startAngle, endAngle, anticlockwise);

//       if (i > 1) {
//         con.fill();
//       } else {
//         con.stroke();
//       }
//     }
//   }

  //every time the circle loops through you 
//  const colors = [con.fillStyle = "red", "yellow", "purple", "green", "blue"]

//   for (var i = 1; i < 150; i++) {
//     //   for (var k = 0; k < colors.length; k++) {
          
//     const x = Math.random() * window.innerWidth;
//     const y = Math.random() * window.innerHeight;
//   con.beginPath();
//   con.arc(x, y, 40, 0, Math.PI*2, false);
//   con.stroke();
//   }
// }

//animations

// eventlistener
var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;

var minRadius = 2;

var colorArray = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink'
]


// assign mouse event to a value called mouse
window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;


    }
)


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


// to create animation functions
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    // this.w = w;
    // this.h = h;
    this.radius = radius;
    this.minRadius = radius
    // this.z = Math.random() * window.innerWidth;

    // this.move = function() {
    //     this.x -= 
    //     if (this.z <= 0) {
    //         this.z = stars.width;
    //     }
    // };

    // draws the circles
    this.draw = function() {
        con.beginPath();
        con.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        con.stroke();
        con.fillStyle = this.color;
        con.fill();
    }
    // prevents the circles from moving out of the page..
    this.update = function() {
        if (this.x + this.radius > innerWidth ||
            this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight ||
            this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // this controls if the shape will go to the left or to the right, the x on -x means that the circles will go to the left first while the y on + plus means that they will got up first
        this.x -= this.dx
        this.y += this.dy

        this.draw()
        // this.move()

        //controlls the mouse movement
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) { 
            if (this.radius > minRadius){
                this.radius -= 1
            } 
         } else if (this.radius < this.minRadius) 
        {
            this.radius += 1
        }
    }
    }

    var circleArray = [];


function init() {
    
    circleArray = [];
    // to create 100 circles
    for (var i = 0; i < 800; i++) {
      
        var radius = Math.random() * 20 + 1;
        var x =  Math.random() * (window.innerWidth - radius * 20) + radius;
        var y = Math.random() * (window.innerHeight - radius * 20) + radius;
        var dx = Math.random() - 0.5 * 3;
        var  dy = Math.random() - 0.5 * 3;
        // var w = Math.random() * 100;
        // var h = Math.random() * 100;
      
    
        circleArray.push(new Circle(x, y, dx, dy, radius))
    }    
}
init()

// to execute  animation functions
function animate() {
    requestAnimationFrame(animate);
    con.clearRect(0, 0, innerWidth, innerHeight)

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
  
    
}
animate()