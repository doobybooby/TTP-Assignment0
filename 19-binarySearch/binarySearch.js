class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    
    // Find the middle indez
    var mid = Math.floor((start+end)/2);
    if(nums[mid]== target){
      return true;
    }
    else if(nums[mid]< target && nums.length >1){
      this.binarySearch(nums.splice(mid), target);
    }
    else if(nums[mid] > target && nums.length > 1){
      this.binarySearch(nums.splice(0,mid),target);
    }
    else{
      return false;
    }
  }
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
