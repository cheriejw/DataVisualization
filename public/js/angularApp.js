var dictExplore = angular.module('dictExplore', []);


dictExplore.controller('UIController', function($scope,socket){

	$scope.jsonWord = null;

	$scope.focusedWord = "";
	$scope.click = function(){
		socket.send("test");
	}

	$scope.requestWord = function(_word){
		// console.log('request');
		socket.emit('requestWord', _word);
	}

	$scope.display = function(_word){

		$scope.focusedWord = _word.charAt(0).toUpperCase() + _word.slice(1);
		$scope.$apply();
	}

	$scope.search = function(_word){
		socket.emit('requestWord', _word);
		$scope.display(_word);
	}

	socket.on('json', function(_jsonObj){
		// console.log(_jsonObj);
		// Parse json object
		$scope.jsonWord = JSON.parse(_jsonObj);
		$scope.$apply();

	});


});


dictExplore.service('socket', function(){
	var socket = io.connect();

	var send = function(_data){
		socket.emit("data", _data);
	}

	var emit = function(_event, _data){
		socket.emit(_event, _data);
	}

	// socket.on('data', function(_data){
	// 	console.log(_data);
	// })


	var on = function( _event , _callback){
		socket.on(_event, _callback);
	}

	return {
		send	: send,
		on 		: on,
		emit 	: emit
	}
});