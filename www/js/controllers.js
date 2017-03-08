//https://www.sitepoint.com/integrating-local-notifications-in-cordova-apps/
//https://www.npmjs.com/package/taxiapps.local-notification
//https://github.com/katzer/cordova-plugin-local-notifications

document.addEventListener('deviceready', function () {
    
    // Setting a variable to the extension of cordova
    var localNote = cordova.plugins.notification.local;

    // Checks for permissions
    localNote.hasPermission(function (granted) {
        if(granted){
            console.log('Permission has been granted: ' + granted);
            schedule();
            
            // If there isnt a permission prompts the user with a modal for permission
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
    
    // Notification that will be triggered from the time is call in intervals of days
    function schedule (){
        localNote.schedule({
            id: 1,
            title: 'This is my reminder',
            text: "Good afternoon!",
            //firstAt: dt,
            every: "day", 
            //icon: "../../vici.png"
        });
    }
    
    // Once the user clicks the notification tab this function will be called
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