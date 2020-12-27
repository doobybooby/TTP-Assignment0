function countOfAllBooleans(arr) {
  // Insert code here;
  var output = 0;
  var i;
  
  for(i=0;i<arr.length;i++){
    if(arr[i]===true || arr[i]===false){
	output++;
    }
  }
  return output;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
