function frequencyCounter(word) {
  // Insert code here;
  var dict = {};
  var i;
  for(var i=0;i<word.length;i++){
    var letter = word.charAt(i);
	  if(dict[letter]){
	    dict[letter]++;
	  }
	  else{
	    dict[letter]=1;
	  }
  }
  return dict;
}

// Do not edit this line;
module.exports = frequencyCounter;
