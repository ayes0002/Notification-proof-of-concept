document.addEventListener('deviceready', function () {
    var localNote = cordova.plugins.notification.local;
//    var dt = new Date();

    localNote.hasPermission(function (granted) {
        if(granted){
            console.log('Permission has been granted: ' + granted);
            schedule();
        } else {
            localNote.registerPermission(function (granted) {
                if(granted){
                    console.log('Permission has been registered: ' + granted);
                    console.log(localNote);
                    schedule();
                } else {
                    navigator.notification.alert("Reminder cannot be added because app doesn't have permission");
                }
            });
        }
    });
    
    function schedule (){
        localNote.schedule({
            id: 1,
            title: 'This is my reminder',
            text: "Good afternoon!",
            //firstAt: dt,
            every: "day", 
            icon: "../../vici.png"
        });
    }
    
    console.log(localNote.schedule);
    console.log(localNote.schedule.id);

    localNote.on("click", function (notification) {
        //alert(notification.text);
    });
});

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
    notify = true;
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true 
  };
    
});