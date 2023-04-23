<h2>Treasure Hunt App</h2>

The webapp is meant to identify and measure the softskill of the user interacting with the webapp.
It has two main utillizations:
1. To measure the softskills
2. Admin Site: To have a clear overview of all the users interacting with the game.

The treasure hunt game has different stages.
At each stage you will be given a clue and intermediate stages have some puzzles in it.
You have to gather all the clues and reach to a final conclusion.

<h2>Steps to setup the project:</h2>
1.Fork the Repo <a href="https://github.com/rajat-gith/treasure-hunt/" target="_blank">Github Repo</a><br/>
2. Clone the Repository into local folder.<br/>
3. Run the command "npm install" to install all packages necessary for the webapp.<br/>
4. Run "npm start" to use the webapp<br/>
5. Apart running in the local machine you can directly make use of <a href="https://treasure-hunt-v1.netlify.app/" target="_blank">Deployed Link</a>

<h2>Brief Logic</h2>
In stage 1 the user is given a clue for 10 seconds and then in stage 2, the user needs to solve a challenge.<br/>
At Stage 3 the user is given another clue for 10 seconds after that a pop-up will be opened.<br/>
The correct option can be deduced if and only if the user has deduced both clues correctly.<br/>
From this, the memory power and the grasping power of the user are tested. Since clue 1 is shown for a limited period of time and then the user has to solve the puzzle. Also, Stage 3 is a dead end. Choosing an incorrect one will end the challenge. In stage 2 the amount of time taken to solve the puzzle checks the accuracy of the user.<br/>
Subsequent stages have different clues embedded in them. Atlast the user has to connect all the clues to reach to the final result.


Future Updates:
1. Addition of more complication puzzles and riddles to test more accurately
