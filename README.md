# Memory-block-game

A fun and interactive memory game built with HTML, CSS, and JavaScript. Flip blocks to reveal hidden images and match pairs to win the game!

A "Memory Block" game, built using HTML, CSS, and JavaScript, is a classic matching game where players must flip over pairs of blocks to reveal hidden images, aiming to find matching pairs by memory alone. The game typically features a grid of blocks, each initially displaying a blank face, and the player clicks on blocks to flip them over, revealing an image underneath. If the two flipped blocks match, they stay revealed; if not, they flip back over, and the player continues clicking to find more pairs.

## Features 
<li> Images are shuffled each time the game starts for a unique experience.</li>
<li> Blocks flip to reveal images, providing smooth gameplay.</li>
<li> Easily restart the game with a new shuffled arrangement by clicking on the `new game` button.</li>

## Project Structure
 HTML | CSS |JavaScript
## Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/memory-block-game.git
Navigate to the project directory:
bash
Copy code
cd memory-block-game
Open index.html in your browser to play the game.
Usage
Game Setup: Open the game in a browser. Blocks are displayed in a grid, each hiding a shuffled image.
Playing the Game: Click on blocks to flip and reveal images. Match pairs of identical images to keep them face-up.
New Game: Press the "New Game" button to reset the board with a new random arrangement of images.
Code Overview
HTML:
Contains a div with the class game for the grid layout and a button with the ID newGameButton to reset the game.
CSS:
Styles include grid layout, block styling, and flip animation for blocks.
Includes button styling for an intuitive UI.
JavaScript:
shuffle() function to randomize images using the Fisher-Yates algorithm.
flipBlock() function handles block flips and matches.
startNewGame() function resets the game board and shuffles images when the "New Game" button is clicked.
Customization
Change Grid Size: Update grid-template-columns in the CSS to adjust the number of blocks per row.
Add More Images: Include more images in the images array and update the grid size accordingly.
Animation Speed: Adjust the transition duration in the .block CSS class to change flip speed.
Example Screenshot

Technologies Used
HTML - Structure of the game
CSS - Styling and animations
JavaScript - Game logic and interactivity
