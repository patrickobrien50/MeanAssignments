appModule.controller('IndexController', function($scope, $location, friendsFactory) {
  $scope.friends = [];

  function get_friends(data) {
    $scope.friends = data;
  }

  var index = function () {
    friendsFactory.index(get_friends);
  }
  index();
  
  if (friendsFactory.error_messages.length > 1) {
    $scope.errormessage = friendsFactory.error_messages.pop();
  }

  $scope.move_to_new = function() {
    $location.url('/new');
  };
});