function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
    var output =0;
    var i;
    for(i=0;i<arr.length;i++){
    if(typeof arr[i]==='boolean' || typeof arr[i]==='string'){
        output++;
    }
  }
  return output;

}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
