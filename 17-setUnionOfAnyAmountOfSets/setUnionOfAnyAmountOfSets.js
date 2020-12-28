function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var output = new Set();
  // iterate through each set 
  for(i in args){
  // iterate through each element in each set
    for(j in i){
	  //add element to output
	  output.add(i[j]);
    }
  }
  return output;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
