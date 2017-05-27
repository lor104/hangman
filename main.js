$(document).ready(function() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var allWords = []
    allWords[0] = {word: "Queens", hint: "Located in Kingston, ON, this University holds an immense history within its signature limestone buildings"}
    allWords[1] = {word: "Bitmaker Labs", hint: "A private college in Toronto, ON, that specializes in running bootcamps for tech-related fields"}

  console.log(allWords)
  console.log(allWords[0].word)
  console.log(allWords[0].hint)

  // create alphabet buttons:
  buttons = $('#buttons');
  letters = $('<ul>').attr("class", "alphabet");
  for (var i = 0; i < alphabet.length; i++) {
    list = $('<li>').attr("class", "letter");
    list.text(alphabet[i]);
    buttons.append(letters);
    letters.append(list);
  }

});
