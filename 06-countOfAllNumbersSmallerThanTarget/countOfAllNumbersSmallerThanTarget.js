function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var output =0;
  var i;
  for(i=0;i<nums.length;i++){
    if(nums[i]<target){
	    output++;
    }
  }
  return output;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
