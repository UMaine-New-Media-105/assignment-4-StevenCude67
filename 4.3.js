//Code created by Steven Cude
//p5.js refrence used for loops

function setup() {
  createCanvas(800, 400);

  //changes modes of angle and circles
  angleMode(DEGREES);
  ellipseMode(CORNER);

  //prevents infinte loops
  noLoop();
}

function draw() {
  //changed background from pink to green
  background("#D8FCA1");
  
  //i creates a pattern on the horizontal plane
  for (i = 0; i < 6; i++) {
    //j creates a pattern on the vertical plane
    for (j = 0; j < 3; j++) {
      
      //sets an array of colors that are randomly chosen
      let colorArray = ["darkred","brown", "red", "crimson", "salmon", "pink"];
      let sizeArray = [0.5, 0.6, 0.7, 0.8, 0.9, 1]
      
      //sets an array of sizes that are randomly chosen
      let randomColor = random(colorArray);
      let randomSize = random(sizeArray)
      
      drawFlower(i * 130 + 50, j * 130 + 45, randomSize, randomColor, 9, 36);
      //makes the middle flower with random color and size

      drawFlower(i * 130 + 50, j * 130 + 115, 0.6, randomColor, 4, 90);
      //makes the right flower with random color

      drawFlower(i * 130 + 120, j * 130 + 70, 0.5, randomColor, 6, 60);
      //makes the bottom flower with random color
    }
  }
}

//this function creates a loop that makes a flower with changeable pedal values
function drawFlower(
  flowerX,
  flowerY,
  flowerSize,
  pedalColor,
  pedalAmount,
  pedalRotate
) {
  push();
  translate(flowerX, flowerY);
  scale(flowerSize);
  for (let pedal = 0; pedal <= pedalAmount; pedal++) {
    fill(pedalColor);
    rotate(pedalRotate);
    ellipse(0, 0, 15, 40);
  }
  //this adds the center yellow circle so it looks like a flower
  push();
  fill("yellow");
  ellipse(-10, -10, 20);
  pop();
  pop();
}
