module.exports = angular.module('app', [ 'lumx' ]);
// default params
function printMessage ( status='working' ) {
// let
  let message = 'ES6';
// template string
  console.log( message + status );
}
printMessage();
