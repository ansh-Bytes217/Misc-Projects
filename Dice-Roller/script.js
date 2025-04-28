
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice face based on the roll
function updateDiceFace(roll) {
  const diceFace = document.getElementById('dice-face');
  
  // Changing the dice face for different rolls
  switch (roll) {
    case 1:
      diceFace.textContent = '⚀';
      break;
    case 2:
      diceFace.textContent = '⚁';
      break;
    case 3:
      diceFace.textContent = '⚂';
      break;
    case 4:
      diceFace.textContent = '⚃';
      break;
    case 5:
      diceFace.textContent = '⚄';
      break;
   
    case 6:
      diceFace.textContent = '⚅';
      break;
  }
}


document.getElementById('roll-btn').addEventListener('click', function() {
 
  const dice = document.getElementById('dice');
  dice.style.animation = 'rollAnimation 0.5s ease';
  
 
  setTimeout(function() {
    const roll = rollDice();
    updateDiceFace(roll);
    dice.style.animation = ''; // Reset the animation
  }, 500);
});
