$(document).ready(function() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var allWords = []
    allWords[0] = {word: "Queens", hint: "Located in Kingston, ON, this University holds an immense history within its signature limestone buildings"}
    allWords[1] = {word: "Bitmaker Labs", hint: "A private college in Toronto, ON, that specializes in running bootcamps for tech-related fields"}
  var hangmanImage = ["images/hangman5.png", "images/hangman4.png", "images/hangman3.png", "images/hangman2.png", "images/hangman1.png", "images/hangman-full.png"]
  var errors = 0;
  var guessCorrect = false;

  console.log(allWords)
  console.log(allWords[0].word)
  console.log(allWords[0].hint)

  //add word to guess
  // $('.guess').text(allWords[0].word).css("visibility", "hidden")

  var round = 0;
  var guessWord = allWords[round].word.toLowerCase().split("");
  console.log(guessWord)

  // append the letters to divs, giving the divs the class name as the letter
  for (var i = 0; i < guessWord.length; i++) {
    $('<div>').text(guessWord[i]).attr('class', guessWord[i]).appendTo('div.guess')
  }


  $('div.hangman-image').append("<img src='images/hangman6.png'></img>");

  var guessWordLetterDivs = $('div.guess > div')

  // create alphabet buttons:
  buttons = $('#buttons');
  letters = $('<ul>').attr("class", "alphabet");
  for (var i = 0; i < alphabet.length; i++) {
    list = $('<li>').attr("class", "letter");
    list.text(alphabet[i]);
    buttons.append(letters);
    letters.append(list);
  }

  //letters turn black when clicked
  $("li.letter").on("click", function(e) {
    letterSelected = $(this).text()
    guessCorrect = false;
      for (var i = 0; i < guessWordLetterDivs.length; i++) {
        if (guessWordLetterDivs[i].innerHTML === letterSelected) {
          var div = guessWordLetterDivs[i]
          div.style['color'] = 'black';
          guessCorrect = true;
        }

      }
      if (!guessCorrect) {
          subtractLives();
      }

  })

  function subtractLives() {
    if (errors > 5) {
      for (var i = 0; i < guessWordLetterDivs.length; i++) { guessWordLetterDivs[i].style['color'] = 'black' }
    } else {
    var imageTag = "<img src='" + hangmanImage[errors] + "' ></img>"
    $('div.hangman-image').html("")
    $('div.hangman-image').append(imageTag);
    errors++
  }}


});
