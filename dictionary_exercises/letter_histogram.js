function letterHistogram(word) {
  var newDictionary = {};

  for (var i = 0; i < word.length; i++) {
    if (word[i] in newDictionary) {
      newDictionary[word[i]] += 1;
    } else {
      newDictionary[word[i]] = 1;
    }
  }
  console.log(newDictionary);
}

letterHistogram('bananas');
