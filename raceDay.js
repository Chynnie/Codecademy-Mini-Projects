let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 18;

if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly === true) {
  console.log(`${raceNumber} will race at 9:30am`);
} else if (runnerAge > 18 || registeredEarly !== true) {
  console.log(`${raceNumber} will race at 11:00am`);
}

if (runnerAge < 18) {
  console.log(`${raceNumber} will race at 12:30pm`);
} else if (runnerAge = 18) {
  console.log('See the registration desk!');
}
