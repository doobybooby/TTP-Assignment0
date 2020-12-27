function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var output =0;
  for(var i =0;i<nums.length;i++){
    if(nums[i] >= start && nums[i]<=end){
	    output++;
    }
  }
  return output;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
