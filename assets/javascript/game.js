// VARIABLES
// ==========================================================================

var spells = ["Crucio", "Expecto Patronum", "Imperio", "Expelliarmus", "Lumos", "Avada Kedavra", "Wingardium Leviosa", "Stupefy",
"Incendio", "Protego Totalum", "Obliviate"]
var spell = "spell";
var spellUsed = ["spell"];
var winNo = 0;
var lifeRemain;
var userWord;

var start = 0;
var userInput = "";
var gameLine = [];
var letterUsed = [];



var audioSpell = document.createElement("audio"); 


// FUNCTIONS
// ==============================================================================

/* Computer randomly select a spell from spells array, make sure it is not guessed before, and generate a new 
blank line on webpage for user to input their guesses.*/
function getSpell()
{
	while (spellUsed.includes(spell))
	{
		spell = spells[Math.floor(Math.random()*(spells.length))];
	}
	spellUsed.push(spell);
    for (var i = 0; i < spell.length; i++)
	{
	    if (spell[i] === " ")
    	{
    		gameLine.push(" ");
    	}
    	else
    	{
    		gameLine.push("_");
    	}
    }	
	document.getElementById('gameLine').textContent = gameLine.join("\xa0");
}

/* Reset for new games: rest lifeRemain, letterUsed, gameLine on webpage and get a new spell for user to guess. */
function newGame()
{
		lifeRemain = 15;
		letterUsed = [];
		gameLine = [];		
		document.getElementById('wins').innerHTML = winNo;
		document.getElementById('lifeRemain').innerHTML = lifeRemain;
		document.getElementById('letterUsed').textContent = letterUsed;
		start ++;
		getSpell();
	    if (userWord === "Incendio")
		{ 
			$("#imgTag").attr("src", "assets/images/incendio.jpg");			
        	audioSpell.setAttribute("src", "assets/audios/incendio.mp3");
        	audioSpell.play();		
		}
}



// MAIN PROCESS
// ==============================================================================

// When the user presses a key, it will run the following function...
	document.onkeyup = function (event)
	{
		if (start === 0)
		{
			newGame();
		}
		else if (!letterUsed.includes(event.key.toLowerCase()))
		{
			userInput = event.key.toLowerCase();
			if (!spell.includes(userInput) && !spell.includes(userInput.toUpperCase()))
			{
				lifeRemain --;
				document.getElementById('lifeRemain').innerHTML = lifeRemain;
			}
			else 
			{
				for (var i = 0; i < spell.length; i++)
				{

					if (spell[i] === userInput || spell[i] === userInput.toUpperCase())
					{		
						console.log(spell[i]);		
						gameLine[i] = spell[i];
					}
					document.getElementById('gameLine').textContent = gameLine.join("\xa0");			
				}
			}
			
			letterUsed.push(userInput);
			document.getElementById('letterUsed').textContent = letterUsed;
			userWord = gameLine.join("");

			if(userWord === spell)
				{
					winNo ++;
					start = 0;
					document.getElementById('answerTop').textContent = userWord;
					newGame();
				}
			if(lifeRemain<= 0)
				{
					start = 0;
					newGame();
				}
		}
	}