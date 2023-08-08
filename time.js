const time = (initialTime, speed, interruptionSignal, callback) => {
  setTimeout( callback, 30000);
};


const gameStatus = () => {
  console.log('Game  is over');
};

module.exports = time;
