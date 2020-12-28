function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  var output=1;
  for(var i=0;i<args.length;i++){
    output*=args[i];
  }
  return output;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
