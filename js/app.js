// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.inicio', {
      url: '/inicio',
      views: {
        'menuContent': {
          templateUrl: 'templates/principal.html'
        }
      }
    })
	
	.state('app.listcandidato', {
      url: '/listcandidato',
      views: {
        'menuContent': {
          templateUrl: 'templates/listCandidato.html'
        }
      }
    })
	
	.state('app.keiko', {
      url: '/keiko',
      views: {
        'menuContent': {
          templateUrl: 'templates/keiko.html'
        }
      }
    })
	
	.state('app.ppk', {
      url: '/ppk',
      views: {
        'menuContent': {
          templateUrl: 'templates/ppk.html'
        }
      }
    })
	
	.state('app.hojavidakeiko', {
      url: '/hojavidakeiko',
      views: {
        'menuContent': {
          templateUrl: 'templates/hojavidakeiko.html'
        }
      }
    })
	
	.state('app.hojavidappk', {
      url: '/hojavidappk',
      views: {
        'menuContent': {
          templateUrl: 'templates/hojavidappk.html'
        }
      }
    })
	
	.state('app.plangobiernokeiko', {
      url: '/plangobiernokeiko',
      views: {
        'menuContent': {
          templateUrl: 'templates/plangobiernokeiko.html'
        }
      }
    })
	
	.state('app.plangobiernoppk', {
      url: '/plangobiernoppk',
      views: {
        'menuContent': {
          templateUrl: 'templates/plangobiernoppk.html'
        }
      }
    })
	
	.state('app.socialkeiko', {
      url: '/socialkeiko',
      views: {
        'menuContent': {
          templateUrl: 'templates/socialkeiko.html'
        }
      }
    })
	
	.state('app.socialppk', {
      url: '/socialppk',
      views: {
        'menuContent': {
          templateUrl: 'templates/socialppk.html'
        }
      }
    })
	
	.state('app.institucionalkeiko', {
      url: '/institucionalkeiko',
      views: {
        'menuContent': {
          templateUrl: 'templates/institucionalkeiko.html'
        }
      }
    })
	
	.state('app.institucionalppk', {
      url: '/institucionalppk',
      views: {
        'menuContent': {
          templateUrl: 'templates/institucionalppk.html'
        }
      }
    })
	
	.state('app.economicokeiko', {
      url: '/economicokeiko',
      views: {
        'menuContent': {
          templateUrl: 'templates/economicokeiko.html'
        }
      }
    })
	
	.state('app.economicoppk', {
      url: '/economicoppk',
      views: {
        'menuContent': {
          templateUrl: 'templates/economicoppk.html'
        }
      }
    })
	
	.state('app.territorialkeiko', {
      url: '/territorialkeiko',
      views: {
        'menuContent': {
          templateUrl: 'templates/territorialkeiko.html'
        }
      }
    })
	
	.state('app.territorialppk', {
      url: '/territorialppk',
      views: {
        'menuContent': {
          templateUrl: 'templates/territorialppk.html'
        }
      }
    })
	
	.state('app.comparar', {
      url: '/comparar',
      views: {
        'menuContent': {
          templateUrl: 'templates/comparar.html'
        }
      }
    })
	
	.state('app.informar', {
      url: '/informar',
      views: {
        'menuContent': {
          templateUrl: 'templates/informar.html'
        }
      }
    })
	
	.state('app.encuestas', {
      url: '/encuestas',
      views: {
        'menuContent': {
          templateUrl: 'templates/encuestas.html'
        }
      }
    })
	
	.state('app.acerca', {
      url: '/acercaDe',
      views: {
        'menuContent': {
          templateUrl: 'templates/acercade.html'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});
