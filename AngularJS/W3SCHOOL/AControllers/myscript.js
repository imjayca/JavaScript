angular.module('myApp',[]).controller('namesCtrl',function ($scope) {
	$scope.names=[
		{name: 'John',			country:'Norway'},
		{name: 'Saun',			country:'USA'},
		{name: 'BlueShades',	country:'Bangladesh'}
	];
});