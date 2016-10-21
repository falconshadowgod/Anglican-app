angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope,chats) {
	$scope.chats =chats.all();
	$scope.remove =function(chat) {
		 chats.remove(chat);
	};
})
.controller('ChatDetailCtrl',function($scope,$stateparams,chats) {
	$scope.chat =chats.get($stateparams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true} ,
  $scope.model= {
  	 'color':'stable'}
  
})
 .controller('VenuesCtrl',function($scope) {});