class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    if(nums[0]== target){
      return true;
    }
    // compare the middle index
    var mid = Math.floor((start+end)/2);
    if(nums[mid]== target){
      return true;
    }
    // if Target is greater than mid, splice, then recurs
    else if(nums[mid]< target && nums.length >1){
      this.binarySearch(nums.splice(mid), target);
    }
    // if Target is less than mid, splice, then recurs
    else if(nums[mid] > target && nums.length > 1){
      this.binarySearch(nums.splice(0,mid),target);

    }
    // target doesn't exist
    else{
      return false;
    }
  }
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
