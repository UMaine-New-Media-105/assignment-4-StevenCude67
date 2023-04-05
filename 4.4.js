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
  //makes background light green color
  background("#D8FCA1");
  
  //i creates a pattern on the horizontal plane
  for (i = 0; i < 6; i++) {
    //j creates a pattern on the vertical plane
    for (j = 0; j < 3; j++) {
      
      //sets an array of colors that appear in a set order
      let colorArray = ["darkred","brown", "red", "crimson", "salmon", "pink"];
      let sizeArray = [0.6, 0.7, 0.8, 0.9, 1, 1.1]
    
      //sets an array of sizes that appear in a set order
      let nextColor = colorArray[i];
      let nextSize = sizeArray[i];
      
      drawFlower(i * 130 + 50, j * 130 + 45, nextSize, nextColor, 9, 36);
      //makes the middle flower with color that goes from darkred to pink and changes from 0.6 scale to 1.1 scale (left to right)

      drawFlower(i * 130 + 50, j * 130 + 115, 0.6, nextColor, 4, 90);
      //makes the right flower with set color darkred to pink

      drawFlower(i * 130 + 120, j * 130 + 70, 0.5, nextColor, 6, 60);
      //makes the bottom flower with set color darkred to pink
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
