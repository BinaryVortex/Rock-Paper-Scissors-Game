let choicesBox = document.querySelector('.container .choices');
let result = document.querySelector('.container .result');
let userChoiceText = document.querySelector('.container .choices .your-choice');
let computerChoiceText = document.querySelector('.container .choices .computer-choice');
let userScoreText = document.querySelector('.container .your-score');
let computerScoreText = document.querySelector('.container .computer-score');

let computerScore = 0;
let userScore = 0;

let getResult =(userChoice)=>{
  //console.log(userChoice) 
  choicesBox.style.display = 'block';
  result.style.display = 'block';
  
  ///Computer Random Choice
  let randomChoices = ['rock','paper','scissor'];
  let computerChoice = randomChoices[Math.floor(Math.random() * randomChoices.length)];
  
  userChoiceText.innerHTML = `You choose: <span style="font-weight:600">${userChoice}</span>`;
  computerChoiceText.innerHTML = `Computer choose: <span style="font-weight:600">${computerChoice}</span>`;
  
  let outcomes ={
  rockrock:'Draw', 
  rockpaper:'Computer', 
  rockscissor:'You', 
  paperpaper:'Draw', 
  paperrock:'You', 
  paperscissor:'Computer', 
  scissorscissor:'Draw', 
  scissorrock:'Computer', 
  scissorpaper:'You', 
 }
  
  let outcomeValue = outcomes[userChoice + computerChoice];
 result.innerHTML = userChoice == computerChoice ? 'Draw' : `${outcomeValue} won!`;
 
 if(outcomeValue == 'You'){
    userScore++;
    userScoreText.innerHTML = `You: <span style="font-weight:600">${userScore}</span>`;
 }else if(outcomeValue == 'Computer'){
    computerScore++; 
    computerScoreText.innerHTML = `Computer: <span style="font-weight:600">${computerScore}</span>`;
 }
}   