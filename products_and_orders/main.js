var app = angular.module('app',[])

var productsOnDisplay = [];


app.factory('productFactory', function(){
  var factory = {};
  var factoryProducts = [
    {
      name: "Hat",
      quantity: 50,
      price: 14.99
    }
  ];

  factory.create = function(newProduct, callback){
    factoryProducts.push(newProduct);
    callback(factoryProducts);
  }

  factory.delete = function(productToDelete, callback){
    // factoryProducts.splice(factoryProducts.indexOf(productToDelete), 1)
    console.log("before filter:",factoryProducts)
    factoryProducts = factoryProducts.filter(function(elem){return elem !== productToDelete})
    console.log("after filter:",factoryProducts)
    callback(factoryProducts)
  }

  factory.index = function(callback){
    callback(factoryProducts);
  }

  factory.buyProduct = function(productToPurchase, callback){
    factoryProducts[factoryProducts.indexOf(productToPurchase)].quantity -= 1
    callback(factoryProducts)

  }
  return factory;
});

app.controller('productController', function($scope, productFactory){
  $scope.newProduct = {quantity:50};

  console.log(productsOnDisplay);


  function display(factoryProducts){
    console.log(productsOnDisplay);
    productsOnDisplay = factoryProducts

  }

  productFactory.index(display)
  $scope.productsOnDisplay = productsOnDisplay
  $scope.add = function(newProduct){
    productFactory.create(newProduct, display)
    $scope.newProduct = {quantity:50}
  }

  $scope.delete = function(productToDelete){
    productFactory.delete(productToDelete, display)
  }

});

app.controller('orderController', function($scope, productFactory){
  $scope.productsOnDisplay = productsOnDisplay
  function display(factoryProducts){
    productsOnDisplay = factoryProducts
  }

  productFactory.index(display)

  $scope.purchase = function(productBeingSold){
    productFactory.buyProduct(productBeingSold, display)
  }
})
