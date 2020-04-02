class Navigation {
  #strategy;
  #locationBegin;
  #locationEnd;

  setStrategy(strategy) {
    this.#strategy = strategy;
  }

  calculateTimeToDestination() {
    const timeInMinutes = this.#strategy.calculateTimeToDestination(this.#locationBegin, this.#locationEnd);
    return `By ${this.#strategy.name}, it will take ${timeInMinutes} min.`;
  }
}

class BaseStrategy {
  #name;
  #speed;

  constructor(name, speed) {
    this.#name = name;
    this.#speed = speed;
  }

  get name() {
    return this.#name;
  }

  get speed() {
    return this.#speed;
  }
}

class CarStrategy extends BaseStrategy {
  constructor() {
    super('Car', 60); // 60 km/h
  }

  calculateTimeToDestination(locationBegin, locationEnd) {
    const distanceToDestinationInMeters = 2500;
    return (distanceToDestinationInMeters / 1000 / this.speed) * 60;
  }
}

class WalkingStrategy extends BaseStrategy {
  constructor() {
    super('Walk', 5); // 5 km/h
  }

  calculateTimeToDestination(locationBegin, locationEnd) {
    const distanceToDestinationInMeters = 2500;
    return (distanceToDestinationInMeters / 1000 / this.speed) * 60;
  }
}

const byCar = new CarStrategy();
const byWalk = new WalkingStrategy();
const myRoute = new Navigation();

myRoute.setStrategy(byWalk);
console.log(myRoute.calculateTimeToDestination());

myRoute.setStrategy(byCar);
console.log(myRoute.calculateTimeToDestination());
