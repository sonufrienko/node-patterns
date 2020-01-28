class MoveLeft {
  get name() {
    return 'left';
  }

  execute() {
    console.log('\u2b60');
  }
}

class MoveRight {
  get name() {
    return 'right';
  }

  execute() {
    console.log('\u2b62');
  }
}

class MoveBackwards {
  get name() {
    return 'backwards';
  }

  execute() {
    console.log('\u2b63');
  }
}

class MoveForward {
  get name() {
    return 'forward';
  }

  execute() {
    console.log('\u2b61');
  }
}

class Exit {
  get name() {
    return 'exit';
  }

  execute() {
    process.exit(0);
  }
}

module.exports = {
  MoveLeft,
  MoveRight,
  MoveBackwards,
  MoveForward,
  Exit
};
