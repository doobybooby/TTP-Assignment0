function sumOfAllOddNumbers(nums) {
  // Insert code here;
  var output =0;
  for(var i=0;i<nums.length;i++){
    if((nums[i]%2)==1){
	    output++;
    }
  }
  return output;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
