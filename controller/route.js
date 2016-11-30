var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/home", {
        templateUrl : "view/home.html"
    })
    .when("/aboutus", {
        templateUrl : "view/aboutus.html"
    })
    .when("/contactus", {
        templateUrl : "view/contactus.html",
        controller: "FormController"
    })
    .when("/contactlist", {
        templateUrl : "view/contactlist.html",
        controller: "ContactlistController"
    })
     .when("/product", {
        templateUrl : "view/product.html",
        controller: "ProductController"
    })
     .when("/productlist", {
        templateUrl : "view/productlist.html",
        controller: "ProductlistController"
    });

      
    
});