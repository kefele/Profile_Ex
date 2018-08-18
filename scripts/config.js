"use strict";

    angular.module("App")
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
        .when("/userProfile", {
            template: `
            '<user-profile></user-profile>'
            `
        })
        .when("/edit", {
            template: `
            '<edit></edit>'
            `
        })
        .otherwise({
            redirectTo: '/userProfile'
        })

    }])