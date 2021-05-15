
let ID_PARENT = 'p5-canvas-container';

let canvas;

// These store generated training points and their correct classes
let trainingData;
let trainingLabels;
let trainingDataCount = 50;
let inputs = [0.2, 0.4, 1, 0.6, 0.3, -3.2, -0.9, 1.4];  // This will probably be replaced by the training data
let perceptron;



// Initialization
function setup() {
  let parentStyle = window.getComputedStyle(document.getElementById(ID_PARENT));
  canvas = createCanvas(parseInt(parentStyle.width), parseInt(parentStyle.height));
  canvas.parent(ID_PARENT);
  perceptron = new Perceptron(inputs);
  trainingData = new Array();
  trainingLabels = new Array();
  generateTrainingData(trainingDataCount);
  drawTrainingData();
}



// Adjust canvas dimensions
function windowResized() {
  let parentStyle = window.getComputedStyle(document.getElementById(ID_PARENT));
	resizeCanvas(parseInt(parentStyle.width), parseInt(parentStyle.height));
}



// Fill the array of training data and labels
function generateTrainingData(numberOfPoints){
  for(let i = 0; i < numberOfPoints; i++){

    // Create a random point and push it and its label onto the respective arrays
    let point = createVector(random(width), random(height));
    trainingData.push(point);
    if(point.x > point.y){
      trainingLabels.push(-1);
    }
    else{
      trainingLabels.push(1);
    }
  }
}



// Render the training data to the canvas
function drawTrainingData(){
  strokeWeight(8);
  for(let i = 0; i < trainingData.length; i++){
    if(trainingLabels[i] > 0){
      stroke(RED);
    }
    else{
      stroke(GREEN);
    }
    point(trainingData[i].x, trainingData[i].y);
  }
}