function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  var output =0;
  var i;
  for(i =0;i<nums.length;i++){
    if(i==nums[i]){
	    output++;
    }
  }
  return output;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
