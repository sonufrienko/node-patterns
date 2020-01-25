class ApiProxy {
  constructor(target) {
    this.target = target;
  }

  /**
   *  Removal of abusive words
   */
  sendMessage(...args) {
    const newArgs = args.slice();
    
    if(newArgs[1].match(/asshole/i)) {
      newArgs[1] = newArgs[1].replace(/asshole/gi, '****');
    }

    return this.target.sendMessage.apply(this.target, newArgs);
  }

  receive(...args) {
    return this.target.receive.apply(this.target, args);
  }
}

module.exports = ApiProxy;
