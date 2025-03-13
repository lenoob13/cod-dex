// Write code below 💖
/*
Ex17
Rock Paper Scissors is a classic game that resonates with folks from around the world. The rules are as follows:

Rock beats Scissors.
Scissors beat Paper.
Paper beats Rock.
Let's use conditionals, the random number generator, and create a program that simulates the game between the player and the computer!

Begin with a player variable and give it a 0 to represent "Rock", a 1 to represent "Paper", or a 2 to represent "Scissors."

Then use Math.random() to generate a number between 0 and 2 for another computer variable.

Then, use conditionals to compare the values of player and computer to see who wins!

Player picked:      Rock
Computer picked:    Scissors

The player won!

After you're finished, feel free to post a screenshot of your code on Twitter by clicking the icon below!
 */
let coup_joueur=1;
let coup_machine=Math.floor(Math.random()*3);
if (coup_joueur == 0){
  console.log("Player picked: Rock");
}else if (coup_joueur == 1){
  console.log("Player picked: Paper");
}else if (coup_joueur == 2){
  console.log("Player picked: Scissor");
}
if (coup_machine == 0){
  console.log("Computer picked: Rock");
}else if (coup_machine == 1){
  console.log("Computer picked: Paper");
}else if (coup_machine == 2){
  console.log("Computer picked: Scissor");
}
if ((coup_machine==1 && coup_joueur == 0)||(coup_machine==2 && coup_joueur == 1)||(coup_machine==0 && coup_joueur == 2)){
  console.log("The computer won");
}else if ((coup_machine==0 && coup_joueur == 1)||(coup_machine==1 && coup_joueur == 2)||(coup_machine==2 && coup_joueur == 0)){
  console.log("The player won");
}else{
  console.log("draw")
}
