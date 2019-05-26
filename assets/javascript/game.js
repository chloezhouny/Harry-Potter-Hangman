// VARIABLES
// ==========================================================================

var spells = ["Crucio", "Expecto Patronum", "Imperio", "Expelliarmus", "Lumos", "Avada Kedavra", "Wingardium Leviosa", "Stupefy",
"Incendio", "Protego Totalum", "Obliviate", "Finite Incantatem", "Reparo", "Alohomora"];

var spellImages = ["assets/images/crucio.jpg", "assets/images/expecto.jpg", "assets/images/crucio.jpg", "assets/images/expelliarmus.jpg", "assets/images/lumos.jpg",
"assets/images/avada.jpg","assets/images/wingardium.jpg", "assets/images/stupefy.jpg","assets/images/incendio.jpg","assets/images/protego.jpg",
"assets/images/obliviate.jpg","assets/images/expelliarmus.jpg", "assets/images/expelliarmus.jpg", "assets/images/alohomora.jpg"];

var spellAudioLink = ["assets/audios/dark.mp3", "assets/audios/expecto.mp3", "assets/audios/dark.mp3", "assets/audios/expelliarmusN.mp3","assets/audios/general.mp3",
"assets/audios/dark.mp3","assets/audios/leviosa.mp3","assets/audios/general.mp3","assets/audios/incendio.mp3","assets/audios/general.mp3",
"assets/audios/obliviate.mp3","assets/audios/finite.mp3", "assets/audios/reparo.mp3", "assets/audios/alohomora.mp3"];


var spell = "spell";   // Used for prevent computer generating same spell as before.
var spellUsed = ["spell"]; // Used for prevent computer generating same spell as before.
var winNo = 0; 
var lifeRemain;
var userWord; 

var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
var start = 0;
var userInput = ""; 
var gameLine = [];
var letterUsed = [];




var bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.05;


// FUNCTIONS
// ==============================================================================

/* Computer randomly select a spell from spells array, make sure it is not guessed before, and generate a new 
blank line on webpage for user to input their guesses.*/
function getSpell()
{	if (spellUsed.length >= spells.length)
	{
		spellUsed = [];
	}
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
		if(spellUsed.length < spells.length)
		lifeRemain = 10;
		letterUsed = [];
		gameLine = [];		
		document.getElementById('wins').innerHTML = winNo;
		document.getElementById('lifeRemain').innerHTML = lifeRemain;
		document.getElementById('letterUsed').textContent = letterUsed;
		start ++;
		getSpell();

		for (var i = 0; i < spells.length; i ++)
		{
			if (userWord === spells[i])
			{
				$("#imgTag").attr("src", spellImages[i]);
				var audioSpell = document.createElement("audio"); 
				audioSpell.setAttribute("src", spellAudioLink[i]);
        		audioSpell.play();
        		audioSpell.volume = 1;		
			}
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
		else if (!letterUsed.includes(event.key.toLowerCase()) && alphabet.includes(event.key.toLowerCase()))
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