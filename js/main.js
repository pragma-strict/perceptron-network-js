
let ID_PARENT = 'p5-canvas-container';

let canvas;

// These store generated training points and their correct classes
let trainingData;
let trainingLabels;
let trainingDataCount = 50;
let perceptron;



// Initialization
function setup() {
  let parentStyle = window.getComputedStyle(document.getElementById(ID_PARENT));
  canvas = createCanvas(parseInt(parentStyle.width), parseInt(parentStyle.height));
  canvas.parent(ID_PARENT);
  perceptron = new Perceptron(trainingDataCount, 0.001);
  trainingData = new Array();
  trainingLabels = new Array();
  generateTrainingData(trainingDataCount);
  drawOutput();
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



function step(){
  background(BG_COL);
  for(let i = 0; i < trainingData.length; i++){
    perceptron.gradientDescent([trainingData[i].x, trainingData[i].y], trainingLabels[i]);
  }  
  drawOutput();
}



function drawOutput(){
  strokeWeight(8);
  for(let i = 0; i < trainingData.length; i++){
    let output = perceptron.feedForward([trainingData[i].x, trainingData[i].y]);
    if(output == trainingLabels[i]){
      stroke(GREEN);
    }
    else{
      stroke(RED);
    }
    point(trainingData[i].x, trainingData[i].y);
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



function mousePressed(){
  step();
}



function keyPressed(){
  if(key == ' '){
    step();
  }
}