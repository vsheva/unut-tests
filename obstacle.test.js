const obstacle = require('./obstacle');

const features = [
  {
    isMoving: true,
    sizeCells: 1,
  },
  {
    isMoving: false,
    sizeCells: 2,
  },
];


it('should show obstacle coordinate', () => {
  const result = obstacle(features, 40, event);
  expect(result).toEqual({
obstacleX: 5,
obstacleY: 10
});
});
