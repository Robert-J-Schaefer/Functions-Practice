//Find the largest number
function findLargest(a, b, c){
    if(a > b && a > c){
      return a;
    }else if(b > a && b > c){
      return b;
    }else{
      return c;
    }
  }
  
  console.log(findLargest(5, 10, 3)); 
  console.log(findLargest(8, 2, 6));
  
  console.log("-----------------");
  
  //Reverse Words in a Sentence
  function reverseWords(sentence){
    let words = sentence.split(" ");
    let reversed = [];
  
    for(let i = words.length - 1; i >= 0; i--){
      reversed.push(words[i]);
    }
  
    return reversed.join(" ");
  }
  
  console.log(reverseWords("Hello World!"));
  console.log(reverseWords("The quick brown fox"));
  console.log(reverseWords("JavaScript is fun"));
  
  console.log("-----------------");
  
  //Find the Largest Word in an Array
  function findLargestWord(words){
    let bigWord = words[0];
  
    for(let i = 1; i < words.length; i++){
      if(words[i].length > bigWord.length){
        bigWord = words[i];
      }
    }
  
    return bigWord;
  }
  
  console.log(findLargestWord(["apple", "banana", "cherry", "date"]));
  console.log(findLargestWord(["dog", "elephant", "cat"]));
  console.log(findLargestWord(["red", "blue", "green"]));
  
  console.log("-----------------");
  
  //Count Occurrences of Words in a Sentence
  function countWords(sentence){
    let words = sentence.split(" ");
    let wordCount = {};
  
    for(let i = 0; i < words.length; i++){
      let currentWord = words[i].toLowerCase();
      if(wordCount[currentWord]){
        wordCount[currentWord]++;
      }else{
        wordCount[currentWord] = 1;
      }
    }
  
    return wordCount;  
  }
  
  console.log(countWords("Hello world hello"));
  console.log(countWords("This is a test this is only a test"));