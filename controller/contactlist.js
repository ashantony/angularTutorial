
var myApp= angular.module("myApp")
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

				
		// angular.module("myApp")
			myApp.filter( 'titleCase', function() {
				return function(input) {
						// input=input;		
					return input.replace(/\w\S*/g, function(txt){
						return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
				}
			});

		

	

			// 	myApp.directive('myContactDetails', function() {
			// 	  return {
			// 	    restrict: 'E',
			// 	    transclude: 'true',
			// 	    template = " <b>{{myContactDetails.firstname}} , {{myContactDetails.lastname}}</b>";
 		// 		    link: function($scope, element, attrs) {
   //          $scope.clickMe= function() {
   //              alert('inside click');
   //          }
			// 	  }
			// 	}
			// }
				
// 
// Creating custom directive(directive name: myContactDetails for popover contact details)

	myApp.directive('myContactDetails', function() {
    return {
    	scope: {
    		dataarray:'@'
    	},
    	
        // restrict: 'A',
        // replace: true,
        template: '<span>{{label}}</span>',
        link: function(scope, element, attrs) {
        		// console.log(scope.dataArray,"elements");
        	scope.label = attrs.popoverLabel;
        	$(element).find("span").popover({

        		trigger:'click',
        		html:true,
        		content:attrs.dataarray,
        		placement:'top'
        	});

            // scope.clickMe= function() {
            //     alert("click me inside fun");
            // }
        }
    }
});


// 		link: function(scope, element, attr){
//         element.append("<strong>"+attr.fname+" </strong>");
//         if(attr.firstname === ''){
//             element.append("<br> hi!");
//         }
//         else {
//             element.append("<br> hello!!");
//         }
//       }

//       	<script>
// $(document).ready(function(){
//     $('[data-toggle="popover"]').popover();
// });




			// angular.module('myApp', [ 'CustomFilterModule'])
			// 	.controller('HelloCtrl', ['$scope', function($scope){
			// 		$scope.firstname = '';
			// }])