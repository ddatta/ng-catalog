"use strict";


angular.module('app.layout', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'app/layout/layout.tpl.html'
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                            'sparkline',
                            'easy-pie'
                        ]);
                }
            }
        });
    $urlRouterProvider.otherwise('/dashboard');

})

