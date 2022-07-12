
// 1859. Sorting the Sentence

// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  // create an array to hold word objects 
  const tempArray = [];
  // split the sentance string by single space in to words
  const words = s.split(' ');
  // for each word, get the last element in the string 
	for(i = 0; i < words.length; i++) {
   	const splitWord = words[i].split('');
   	const number = Number(splitWord[splitWord.length - 1])
   	splitWord.pop(); // remove the number from each word
    const fullWord = splitWord.join('')
    const wordObject = {
     fullWord,
     number
 	  }
    tempArray.push(wordObject);
  }

  // sort the temp array by number 
  tempArray.sort(function (a, b) {
  	return a.number - b.number;
	});

  const final = [];
  
  for (i = 0; i < tempArray.length; i++) {
    final.push(tempArray[i].fullWord);
  }
  
  return final.join(' ');
  
};
