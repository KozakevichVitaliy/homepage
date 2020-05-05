document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const d = document;

  const playGame = (e) => {
    const question = confirm('Do u realy wanna play the game??');
    if (!question) e.preventDefault();
  };

  d.getElementById('guitar').addEventListener('click', function () {
    this.childNodes[2].play();
  });
  d.getElementById('dinosaur').addEventListener('click', playGame);
  
});
