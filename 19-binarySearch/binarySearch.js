class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
	  var mid = Math.floor(nums.length/2);
	  var newNums = nums;
	  // base case,if array has one element
	  if(nums.length === 1 && nums[0] != target){
		return false;
	  }
	  // check the middle 
	  if(nums[mid]===target){
	    return true;
	  }
	  //if target < mid
	  else if(nums[mid]>target){
	    var newNums = nums.slice(0,mid);
	    return this.binarySearch(newNums,target);
	  }
	  //if target > mid
	  else if(nums[mid]<target){
	    var newNums = nums.slice(mid);
	    return this.binarySearch(newNums,target);
	  } 
  }
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
