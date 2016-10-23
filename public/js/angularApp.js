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


	var on = function(_callback){
		// socket.on('data', function(_data){
		// 	console.log(_data);
		// 	_callback();
		// });
		// socket.on('message', function(_data){
		// 	console.log(_data);
		// })
	}

	return {
		send	: send,
		on 		: on
	}
});