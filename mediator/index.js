class User {
  #name = null;
  #chat = null;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set chat(chat) {
    this.#chat = chat;
  }

  sendMessage(message, to) {
    this.#chat.sendMessage(message, this, to);
  }

  onMessage(message, from) {
    console.log(`${this.#name} receive "${message}" from ${from}`);
  }
}


/**
 * Mediator
 */
class Chat {
  #users = [];

  joinUser(user) {
    this.#users.push(user);
    user.chat = this;
    console.log(`${user.name} joined the chat.`)
  }

  sendMessage(message, userFrom, nameTo) {
    if (nameTo) {
      // Send direct message
      const userTo = this.#users.find(u => u.name === nameTo);
      if (userTo) {
        userTo.onMessage(message, userFrom.name);
      } else {
        console.log(`${nameTo} not exists`);
      }
    } else {
      // Send broadcast message
      // TODO
    }
  }
}

const user1 = new User('Sergey');
const user2 = new User('Polina');

const homeChat = new Chat();
homeChat.joinUser(user1);
homeChat.joinUser(user2);
user1.sendMessage('Let\'s go play', 'Polina');