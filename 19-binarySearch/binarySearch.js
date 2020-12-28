class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    
	  var mid = Math.floor(nums.length/2);
    if(nums.length<=1){
	    if(nums[0]!= target){
	    }
    }
    if (target == nums[mid]){
      return true;
    }
    else if(nums[mid]<= target){
      return this.binarySearch(nums.slice(0,middle),target);
    }
    else if(nums[mid]>= target){
      return this.binarySerach(nums.slice(middle),target);
    }
   }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
