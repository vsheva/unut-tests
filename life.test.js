const life = require('./life');

it('should return life counts at the beginning of game', () => {
  const result = life(3);
  expect(result).toEqual(3);
});

it('should return increase life counts when it ate bonus', () => {
  const result = life(4);
  expect(result).toEqual(7);
});

it('should return decreased life counts when it hits an obstacle', () => {
  const result = life(-1);
  expect(result).toEqual(6);
});

it('should return decreased life counts when it hits an obstacle', () => {
  const result = life(0);
  expect(result).toEqual(6);
});



// 1) life(3) => 3     // получил жизни на старте уровня
// 2) life(4) => 7     // сьел бонус
// 3) life(-1) => 6   //ударилось о препятствие
// 4) life(-1) => 5   //ударилось о препятствие
// 5) life(2) => 7     // сьел бонус
// 6) life(0) => 7      // не сьел не ударился
