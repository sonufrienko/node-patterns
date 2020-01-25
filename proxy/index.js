const apiOrigin = require('./api');
const ApiProxy = require('./apiProxy');

const api = new ApiProxy(apiOrigin);

api.sendMessage('Jessica', "Let's take a coffee!");
api.sendMessage('Tom', "You're an asshole, yes asshole!");
console.log(api.receive(3));