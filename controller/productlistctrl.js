angular.module("myApp")
    .controller('ProductlistController', function($scope) {
        
            $scope.productdetails={};
        function getData() {
            // getting data from local storage

           
            var product = $scope.productdetails;
            var tableArray = localStorage.getItem('product');

 // console.log(tableArray);

            tableArray = tableArray ? JSON.parse(tableArray) : [];
            tableArray.push(product);
            localStorage.setItem('product',JSON.stringify(tableArray));
            var retrievedProduct= localStorage.getItem("product");
            $scope.tableArray = tableArray;
            // console.log(tableArray);
        }

        getData();

    });