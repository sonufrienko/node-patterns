/**
 * Let's forget that we have Node.js modules, ES modules, and Classes.
 * Let's create our own module.
 */

const baseUrl = 'https://api.example.com/v1/';

const API = (function(baseUrl) {
  let status = 'CONNECTED';

  function addMessage(text) {
    console.log({
      action: 'addMessage',
      baseUrl,
      text
    });
  }

  // export goes here
  return {
    addMessage,
    status
  };
})(baseUrl);

API.addMessage('Hello modules');
console.log('status: ', API.status);
