var dictExplore = angular.module('dictExplore', []);


dictExplore.controller('UIController', function($scope,socket){
	$scope.test = "hahahahahah";
	$scope.click = function(){
		socket.send("test");
	}



});


dictExplore.service('socket', function(){
	console.log('socket init');
	var socket = io.connect();

	var send = function(_data){
		socket.emit("data", _data);
	}

	socket.on('data', function(_data){
		console.log(_data);
	})


	var on = function( _event , _callback){
		socket.on(_event, _callback);
	}

	return {
		send	: send,
		on 		: on
	}
});