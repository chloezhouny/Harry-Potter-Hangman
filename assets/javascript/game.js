// VARIABLES
// ==========================================================================

var spells = ["Crucio", "Expecto Patronum", "Imperio", "Expelliarmus", "Lumos", "Avada Kedavra", "Wingardium Leviosa", "Stupefy",
"Incendio", "Protego Totalum", "Obliviate", "Finite Incantatem", "Reparo", "Alohomora"]
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

		if (userWord === "Crucio")
		{ 
			$("#imgTag").attr("src", "assets/images/crucio.jpg");			
		}

		if (userWord === "Expecto Patronum")
		{ 
			$("#imgTag").attr("src", "assets/images/expecto.jpg");			
        	audioSpell.setAttribute("src", "assets/audios/expecto.mp3");
        	audioSpell.play();		
		}

		if (userWord === "Imperio")
		{ 
			$("#imgTag").attr("src", "assets/images/crucio.jpg");				
		}				

		if (userWord === "Expelliarmus")
		{ 
			$("#imgTag").attr("src", "assets/images/expelliarmus.jpg");			
        	audioSpell.setAttribute("src", "assets/audios/expelliarmusN.mp3");
        	audioSpell.play();		
		}	

		if (userWord === "Lumos")
		{ 
			$("#imgTag").attr("src", "assets/images/lumos.jpg");				
		}	

		if (userWord === "Avada Kedavra")
		{ 
			$("#imgTag").attr("src", "assets/images/avada.jpg");				
		}	

		if (userWord === "Wingardium Leviosa")
		{ 
			$("#imgTag").attr("src", "assets/images/wingardium.jpg");	
			audioSpell.setAttribute("src", "assets/audios/wingardium.mp3");
        	audioSpell.play();
        	audioSpell.setAttribute("src", "assets/audios/leviosa.mp3");
        	audioSpell.play();					
		}

		if (userWord === "Stupefy")
		{ 
			$("#imgTag").attr("src", "assets/images/stupefy.jpg");			
		}		


	    if (userWord === "Incendio")
		{ 
			$("#imgTag").attr("src", "assets/images/incendio.jpg");			
        	audioSpell.setAttribute("src", "assets/audios/incendio.mp3");
        	audioSpell.play();		
		}


	    if (userWord === "Protego Totalum")
		{ 
			$("#imgTag").attr("src", "assets/images/protego.jpg");				
		}


	    if (userWord === "Obliviate")
		{ 
			$("#imgTag").attr("src", "assets/images/obliviate.jpg");			
        	audioSpell.setAttribute("src", "assets/audios/obliviate.mp3");
        	audioSpell.play();		
		}

		if (userWord === "Finite Incantatem")
		{ 
			$("#imgTag").attr("src", "assets/images/expelliarmus.jpg");			
        	audioSpell.setAttribute("src", "assets/audios/finite.mp3");
        	audioSpell.play();		
		}

		if (userWord === "Reparo")
		{ 
			$("#imgTag").attr("src", "assets/images/expelliarmus.jpg");			
        	audioSpell.setAttribute("src", "assets/audios/reparo.mp3");
        	audioSpell.play();		
		}

		if (userWord === "Alohomora")
		{ 
			$("#imgTag").attr("src", "assets/images/alohomora.jpg");			
        	audioSpell.setAttribute("src", "assets/audios/alohomora.mp3");
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