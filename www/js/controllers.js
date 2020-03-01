 var firebaseConfig = {
    apiKey: "AIzaSyBdTRZxYr0jpoy8KuMEbl_yMwve7E1S21c",
    authDomain: "maxapp-85793.firebaseapp.com",
    databaseURL: "https://maxapp-85793.firebaseio.com",
    projectId: "maxapp-85793",
    storageBucket: "maxapp-85793.appspot.com",
    messagingSenderId: "1044203467991",
    appId: "1:1044203467991:web:f7adbaa64dae14ad4bec92",
    measurementId: "G-NS789PQCZ4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

angular.module('starter.controllers', [])

.controller("Registro", function($scope, $rootScope){
  $scope.obtener = function(usuario){
    firebase.auth().createUserWithEmailAndPassword(usuario.Correo, usuario.Contra).then(function Listo(x){
      swal("Listo", "Registro correctamente", "success" );

      firebase.database().ref(x.user.uid).set({
        correo:usuario.Correo,
        ID:x.user.uid
      })

        //Cerrar Sesion -Sign Out
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });

    }).catch(function(error) {
       // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      swal("Error",errorMessage, "error");
    });
  }

})

.controller('DashCtrl', function($scope) {
  
  $scope.categorias=[
  {
    nombre:"TV y Video",
    icono: "ion-monitor"
  },
  {
    nombre:"Celulares",
    icono:"ion-ipad"
  },
  {
    nombre:"Linea blanca",
    icono:"ion-ios7-home"
  },
  {
    nombre:"Video Juegos",
    icono:"ion-game-controller-b"
  },
  {
    nombre:"Electrodomesticos",
    icono:"ion-laptop"
  },
  {
    nombre:"Computacion y Tables",
    icono:"ion-coffee"
  },
  {
    nombre:"Audio",
    icono:"ion-volume-medium"
  },
  {
    nombre:"Audio para vehiculos",
    icono:"ion-radio-waves"
  },
  {
    nombre:"Camara y Drones",
    icono:"ion-android-camera"
  },
  {
    nombre:"Audifonos y Bocinas",
    icono:"ion-headphone"
  },
  {
    nombre:"Prendas Electronicas",
    icono:"ion-battery-charging"
  },
  {
    nombre:"Cuidado Personal",
    icono:"ion-wand"
  },
  {
    nombre:"Ambientadores",
    icono:"ion-leaf"
  },
  {
    nombre:"Hogar Inteligente",
    icono:"ion-wifi"
  }
  ]})



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
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
