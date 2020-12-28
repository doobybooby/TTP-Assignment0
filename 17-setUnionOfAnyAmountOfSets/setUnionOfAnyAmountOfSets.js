function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var output = new Set();
  // iterate through each set 
  for(var i of args){
  // iterate through each element in each set
	  for(var j of i){
	  //add element to output
	  output.add(j);
    }
  }
  return output;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
