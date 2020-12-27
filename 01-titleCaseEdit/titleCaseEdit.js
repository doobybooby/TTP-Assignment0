function titleCaseEdit(title) {
  // Insert code here;
  var split = title.split(' ');
  var output = '';
  var i;
  for(i=0;i<split.length;i++){
	output += split[i].charAt(0).toUpperCase()+split[i].slice(1);
	if(i!=split.length-1)
	   output += ' ';
  }
  return output;  
}

// Do not edit this line;
module.exports = titleCaseEdit;
