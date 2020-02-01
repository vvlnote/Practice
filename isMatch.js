/*
Basic Regex Parser
Implement a regular expression function isMatch that supports the '.' and '*' symbols. 
The function receives two strings - text and pattern - and should return true if the text matches the pattern 
as a regular expression. 
For simplicity, assume that the actual symbols '.' and '*' do not appear in the text string 
and are used as special symbols only in the pattern string.

In case you aren’t familiar with regular expressions, the function determines 
if the text and pattern are the equal, where the '.' is treated as a single a character wildcard 
(see third example), and '*' is matched for a zero or more sequence of the previous letter 
(see fourth and fifth examples). For more information on regular expression matching, 
see the Regular Expression Wikipedia page.

Explain your algorithm, and analyze its time and space complexities.

*/

function isMatch(text, pattern) {
  // your code goes here
  if (pattern == null || text == null) return false;
  if (pattern.length == 0 && text.length == 0) return true;
  if (pattern.length == 0) return false;
  if (text.length == 0) {
    if (pattern[1] == '*'){
      return true;
    } else {
      return false;
    }
  }
  
  if (!pattern.includes('.') && !pattern.includes('*')) {
    if (text === pattern) {
      return true;
    } else {
      return false;
    }
  }
  

  let itext = 0;
  let ipa = 0;
  
  while(itext < text.length && ipa < pattern.length){
  	console.log(`itext = ${itext}, ipa = ${ipa}, textChar = ${text[itext]}, patternChar = ${pattern[ipa]}`);
    if (pattern[ipa] == '.') {
      itext += 1;
      ipa += 1;
    } else if (pattern[ipa] == '*') {
      let previousChar = pattern[ipa-1];
      if (previousChar != text[itext]) {
        ipa += 1;
      } else {
      	itext += 1;
        while (itext[itext] == previousChar) {
        	console.log(`while loop => itext = ${itext}`);
          	itext += 1;
        }
        ipa += 1;
      }
    } else {
      if (pattern[ipa] != text[itext]){
        let nextPatternChar = pattern[ipa + 1]; 
        if (nextPatternChar == '*') {
          ipa += 2;
        } else {
          return false;
        }
      } else {
        ipa += 1;
        itext += 1;
      }
    }
  }
  console.log(`itext = ${itext}, text length = ${text.length}, ipa = ${ipa}, pattern length = ${pattern.length}`);
  if (itext == text.length && ipa == pattern.length) {
    return true;
  }
  return false;

}

isMatch('abbdbb', 'ab*d');