/*
   This code is mostly taken from Daniel Shiffman's perceptron tutorial
*/


class Perceptron{
   constructor(layerSize){
      // Each perceptron weighs its inputs uniquely so each needs to store its own weights vector
      this.weights = new Array(layerSize);

      // Randomly initialize the weights
      for(let i = 0; i < this.weights.length; i++){
         this.weights[i] = random(-1, 1);
      }
   }


   // Feed perceptron inputs through the node and return an output
   feedForward(inputs){
      let sum = 0;
      for(let i = 0; i < this.weights.length; i++){
         if(i < inputs.length){
            sum += inputs[i] * this.weights[i];
         }
      }
      return this.activate(sum);
   }


   // The activation function - return 1 if passed threshold, else -1
   activate(input){
      if(input > 0){
         return 1;
      }
      return -1;
   }


   // Getter for the weights vector
   getWeights(){
      return this.weights;
   }
}