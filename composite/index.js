const DiagnosisItem = require('./diagnosisItem');
const DiagnosisComposite = require('./diagnosisComposite');

const rightEngine = new DiagnosisItem({ element: 'Right engine', statusCode: 1 });
const leftEngine = new DiagnosisItem({ element: 'Left engine', statusCode: 1 });
const frontDoor = new DiagnosisItem({ element: 'Front door', statusCode: 1 });
const backDoor = new DiagnosisItem({ element: 'Back door', statusCode: 1 });

const engines = new DiagnosisComposite('Engines', [rightEngine, leftEngine]);
const doors = new DiagnosisComposite('Doors', [frontDoor, backDoor]);
const spaceship = new DiagnosisComposite('Spaceship', [engines, doors]);

console.log(spaceship.report(), '---\n');

// Failure
frontDoor.changeStatus({ statusCode: -1, description: 'Broken lock' });
console.log(spaceship.report(), '---\n');

// Fix
frontDoor.changeStatus({ statusCode: 1 });
console.log(spaceship.report());
