const SecurityHelper = require('./securityHelper');

const securityHelper = new SecurityHelper();
const user0 = securityHelper.signIn('user0');
const user1 = securityHelper.signIn('user1');
const user3 = securityHelper.signIn('user3');

console.log(user0, user1, user3);
