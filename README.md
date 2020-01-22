# Harry-Potter-Hangman

This project builds a hangman game that the comptuper randomly generate a spell from Harry Potter and the player tries to guess it by suggesting letters, within a certain number of guesses.
Deployed link: https://chloezhouny.github.io/Harry-Potter-Hangman/

<br>

## Demo 

![](assets/images/word_guess_demo.gif)




## Code Snippets
How I use UIkit kenburn and overflow hidden for my images' animation when user types the correct spell:
````HTML
<!-- html -->
<div class = "uk-overflow-hidden imgDiv">
      <img id = "imgTag" class="uk-animation-kenburns" width="380px"/>
</div>
````

```` CSS
/* css */
.uk-animation-kenburns {
    animation-name: uk-scale-kenburns;
    animation-duration: 15s;
    animation-iteration-count: infinite;
}
````
How I dynamically generate corresponding spell sounds when user types the correct spell:

````JAVASCRIPT
// js
if (userWord === spells[i])
{
      $("#imgTag").attr("src", spellImages[i]);
      var audioSpell = document.createElement("audio"); 
      audioSpell.setAttribute("src", spellAudioLink[i]);
      audioSpell.play();
      audioSpell.volume = 1;		
}
````

## Technology Used

* HTML
* CSS
* JAVASCRIPT
* UIkit


#### Author
      Chloe Zhou
