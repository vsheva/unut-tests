const obstacle = require('./obstacle');

const fieldSize = 40;
const snake = [{ x: 0, y: 0 }];

// it('should show obstacle coordinate', () => {
//   const features = 'fixed';
//   const event = 'Start game';
//   const result = obstacle(features, fieldSize, event, snake);

//   expect(result).toEqual({
//     obstacleX: 5,
//     obstacleY: 10,
//   });
// });

// {coordinateObstacle: { obstacleX: 0, obstacleY: 0 },showObstacle: true};
// fieldSize, snake, event, features, event

test('test show obstacke  in free cell within the field', () => {
  const features = 'fixed';
  const event = 'Start game';
  const newObstacle = obstacle(features, fieldSize, event, snake);
  const { obstacleX, obstacleY } = newObstacle;
  const freeObstacleCell = snake.every(
    item =>
      item.x !== obstacleX &&
      item.y !== obstacleY &&
      obstacleX > 0 &&
      obstacleX <= fieldSize &&
      obstacleY > 0 &&
      obstacleY <= fieldSize
  );

  expect(freeObstacleCell).toBe(true);
});
