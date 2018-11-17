// Global Variables

var counter = 0;
var targetNumber = "";
var wins = 0;
var losses = 0;
var images = [ 
    "Assets/Style/Images/Crystal1.png",
    "Assets/Style/Images/Crystal2.png",
    "Assets/Style/Images/Crystal3.png",
    "Assets/Style/Images/Crystal4.png"
];
// Functions To Call

// Generate the target number
function getRandomTarget() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
}

// Resets the numbers for the game

function createCrystals () {

for (var i = 0; i < images.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystalImage")
    imageCrystal.attr("src", images[i])
    imageCrystal.attr("crystalValue", (Math.floor(Math.random() *12) + 1));
    $("#crystals").append(imageCrystal);
}

}

// Restes the DOM for play
function resetDOM () {
    $("#numberToGuess").html(targetNumber);
    $("#totalWins").html(wins);
    $("#totalLosses").html(losses);
    $("#crystals").empty();
}

// Runs the reset functions and 
function resetGame () {
    getRandomTarget ();
    counter=0;
    $("#totalScore").html(counter)
    resetDOM ();
    createCrystals ();

}

getRandomTarget();
resetDOM();
createCrystals();


function crystalClick () {
    counter += parseInt($(this).attr("crystalValue"));
    $("#totalScore").html(counter);
    console.log(counter);

    if (counter === targetNumber) {
        wins ++;
        resetGame();
    }

    else if (counter > targetNumber) {
        losses++;
        resetGame();
    };
};




$(document).on("click", ".crystalImage", crystalClick)
