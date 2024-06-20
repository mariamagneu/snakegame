# Snake-Game

[Click to play :)](https://mariamagneu.github.io/snakegame/)

## Description

This game was created in the context of a webDevelopment Bootcamp with IronHack in it's 3rd Week.

It is currently a MVP that, although it is functional on it's basic level, is still in progress and will have new features added on in the following weeks.

## MVP

Game starts, logs your score, makes you win with score 100, makes you loose when you hit a wall.

### Current Features

- **Game Start**: Initializes the game.
- **Score Logging**: Tracks the player's score.
- **Win Condition**: Player wins when the score reaches 100.
- **Lose Condition**: Player loses upon hitting a wall.

## Backlog

### Gameplay Enhancements ordered by priority

- Limit snake movement to left and right, and not 180 degrees.
- Make the snake die when the head collides with the body.
- Let the user lose three times prior to the real game over.
- Add different foods that give more score points.
- Introduce a hard level with faster speed and obstacles.
- Introduce an easy level where the player can go through
- Allow the user to choose the snake color.
- Create a log of local records.
- Add sounds for various game events.

## Data Structure

### Classes

- **Game Class**

  - Methods:
    - `start()`: Initializes the game. Has an interval which calls the move method and makes the snake move one headspace at a time.
    - `addFood()`: Adds food to the game.
    - `winFunction()`: Defines the win condition.
    - `gameOverFunction()`: Defines the game over condition.
    - `reset()`: Resets the game state.

- **Player Class**

  - Methods:
    - `move()`: Moves the snake. Takes into consideration the snake head and makes body follow it's movement.
    - `didCollideFood()`: Checks for collision with food.
    - `didCollideWall()`: Checks for collision with walls.
    - `increaseBodyLength()`: Increases the snake's length.
    - `destroy()`: Handles the destruction of the snake.

- **Food Class**
  - Methods:
    - `destroy()`: Removes the food from the game.

## States y States Transitions

![diagram of game flow](</images/Screenshot 2024-06-20 at 12.41.14.png>)

- **Start Screen**: Initial screen.
- **Game Screen**: Active gameplay screen.
- **Game Over Screen**: Screen displayed upon losing.
- **Win Screen**: Screen displayed upon winning.

## Tasks

- [ ] Create HTML structure.
- [ ] Hide all screens except the start screen initially in CSS.
- [ ] Style screens in CSS.
- [ ] Create JS files for index and all classes.
- [ ] Implement event listeners on buttons & keys in `index.js`.
- [ ] Implement `start` method in `index.js` to hide all but the game screen.
- [ ] Implement methods in Player class for movement, growth, collision check, and destruction.
- [ ] Implement methods in Game class to start the game, add food randomly, handle win/lose conditions, and reset.
- [ ] Implement method in Food class to destroy food.

## Links

- [Mermaid Chart Lnik](https://www.mermaidchart.com/raw/01f759d1-da28-46a7-90ea-766ba111eb79?theme=light&version=v0.1&format=svg)
- [Slides Link](http://slides.com)
- [Github repository Link](https://github.com/mariamagneu/snakegame)
- [Deployment Link](mariamagneu.github.io/snakegame/)
