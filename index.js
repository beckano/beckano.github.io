

function insult(name){
    name = prompt("What is your name?");

    var randomBodyParts = ["nose", "butt", "weiner", "toe", "stomach"];
    var randomAdjectives = ["horrifying", "terrible", "murky", "smelly", "putrid", "miserable", "overly large", "teeny weeny", "fantasic"];
    var randomWords = ["water bottle", "nozzle", "glove", "stick", "worm"];
    var randomAnimals = ["pig", "sloth", "skunk", "frog", "mouse", "tarantula", "flea"];
  
    var randomBodyPart = randomBodyParts[Math.floor(Math.random()*randomBodyParts.length)];
    var randomAdjective = randomAdjectives[Math.floor(Math.random()*randomAdjectives.length)];
    var randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];
    var randomAnimal = randomAnimals[Math.floor(Math.random()*randomAnimals.length)];

    alert("Sup " + name + "! Your " + randomBodyPart + " is a " + randomAdjective + " " + randomWord + "!");
}
//random practice
var numbers = [3, 2, 1];
console.log(numbers.join(" is bigger than "));

//hacker speak translator
function hackerSpeak(input){
  input =prompt("Input the phrase to be translated");
  var output ="";

  for (i=0; i<input.length; i++){
     if (input[i] === "a"|| input[i]==="A") {
    output += "4";
  }
  else if (input[i]=== "e"|| input[i]==="E"){
    output +="3";
  }
  else if (input[i]=== "i"|| input[i]==="I"){
    output+="1";
  }
  else if (input[i]=== "o"|| input[i]==="O"){
    output+="0";
  }
  else {
    output +=input[i];
  }
  }
  alert(output);
  }

//hangman

function hangman(){
  
  var randomWords = ["abrupt", "petite", "boast", "longing", "trade", "straw", "onerous", "rod", "try", "relation", "overrated", "tremendous", "loving", "murky", "pedal", "rub", "lamp", "temper", "nutty", "glorious", "shoes", "bright", "finger", "deserve", "blow", "sound", "reply", "awesome", "bathe", "colossal", "glib", "size", "heat", "bike", "hanging", "sugar", "plucky", "mean","agreement", "guide", "mountain",  "sky",  "fear", "quiet", "resonant",  "chivalrous", "coordinated", "jagged",  "domineering", "warlike", "scream", "thread", "romantic", "even", "bucket","brake", "art", "nasty", "stay", "stream", "amount", "jump", "suspend", "brash", "pick", "imagine", "mammoth", "sleepy", "soap", "perform", "suit", "acidic", "announce","dislike","tax", "stamp","attach", "fashioned", "decorous", "spiritual", "pest", "knot", "protect", "whisper", "thinkable", "applaud", "fold", "watery", "unequal", "shivering", "squirrel", "puzzled",  "crack", "fax",  "garrulous",  "skillful", "blot", "division", "pitched", "hissing"];

var word = randomWords[Math.floor(Math.random()*randomWords.length)];
var answerArray = [];
var numberOfGuesses = 0;

for (var i=0; i < word.length; i++){
  answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0 && numberOfGuesses < 20){
  alert(answerArray.join(" "));
  var guess = prompt("Guess a letter, or click cancel to stop playing. You have guessed " + numberOfGuesses + " times.");
  numberOfGuesses++;

  if (guess === null) {
     return;
  } else if (guess.length !==1){
    alert("Please enter a single letter");
   }else {
     guess = guess.toLowerCase();
     for (var j =0; j < word.length; j++){
      if (word[j]=== guess && answerArray[j] === "_"){
        answerArray[j]=guess;
        remainingLetters--;}
    }  
   }
}

if(numberOfGuesses < 20){alert(answerArray.join(" "));
alert("Good job! The answer was " + word + ". It took you " +  numberOfGuesses + " guesses!");}
else{
  alert("So sorry. You took too many guesses. The answer was " + word + ".");
}
}