// const getSquaredArray = require("./calculator.js");

// it("should get squared numbers", () => {
//     const result = getSquaredArray([1, 2, 3]);
//     expect(result).toEqual([1, 4, 9]);
// });

//390, 844  iphone 12
//360,740 Samsung Galaxy S 8

const iPhone = { height: 844, width: 390 };

const Samsung = { height: 360, width: 740 };

const iPad = { height: 820, width: 1180 };

const gadjets = [iPhone, Samsung, iPad];

it('field test iphone', () => {
  const result = field({ ratio: 0.9, gadjet: iPhone });
  expect({ xLeftTop, yLeftTop, xRightButtom, yRightButtom }).toEqual({
    xLeftTop: 19,
    yLeftTop: 246,
    xRightButtom: 370,
    YRightButtom: 597,
  });
});

it('field test Samsung', () => {
  const result = field({ ratio: 0.9, gadjet: iPhone });
  expect(result).toEqual({
    xLeftTop: 19,
    yLeftTop: 246,
    xRightButtom: 370,
    YRightButtom: 597,
  });
});

it('field test iPad', () => {
  const result = field({ ratio: 0.9, gadjet: iPhone });
  expect(result).toEqual();
});

//import getSum, {getSquaredArray, getOddNumbers} from "./calculator"

// it("should keep  odd numbers only", () => {
//     const result = getOddNumbers([1, 2, 3, 4, 5]);
//     expect(result).toEqual([1, 4, 5]);
// });

// it("should get sum of numbers", () => {
//     const result = getSum([8, 4]);
//     expect(result).toEqual([12]);
// });
