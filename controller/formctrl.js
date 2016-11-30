var app= angular.module('myApp');
// console.log(app,"----")
app.controller('FormController', function($scope) {
    
    $scope.form = {};



// console.log(rootScope,"rootScope")
	$scope.submit = function(){
alert()
		 // console.log($scope.form.firstName);

		 // $log.debug('last name',$scope.form);
		var data=$scope.form;
		var dataArray = localStorage.getItem('data');
		// debugger
		dataArray = dataArray ? JSON.parse(dataArray) : [];
		dataArray.push(data);
		localStorage.setItem('data',JSON.stringify(dataArray));
		// dataArray=JSON.stringify(dataArray);
		var retrievedData= localStorage.getItem("data");
		// console.log(dataArray);

		$scope.dataArray = dataArray;
	}
    
});

