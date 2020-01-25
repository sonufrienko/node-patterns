class API {
  sendMessage(to, message) {
    console.log(`${to} <<< ${message}`);
  }

  receive(messageCount) {
    return new Array(messageCount).fill('New message');
  }
}

module.exports = new API();
