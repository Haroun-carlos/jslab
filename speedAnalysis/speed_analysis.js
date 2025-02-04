let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
function startTest() {
// Set the test text
document.getElementById("inputText").value = testText;

// Reset results and timer
document.getElementById("output").innerHTML = "";
startTime = new Date().getTime();

// Change button text and functionality
var button = document.getElementById("btn");
button.innerHTML = "End Test";
button.onclick = endTest;
        }
function endTest(){
    endTime=new Date().getTime();
    document.getElementById("userInput").readonly=True;
    var timeElapsed=(endTime-startTime)/1000;
    var userTypedText=document.getElementById("userInput").value;

    var typewords=userTypedText.split(/\s+/).filter(function(word){
        return word !=="";
    }).length;
    var wpm=0;
    if(timeElapsed  !==0 && !isNaN(typewords)){
        wpm=Math.round((typewords/timeElapsed)*60);
    }
    var outputDiv=document.getElementById("output");
    outputDiv.innerHTML="<h2>Typing Test Results:</h2>"+
    "<p>Words Typed: " + typedWords + "</p>" +
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
    "<p>Words Per Minute (WPM): " + wpm + "</p>";

    var button=document.getElementById("btn");
    button.innerHTML="Start Test";
    button.onclick=startTest;

}