"use strict";


angular.module('app.smartAdmin', ['ui.router']);


angular.module('app.smartAdmin').config(function ($stateProvider) {

    $stateProvider
        .state('app.smartAdmin', {
            abstract: true,
            data: {
                title: 'SmartAdmin Intel'
            }
        })

        .state('app.smartAdmin.appLayout', {
            url: '/app-layout',
            data: {
                title: 'App Layout'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/app-layout.html'
                }
            }
        })

        .state('app.smartAdmin.diffVer', {
            url: '/different-versions',
            data: {
                title: 'Different Versions'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/smart-admin/views/different-versions.html'
                }
            }
        })
});