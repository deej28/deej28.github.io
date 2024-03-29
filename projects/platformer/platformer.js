$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);
 
 
  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);
 
 
   
 
 
    createPlatform(300, 125, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(530, 200, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(200, 275, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(700, 400, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(1000, 365, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(0, 275, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(1300, 320, 200, 100); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(600, 535, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(100, 600, 200, 30); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(500, 650, 100, 100); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(800, 520, 600, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
    createPlatform(300, 400, 200, 20); // short but wide platform located 100 pixels from the left of the screen and 100 pixels from the bottom of the screen
 
 
 createCollectable("steve", 750, 300, 20, 0.5); // creates a "steve" collectible at the coordinates (500, 300), falling with a high gravity and bouncing with 50% bounce
 createCollectable("grace", 850, 300); // creates a "grace" collectible at the coordinates (500, 300), falling with default gravity and bouncing with default bounce %
 createCollectable("diamond", 400, 200); // creates a "diamond" collectible at the coordinates (400, 200), falling with high gravity and bouncing with 75% bounce
 
 
 createCannon("left", 490, 1000); // cannon on right wall, 200px down, shooting twice per second
 createCannon("right", 400, 1000); // cannon on left wall, 400px down, shooting once per second
 createCannon("left", 100, 1000); // cannon on right wall, 500px down, shooting triple per second
 createCannon("top", 300, 1000)
 createCannon("top", 800, 1000)
 
    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////
 
 
    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
 
 
 
 
 
 
   
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
 
 
 
 
 
 
 
 
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
 
 
 
 
 
 
 
 
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }
 
 
  registerSetup(setup);
 });
 
 
 