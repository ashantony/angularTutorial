
angular.module("myApp")
	.controller('ContactlistController',function($scope)
		{	
			function getData(){

		// getting data from local storage
				var dataArray= localStorage.getItem('data');
					dataArray= dataArray ? JSON.parse(dataArray) : [];
						$scope.dataArray = dataArray;
		}
		//populating dataarray
 		getData();

 			$scope.removeRow = function(item){
 				var index= -1;

 				var contactArray= localStorage.getItem('data');
 					contactArray=JSON.parse(contactArray);
 						contactArray.splice(contactArray.indexOf(item), 1);
							contactArray=JSON.stringify(contactArray);
								localStorage.setItem('data',contactArray);
									$scope.dataArray.splice($scope.dataArray.indexOf(item), 1)
				
 			}; 		
	     
});

				
			angular.module("myApp")
				.filter( 'titleCase', function() {
					return function(input) {
						// input=input;
						
						return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
				}
			});


var myApp = angular.module('myApp');
 
myApp.controller('myController', function($scope) {
    $scope.dataArray = [];
});



			// angular.module('myApp', [ 'CustomFilterModule'])
			// 	.controller('HelloCtrl', ['$scope', function($scope){
			// 		$scope.firstname = '';
			// }])