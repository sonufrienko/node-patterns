/**
 * Remote control for robotic car
 */

const readline = require('readline');
const conductor = require('./conductor');
const { MoveLeft, MoveRight, MoveBackwards, MoveForward, Exit } = require('./commands');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Welcome to Remote Car Controller!
Commands: 
${'\ta '.padEnd(10, '-')} move Left
${'\tw '.padEnd(10, '-')} move Forward
${'\td '.padEnd(10, '-')} move Right
${'\ts '.padEnd(10, '-')} move Backwards
${'\thistory '.padEnd(10, '-')} print command history
${'\texit '.padEnd(10, '-')} exit programm\n`);

rl.prompt();

rl.on('line', input => {
  const [commandName, ...options] = input.split(' ');

  switch (commandName) {
    case 'a':
      conductor.run(new MoveLeft());
      break;

    case 'w':
      conductor.run(new MoveForward());
      break;

    case 'd':
      conductor.run(new MoveRight());
      break;

    case 's':
      conductor.run(new MoveBackwards());
      break;

    case 'history':
      console.log(conductor.history.join(' '));
      break;

    case 'exit':
      conductor.run(new Exit());
      break;

    case '':
      break;

    default:
      console.log(`${commandName} - unsupported command!`);
      break;
  }

  rl.prompt();
});
