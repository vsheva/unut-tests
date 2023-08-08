const time = require('./time');




it('it should finish game when time is up', () => {

  const callback =(data) =>{
    expect(data).toBeTruthy();
  }
  const result = time(30, speed, interruptionSignal, callback);
  
});