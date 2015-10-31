app.controller("rpsCtrl", function($scope, RpsServ){
	this.chooseRock = function(){
		$scope.rpsResult = RpsServ.battle("rock", "")
		console.log("rocking this");
		console.log($scope.rpsResult);
	}

	this.choosePaper = function(){
		$scope.rpsResult = RpsServ.battle("paper", "")
		console.log("papering this");
		console.log($scope.rpsResult);
	}

	this.chooseScissors = function(){
		$scope.rpsResult = RpsServ.battle("scissors", "")
		console.log("scissoring this");
		console.log($scope.rpsResult);
	}
});