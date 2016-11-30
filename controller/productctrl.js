var myApp = angular.module("myApp")

.directive('imageChange', function() {
        return {
            link: function(scope, element) {
                $(element).on('change', function(e) {
                    var files = e.target.files;
                    angular.forEach(files, function(file, i) {
                        var fileReader = new FileReader();
                        fileReader.onload = function(event) {
                            //console.log(fileReader.result);
                            $(element).next().append("<img src='" + fileReader.result + "'/>")
                            scope.fileUrl = fileReader.result;


                        };
                        fileReader.readAsDataURL(file);
                    });
                });
            }
        }
    })
	.controller('ProductController',function($scope)
		{

		$scope.items = [{
  id: 1,
  category: 'Electronics',
  // subItem: { name: 'aSubItem' }
}, {
  id: 2,
  category: 'Mechanical'
  // subItem: { name: 'bSubItem' }
}];


		$scope.subitems = [{
  sid: 1,
  subcategory: 'Mobile',
  id:1
  // subItem: { name: 'aSubItem' }
},{
	 sid: 2,
  subcategory: 'Television',
  id:1


}, {
  sid: 3,
  subcategory: 'Hammer',
  id:2
  // subItem: { name: 'bSubItem' }
}, {
	sid: 4,
  subcategory: 'Machine',
  id:2

}];


$scope.changeItem = function(){
// alert($scope.product.id);
// $scope.search = function() {

            var id = $scope.productform.id;
            // console.log(id);
            $scope.available = [];

            angular.forEach($scope.subitems, function(value) {

                if (value.id == $scope.productform.id) {
                    $scope.available.push(value);

                }
            });
        }

            // $scope.save = function() {

        //     var name = $scope.form.productname;
        //     var pname = $scope.form.category.type;
        //     var sname = $scope.form.subcategory.subtype;

        // }

        $scope.submit = function() {
            $scope.productform.image = $scope.fileUrl;

            var product = $scope.productform;
            var pArray = localStorage.getItem('product');
            pArray = pArray ? JSON.parse(pArray) : [];
            pArray.push(product);
            localStorage.setItem('product', JSON.stringify(pArray));

            var retrievedData = JSON.parse(localStorage.getItem("product"));
 	        console.log(retrievedData);

        }

		});