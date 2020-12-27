function isPalindrome(word) {
  // Insert code here;
  var revWord = word.split('').reverse().join('');
  return word == revWord;
  
}

// Do not edit this line;
module.exports = isPalindrome;
