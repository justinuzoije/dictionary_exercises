var newDictionary = {};
var array = {};

function wordHistogram(sentence) {
  array = sentence.split(" ");
  for (var i = 0; i < array.length; i++) {
    if (array[i] in newDictionary) {
      newDictionary[array[i]] += 1;
    } else {
      newDictionary[array[i]] = 1;
    }
  }
  console.log(newDictionary);
}

wordHistogram('to be or not to be');
