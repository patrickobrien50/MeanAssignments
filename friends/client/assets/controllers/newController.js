appModule.controller('NewController', function($scope, $location, friendsFactory) {
  $scope.new_friend = {};

  function get_friends(data) {
    $scope.friends = data;
  }
  
  var index = function () {
    friendsFactory.index(get_friends);
  }
  index();

  $scope.create = function() {
    friendsFactory.create($scope.new_friend, get_friends);
    $location.url('/');
  }
});
